"use strict";
"use sound";
import Presenter = require("yunos/appmodel/Presenter");
import Router = require("yunos/appmodel/Router");
import TextView = require("yunos/ui/view/TextView");
import TapRecognizer = require('yunos/ui/gesture/TapRecognizer')
import ImageView = require("yunos/ui/view/ImageView")
import Rectangle = require('yunos/graphics/Rectangle')

const TAG = "HomePresenter"
let router:Router

class HomePresenter extends Presenter {

    get events() {
        return {
            title: {
                tap: function() {
                    this.model.tick();
                }
            },
            home_img:{
                tap: function() {
                    log.I(TAG,"homeImv click")
                }
            }
        };
    }

    onCreate() {
        // when using automatic module loading mechanism
        // view & model will be bound after presenter create
        // so for now
        // this.view & this.model will still be null
        router = this.context.router;
    }

    onViewAttached(){
        let touchRegion = [new Rectangle(0, 0, 100, 100)]

        let listImv:ImageView =  <ImageView>this.view.findViewById("list_img")
        //listImv.touchRegion = touchRegion
        listImv.addGestureRecognizer(new TapRecognizer())
        listImv.on("tap",event => {
            log.I(TAG,"listImv click")
            router.navigate("list")
        })

        let naviImv:ImageView =  <ImageView>this.view.findViewById("navi_img")
        naviImv.addGestureRecognizer(new TapRecognizer())
        naviImv.on("tap",event => {
            log.I(TAG,"naivImv click")
            router.navigate("navi")
        })

        let settingImv:ImageView =  <ImageView>this.view.findViewById("setting_img")
        settingImv.addGestureRecognizer(new TapRecognizer())
        settingImv.on("tap",event => {
            log.I(TAG,"settingImv click")
            router.navigate("setting")
        })
    }

    onDestroy() {
        // when using automatic module loading mechanism
        // you don't have to destroy view & model by yourself
        // the router will handle it automatically
    }

}

export = HomePresenter;
