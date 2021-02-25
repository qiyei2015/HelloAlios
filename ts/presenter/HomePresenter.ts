"use strict";
"use sound";
import Presenter = require("yunos/appmodel/Presenter");
import Router = require("yunos/appmodel/Router");
import TextView = require("yunos/ui/view/TextView");
import TapRecognizer = require('yunos/ui/gesture/TapRecognizer')


const TAG = "HomePresenter"
let router:Router

class HomePresenter extends Presenter {

    get events() {
        return {
            title: {
                tap: function() {
                    this.model.tick();
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
        let homeBtn:TextView = this.view.findViewById("main_btn") as TextView
        homeBtn.addGestureRecognizer(new TapRecognizer())
        homeBtn.on("tap",event => {
            log.I(TAG,"homeBtn click")
            router.navigate("main")
        })
    }

    onDestroy() {
        // when using automatic module loading mechanism
        // you don't have to destroy view & model by yourself
        // the router will handle it automatically
    }

}

export = HomePresenter;
