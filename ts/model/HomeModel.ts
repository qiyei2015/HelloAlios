"use strict";
"use sound";
import Model = require("yunos/appmodel/Model");

class HomeModel extends Model {
    public message: string;
    public count: number;
    initProperties() {
        return {
            message: "Hello AliOS for Car9999",
            count: 0
        };
    }

    tick() {
        this.message = `${++this.count} times`;
    }

}

export = HomeModel;
