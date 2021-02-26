"use strict";
"use sound";


import Router = require("yunos/appmodel/Router");
import TextView = require("yunos/ui/view/TextView");
import Presenter = require("yunos/appmodel/Presenter");
import TapRecognizer = require('yunos/ui/gesture/TapRecognizer')
import ImageView = require("yunos/ui/view/ImageView");
import View = require("yunos/ui/view/View");
import ListView = require('yunos/ui/view/ListView')
import ToastUtils = require("ts/util/ToastUtils");
import MyAdapter = require("ts/adapter/MyAdapter");
import ListModel = require("ts/model/ListModel");
import CompositeView = require("yunos/ui/view/CompositeView");

const TAG = "ListPresenter"
let router:Router
class ListPresenter extends Presenter {

    private router:Router
    private listView:ListView
    private defaultLoadingView:View

    onCreate(){
        router = this.context.router;
    }

    onViewAttached(){
        //初始化title bar
        this.initTitlebar(router)
        this.initView(this.view)
        //this.initData()
    }

    onDestroy(){
        log.I(TAG,"onDestroy");
    }

    initTitlebar(router:Router){
        let tv:TextView = <TextView>this.view.findViewById("title")
        tv.text = "list"
        let backImv = <ImageView>this.view.findViewById("back_img");
        backImv.addGestureRecognizer(new TapRecognizer())
        backImv.on("tap",event => {
            log.I(TAG,"backImv click")
            router.back()
        })
    }

    initView(view:View){
        this.defaultLoadingView = view.findViewById('default_loading')
        this.listView = <ListView> view.findViewById("content_list")
        // this.listView.on("itemselect",(itemView:View,position:number) => {

        //      ToastUtils.showToast("cilck pos=" + position)

        // })
    }

    initData(){
        let adapter = new MyAdapter()
        // 把数据添加到适配器
        //let model = <ListModel>this.model
        //adapter.setData(model.getLocalData())
        this.listView.adapter = adapter
    }
}




export = ListPresenter
