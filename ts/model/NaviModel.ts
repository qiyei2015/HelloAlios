"use strict";
"use sound";

import UserBO = require("../data/UserBO");
import Model = require("yunos/appmodel/Model");
import ToastUtils = require("../utils/ToastUtils");

class NaviModel extends Model {
    public message: string;
    initProperties(){
        return {
            message:"导航页"
        }
    }

    queryUser(user:UserBO){
        ToastUtils.showToast("button Click queryUser !")
    }

    registerUser(user:UserBO){
        ToastUtils.showToast("button Click registerUser !")
    }
}

export = NaviModel