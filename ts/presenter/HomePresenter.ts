"use strict";
"use sound";
import Presenter = require("yunos/appmodel/Presenter");

class HomePresenter extends Presenter {

    get events() {
        return {
            title: {
                tap: function() {
                    this.model.tick();
                }
            }
        };
    }

    onCreate() {
        // when using automatic module loading mechanism
        // view & model will be bound after presenter create
        // so for now
        // this.view & this.model will still be null
    }

    onDestroy() {
        // when using automatic module loading mechanism
        // you don't have to destroy view & model by yourself
        // the router will handle it automatically
    }

}

export = HomePresenter;
