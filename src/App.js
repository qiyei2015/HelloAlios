/*<@leixing>{"header":{"version":"3.0.2","filename":"App.js","sound":1},"types":["any","number","boolean","string","void","int","object",{"path":"../node_modules/@ali/caf-types/yunos/page/Page.js","name":""},{"path":"../node_modules/@ali/caf-types/yunos/appmodel/StackRouter.js","name":""},{"path":"../node_modules/@ali/caf-types/yunos/ui/markup/LayoutManager.js","name":""},{"path":"../node_modules/@ali/caf-types/yunos/ui/view/View.js","name":""},{"instance_of":8},{"cname":"App","supers":{"Page":7},"methods":[13,14,15,16,17]},{"fname":"constructor","ret":12},{"fname":"get theme","ret":3},{"fname":"onCreate"},{"fname":"onStart"},{"fname":"onStop"}],"exports":13}*/
"use strict";
const /*<@7>*/Page = require("yunos/page/Page");
const /*<@8>*/StackRouter = require("yunos/appmodel/StackRouter");
let /*<@11>*/router;
class /*<@13>*/App extends Page {
    get /*<@14>*/theme() {
        return "default";
    }
    /*<@15>*/onCreate() {
        log.I("onCreate");
    }
    /*<@16>*/onStart() {
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
        router.navigate("main");
    }
    /*<@17>*/onStop() {
        router.destroy();
    }
}
module.exports = App;
//# sourceMappingURL=App.js.map