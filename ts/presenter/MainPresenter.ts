"use strict";
"use sound";


import Router = require("@ali/caf-types/yunos/appmodel/Router");
import TextView = require("@ali/caf-types/yunos/ui/view/TextView");
import Presenter = require("yunos/appmodel/Presenter");
import TapRecognizer = require('yunos/ui/gesture/TapRecognizer')

const TAG = "MainPresenter"
let router:Router
class MainPresenter extends Presenter {

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
        let tv:TextView = this.view.findViewById("tv") as TextView
        tv.text = "1234383883"
        tv.addGestureRecognizer(new TapRecognizer())
        tv.on("tap",event => {
            log.I(TAG,"tv click")
            router.navigate("home")
        })
    }

    onDestroy(){
        log.I(TAG,"onDestroy");
    }
}

export = MainPresenter