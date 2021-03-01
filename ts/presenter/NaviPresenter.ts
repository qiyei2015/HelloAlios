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
import UserBO = require("../data/UserBO");

const TAG = "NaviPresenter"
let router:Router
class NaviPresenter extends Presenter {

    private router:Router
    private queryBtn:Button
    private registerBtn:TextView
    private queryTv:Button

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
        this.queryBtn.on("tap", () => {
            this.dataModel.queryUser(new UserBO("hxw","25"))
        })
        this.registerBtn = <Button> view.findViewById("register_btn")
        this.registerBtn.on("tap", () => {
            this.dataModel.registerUser(new UserBO("hxw","25"))
        })
    }
}

export = NaviPresenter
