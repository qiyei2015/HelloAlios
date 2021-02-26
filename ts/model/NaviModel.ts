"use strict";
"use sound";

import Model = require("yunos/appmodel/Model");


class NaviModel extends Model {
    public message: string;
    initProperties(){
        return {
            message:"导航页"
        }
    }
}

export = NaviModel