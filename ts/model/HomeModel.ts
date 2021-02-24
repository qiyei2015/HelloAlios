"use strict";
"use sound";
import Model = require("yunos/appmodel/Model");

class HomeModel extends Model {
    public message: string;
    public count: number;
    initProperties() {
        return {
            message: "AliOS",
            count: 0
        };
    }

    tick() {
        this.message = `${++this.count} times`;
    }

}

export = HomeModel;
