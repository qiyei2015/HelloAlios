import HttpClient = require('yunos/net/HttpClient')
import { throwError, fromEvent } from 'rxjs'
import { map, timeoutWith, buffer, first, filter } from 'rxjs/operators'
import Constants = require('../common/Constants')

interface IOptions {
	url: string
	method: string
	params?: object
	headers?: any
}

class RxHttpClient {
	private cookies: string[]
	private timeout: number
	private headers?: string
	private static _instance: RxHttpClient

	constructor(cookie?: string) {
		this.cookies = []
		this.timeout = 15000
		this.headers = 'Content-Type: application/json;charset=utf-8'
		if (cookie !== undefined) {
			this.setCookie(cookie)
		}
	}

	static getInstance() {
		if (!this._instance) {
			this._instance = new RxHttpClient()
		}
		return this._instance
	}

	setCookie(cookie: string) {
		const cookies = cookie.split(';')
		for (let c of cookies) {
			c = c.replace(/^\s/, '')
			this.cookies.push(c)
		}
		return this
	}

	setHeaders(headers: object) {
		this.headers = JSON.stringify(headers)
	}

	request(opt: IOptions) {
		let postData = null
		if(opt.params != null){
			postData = new Buffer(JSON.stringify(opt.params),'utf-8')
		}
		
		if (opt.headers != null) {
			this.headers = ''
			for (let key in opt.headers) {
				let header = `${key}:${opt.headers[key]}\r\n`
				this.headers = this.headers.concat(header)
			}
		}

		const options = {
			url: opt.url,
			method: opt.method,
			headers: this.headers,
			body: postData,
		}

		const request = new HttpClient(options)

		request.connect((err, id) => {
			log.I(Constants.HTTP_TAG,'begin request! err:' + err + ' id:' + id)
		})

		request.on('response', (header: any) => {
			let err = ''
			switch (header.code) {
				case 302:
					err = '登录超时，请重新登录'
					break
				case 400:
					err = '请求错误'
					break
				case 401:
					err = '未授权，请登录'
					break
				case 403:
					err = '拒绝访问'
					break
				case 404:
					err = '请求地址出错'
					break
				case 408:
					err = '请求超时'
					break
				case 500:
					err = '服务器内部错误'
					break
				case 501:
					err = '服务未实现'
					break
				case 502:
					err = '网关错误'
					break
				case 503:
					err = '服务不可用'
					break
				case 504:
					err = '网关超时'
					break
				case 505:
					err = 'HTTP版本不受支持'
					break
				default:
					err = '请求成功'
					break
			}
			log.I(Constants.HTTP_TAG,err + ' code:' + header.code)
		})

		const doOnData = fromEvent(request, 'data')

		const doOnComplete = fromEvent(request, 'complete')

		const observable = doOnData.pipe(
			buffer(doOnComplete),

			map((buffers: Buffer[]) => {
				try {
					const data = Buffer.concat(buffers).toString()
					return JSON.parse(data)
				} catch (error) {
					throw error
				}
			}),

			first(),

			timeoutWith(this.timeout, throwError('Request timeout!'))
		)
		return observable
	}

	get(url: string, headers?: object) {
		const options = {
			url: url,
			method: HttpClient.Method.GET,
			headers: headers,
		}
		return this.request(options)
	}

	post(url: string, params: object, headers?: object) {
		const options = {
			url: url,
			method: HttpClient.Method.POST,
			params: params,
			headers: headers,
		}
		return this.request(options)
	}
}

export = RxHttpClient
