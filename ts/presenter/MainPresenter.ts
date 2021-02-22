"use strict";
"use sound";


import TextView = require("@ali/caf-types/yunos/ui/view/TextView");
import Presenter = require("yunos/appmodel/Presenter");
import TapRecognizer = require('yunos/ui/gesture/TapRecognizer')

const TAG = "MainPresenter"
class MainPresenter extends Presenter {

    onCreate(){
        log.I(TAG,"onCreate");
    }

    onViewAttached(){
        let tv:TextView = this.view.findViewById("tv") as TextView
        tv.text = "1234383883"
        tv.addGestureRecognizer(new TapRecognizer())
        tv.on("tap",event => {
            log.I(TAG,"tv click")
        })
    }

    onDestroy(){
        log.I(TAG,"onDestroy");
    }
}

export = MainPresenter