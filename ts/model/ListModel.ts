"use strict";
"use sound";

import Model = require("yunos/appmodel/Model");




class ListModel extends Model {
    //与view中数据绑定
    public message: string;

    initProperties(){
        return {
            message:"列表页"
        }
    }

}

export = ListModel