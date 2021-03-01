"use strict";
"use sound";


import Router = require("yunos/appmodel/Router");
import TextView = require("yunos/ui/view/TextView");
import Presenter = require("yunos/appmodel/Presenter");
import TapRecognizer = require('yunos/ui/gesture/TapRecognizer')
import ImageView = require("yunos/ui/view/ImageView");
import View = require("yunos/ui/view/View")
import Button = require("yunos/ui/widget/Button")
import ToastUtils = require("../utils/ToastUtils");
import NaviModel = require("../model/NaviModel");



const TAG = "NaviPresenter"
let router:Router
class NaviPresenter extends Presenter {

    private router:Router
    private queryBtn:Button
    private registerBtn:TextView
    private queryTv:TextView
    private registerTv:TextView

    private dataModel:NaviModel

    onCreate(){
        router = this.context.router;
    }

    onViewAttached(){
        this.dataModel = <NaviModel>this.model
        //初始化title bar
        this.initTitlebar(router)
        this.initView(this.view)
    }

    onDestroy(){
        log.I(TAG,"onDestroy");
    }

    initTitlebar(router:Router){
        let tv:TextView = <TextView>this.view.findViewById("title")
        tv.text = "导航"
        let backImv = <ImageView>this.view.findViewById("back_img");
        backImv.addGestureRecognizer(new TapRecognizer())
        backImv.on("tap",event => {
            log.I(TAG,"backImv click")
            router.back()
        })
    }

    initView(view:View){
        this.queryBtn = <Button> view.findViewById("query_btn")
        this.queryTv = <TextView> view.findViewById("query_content")
        this.queryBtn.on("tap", () => {
            ToastUtils.showToast("button Click queryUser !")
            this.dataModel.queryUser("hxw").subscribe((data) => {
                let msg = JSON.stringify(data)
                log.I(TAG,"queryUser,success=" + msg)
                this.queryTv.text = msg
            },
            (err) => {
                log.I(TAG,"queryUser,error=" + err)
            })
        })

        this.registerBtn = <Button> view.findViewById("register_btn")
        this.registerTv = <TextView> view.findViewById("register_content")
        this.registerBtn.on("tap", () => {
            ToastUtils.showToast("button Click registerUser !")
            this.dataModel.registerUser("hxw","123456").subscribe((data) => {
                let msg = JSON.stringify(data)
                log.I(TAG,"registerUser,success=" + msg)
                this.registerTv.text = msg
            },
            (err) => {
                log.I(TAG,"registerUser,error=" + err)
            })
        })
    }
}

export = NaviPresenter
