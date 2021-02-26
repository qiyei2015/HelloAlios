"use strict";
"use sound";


import Router = require("yunos/appmodel/Router");
import TextView = require("yunos/ui/view/TextView");
import Presenter = require("yunos/appmodel/Presenter");
import TapRecognizer = require('yunos/ui/gesture/TapRecognizer')
import ImageView = require("yunos/ui/view/ImageView");

const TAG = "ListPresenter"
let router:Router
class ListPresenter extends Presenter {

    router:Router

    onCreate(){
        let context = this.context

        router = this.context.router;

        log.I(TAG,"onCreate");
        log.I(TAG,"path=" + context.routeInfo.path)
        log.I(TAG,"query=" + context.routeInfo.query)
        log.I(TAG,"data=" + context.data)
    }

    onViewAttached(){
        let tv:TextView = <TextView>this.view.findViewById("content")
        tv.text = "1234383883"
        tv.addGestureRecognizer(new TapRecognizer())
        tv.on("tap",event => {
            log.I(TAG,"tv click")
            router.navigate("home")
        })
        
        let homeImv:ImageView = <ImageView>this.view.findViewById("test_img")
        homeImv.addGestureRecognizer(new TapRecognizer())
        homeImv.addEventListener("tap",event => {
            log.I(TAG,"homeImv click")
            //router.navigate("home")
        })

    }

    onDestroy(){
        log.I(TAG,"onDestroy");
    }
}

export = ListPresenter
