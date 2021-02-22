/*<@leixing>{"header":{"version":"3.0.2","filename":"presenter/HomePresenter.js","sound":1},"types":["any","number","boolean","string","void","int","object",{"path":"../../node_modules/@ali/caf-types/yunos/appmodel/Presenter.js","name":""},{"cname":"HomePresenter","supers":{"Presenter":7},"methods":[9,10,14,15]},{"fname":"constructor","ret":8},{"fname":"get events","ret":13},{"fname":""},{"oname":"","fields":{"tap":-11}},{"oname":"","fields":{"title":-12}},{"fname":"onCreate"},{"fname":"onDestroy"}],"exports":9}*/
"use strict";
const /*<@7>*/Presenter = require("yunos/appmodel/Presenter");
class /*<@9>*/HomePresenter extends Presenter {
    get /*<@10>*/events() {
        return /*<@13>*/{
            title: /*<@12>*/{
                tap: /*<@11>*/function () {
                    this.model.tick();
                }
            }
        };
    }
    /*<@14>*/onCreate() {
        // when using automatic module loading mechanism
        // view & model will be bound after presenter create
        // so for now
        // this.view & this.model will still be null
    }
    /*<@15>*/onDestroy() {
        // when using automatic module loading mechanism
        // you don't have to destroy view & model by yourself
        // the router will handle it automatically
    }
}
module.exports = HomePresenter;
//# sourceMappingURL=HomePresenter.js.map