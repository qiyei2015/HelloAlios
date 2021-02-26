"use strict";
"use sound";

import Model = require("yunos/appmodel/Model");


class SettingModel extends Model {
    public message: string;
    initProperties(){
        return {
            message:"设置页"
        }
    }
}

export = SettingModel