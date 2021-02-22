/*<@leixing>{"header":{"version":"3.0.2","filename":"model/HomeModel.js","sound":1},"types":["any","number","boolean","string","void","int","object",{"path":"../../node_modules/@ali/caf-types/yunos/appmodel/Model.js","name":""},{"cname":"HomeModel","supers":{"Model":7},"fields":{"message":3,"count":1},"methods":[9,10,12]},{"fname":"constructor","ret":8},{"fname":"initProperties","ret":11},{"oname":"","fields":{"message":-3,"count":-5}},{"fname":"tick"}],"exports":9}*/
"use strict";
const /*<@7>*/Model = require("yunos/appmodel/Model");
class /*<@9>*/HomeModel extends Model {
    /*<@10>*/initProperties() {
        return /*<@11>*/{
            message: "Hello AliOS for Car9999",
            count: 0
        };
    }
    /*<@12>*/tick() {
        this.message = `${++this.count} times`;
    }
}
module.exports = HomeModel;
//# sourceMappingURL=HomeModel.js.map