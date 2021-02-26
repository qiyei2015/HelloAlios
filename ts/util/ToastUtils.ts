"use strict";
"use sound";

import Toast = require('yunos/ui/widget/Toast')

class ToastUtils {
    
    static showToast(message:string){
        let toast:Toast = new Toast()
        toast.text = message
        toast.show()
    }
}

export = ToastUtils