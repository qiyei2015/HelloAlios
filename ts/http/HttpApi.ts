import { Observable, throwError, bindCallback } from 'rxjs'
import RxHttpClient = require('../http/RxHttpClient')
import { map, mergeMap } from 'rxjs/operators'


import Constants = require('../common/Constants')
import UserBO = require('../data/UserBO')

interface IHeaders {
	'Content-Type': string
}

class HttpApi {
	private static _instance: HttpApi
	private headers: IHeaders
	private BASE_URL: string
	private httpClient: RxHttpClient

	constructor() {
		this.BASE_URL = Constants.BASE_URL
		this.httpClient = RxHttpClient.getInstance()
	}

	static getInstance() {
		return this._instance || (this._instance = new this())
	}

	isUserExist(name: string): Observable<any> {
		let reqUrl:string = this.BASE_URL + Constants.USER_EXIST + "?name=" + name
		//pipe 连接符？
		return this.httpClient.get(reqUrl).pipe(
			map((data) => {
				if (data.code === 200) {
					return data
				} else {
					throw new Error(data.errorMessage)
				}
			}),
		)
	}

	registerUser(userBO: UserBO): Observable<any> {
		let reqUrl:string = this.BASE_URL + Constants.REGISTER_USER
		
		return this.httpClient.post(reqUrl,userBO).pipe(
			map((data) => {
				if (data.code === 200) {
					return data
				} else {
					throw new Error(data.errorMessage)
				}
			}),
		)
	}
	
}
export = HttpApi
