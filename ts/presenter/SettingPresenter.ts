"use strict";
"use sound";


import Router = require("yunos/appmodel/Router");
import TextView = require("yunos/ui/view/TextView");
import Presenter = require("yunos/appmodel/Presenter");
import TapRecognizer = require('yunos/ui/gesture/TapRecognizer')
import ImageView = require("yunos/ui/view/ImageView");
import View = require("yunos/ui/view/View");
import CheckBox  = require("yunos/ui/widget/CheckBox");
import Switch = require("yunos/ui/widget/Switch");

const TAG = "SettingPresenter"
let router:Router
class SettingPresenter extends Presenter {

    private router:Router
    private checkBox1:CheckBox
    private switch1:Switch

    onCreate(){
        router = this.context.router;
    }

    onViewAttached(){
        //初始化title bar
        this.initTitlebar(router)
        this.initView(this.view)
    }

    onDestroy(){
        log.I(TAG,"onDestroy");
    }

    initTitlebar(router:Router){
        let tv:TextView = <TextView>this.view.findViewById("title")
        tv.text = "设置"
        let backImv = <ImageView>this.view.findViewById("back_img");
        backImv.addGestureRecognizer(new TapRecognizer())
        backImv.on("tap",event => {
            log.I(TAG,"backImv click")
            router.back()
        })
    }

    initView(view:View){
        this.checkBox1 = <CheckBox>view.findViewById("checkBox1")
        this.checkBox1.on("checkedchanged", function (checkObj, value) {
            log.I(TAG,"CheckBox checkObj:" + checkObj + ", value:" + value);
        });
        this.switch1 = <Switch>view.findViewById("switch1")
        this.switch1.on("valuechanged", (value)=> {
            log.I(TAG," switch value:" + value);
        });
    }
}

export = SettingPresenter
