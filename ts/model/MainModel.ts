"use strict";
"use sound";

import Model = require("@ali/caf-types/yunos/appmodel/Model");




class MainModel extends Model {

    initProperties(){
        return {
            message:"hello world"
        }
    }
}

export = MainModel