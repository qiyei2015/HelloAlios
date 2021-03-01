"use strict";
"use sound";

import UserBO = require("../data/UserBO");
import Model = require("yunos/appmodel/Model");
import ToastUtils = require("../utils/ToastUtils");
import HttpApi = require("../http/HttpApi");
class NaviModel extends Model {
    public message: string;
    initProperties(){
        return {
            message:"导航页"
        }
    }

    queryUser(name:string){
        return HttpApi.getInstance().isUserExist(name)
    }

    registerUser(name:string,pwd:string){
        return HttpApi.getInstance().registerUser(new UserBO(name,pwd,pwd))
    }
}

export = NaviModel