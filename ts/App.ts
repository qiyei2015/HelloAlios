"use strict";
"use sound";
import Page = require("yunos/page/Page");
import StackRouter = require("yunos/appmodel/StackRouter");

import LayoutManager = require("yunos/ui/markup/LayoutManager");
import View = require("@ali/caf-types/yunos/ui/view/View");

let router:StackRouter
class App extends Page {
    

    get theme() {
        return "default";
    }

    onCreate(){
        log.I("onCreate");
    }

    onStart() {
        log.I("onStart");
        router = new StackRouter();

        router.container = this.window;

        // route will be register automatically
        // if you follow the automatic module loading mechanism
        // route path -> "home"
        // presenter  -> "src/presenter/HomePresenter.js"
        // view       -> "res/{qualifier}/layout/home.xml"
        // model      -> "src/model/HomeModel.js"
        //router.navigate("home");

        // let self = this
        // LayoutManager.load("main",null,function(err: Error, rootView?: View) {
        //     if(!err){
        //         self.window.addChild(rootView)
        //     }
        // })

        // //注册路由
        // router.route("main",() => {
        //     return require("./presenter/MainPresenter")
        // })

        router.navigate("main")

    }

    onStop(){
        router.destroy()
    }
}

export = App;
