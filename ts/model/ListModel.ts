"use strict";
"use sound";

import Model = require("@ali/caf-types/yunos/appmodel/Model");




class ListModel extends Model {

    initProperties(){
        return {
            message:"hello world"
        }
    }
}

export = ListModel