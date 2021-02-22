/*<@leixing>{"header":{"version":"3.0.2","filename":"App.js","sound":1},"types":["any","number","boolean","string","void","int","object",{"path":"../node_modules/@ali/caf-types/yunos/page/Page.js","name":""},{"path":"../node_modules/@ali/caf-types/yunos/appmodel/StackRouter.js","name":""},{"path":"../node_modules/@ali/caf-types/yunos/ui/markup/LayoutManager.js","name":""},{"path":"../node_modules/@ali/caf-types/yunos/ui/view/View.js","name":""},{"cname":"App","supers":{"Page":7},"methods":[12,13,14,15]},{"fname":"constructor","ret":11},{"fname":"get theme","ret":3},{"fname":"onCreate"},{"fname":"onStart"},{"instance_of":8},{"fname":"","params":{"err":18,"rootView":19}},{"bname":"Error"},{"instance_of":10}],"exports":12}*/
"use strict";
const /*<@7>*/Page = require("yunos/page/Page");
const /*<@8>*/StackRouter = require("yunos/appmodel/StackRouter");
const /*<@9>*/LayoutManager = require("yunos/ui/markup/LayoutManager");
class /*<@12>*/App extends Page {
    get /*<@13>*/theme() {
        return "default";
    }
    /*<@14>*/onCreate() {
        log.I("onCreate");
    }
    /*<@15>*/onStart() {
        log.I("onStart");
        let /*<@16>*/router = new StackRouter();
        router.container = this.window;
        // route will be register automatically
        // if you follow the automatic module loading mechanism
        // route path -> "home"
        // presenter  -> "src/presenter/HomePresenter.js"
        // view       -> "res/{qualifier}/layout/home.xml"
        // model      -> "src/model/HomeModel.js"
        //router.navigate("home");
        let /*<@11>*/self = this;
        let /*<@4>*/run = LayoutManager.load("main", null, /*<@17>*/function (/*<@18>*/err, /*<@19>*/rootView) {
            if (!err) {
                self.window.addChild(rootView);
            }
        });
    }
}
module.exports = App;
//# sourceMappingURL=App.js.map