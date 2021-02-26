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

    getLocalData():string[]{
        let data:string[];
        for (let i = 0; i < 10000; i++) {
            data[i] = "数据 " + i;
        }
        return data
    }
}

export = ListModel