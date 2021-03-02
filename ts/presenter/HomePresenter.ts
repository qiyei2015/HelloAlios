"use strict";
"use sound";
import Presenter = require("yunos/appmodel/Presenter");
import Router = require("yunos/appmodel/Router");
import View = require("yunos/ui/view/View");
import TapRecognizer = require('yunos/ui/gesture/TapRecognizer')
import ImageView = require("yunos/ui/view/ImageView")
import Rectangle = require('yunos/graphics/Rectangle')
import Button = require("yunos/ui/widget/Button")
import PropertyAnimation = require('yunos/ui/animation/PropertyAnimation')
import AnimationGroup = require('yunos/ui/animation/AnimationGroup')



const TAG = "HomePresenter"
let router:Router

class HomePresenter extends Presenter {

    get events() {
        return {
            title: {
                tap: function() {
                    this.model.tick();
                }
            },
            home_img:{
                tap: function() {
                    log.I(TAG,"homeImv click")
                }
            }
        };
    }

    onCreate() {
        // when using automatic module loading mechanism
        // view & model will be bound after presenter create
        // so for now
        // this.view & this.model will still be null
        router = this.context.router;
    }

    onViewAttached(){
        let touchRegion = [new Rectangle(0, 0, 100, 100)]

        let listImv:ImageView =  <ImageView>this.view.findViewById("list_img")
        //listImv.touchRegion = touchRegion
        listImv.addGestureRecognizer(new TapRecognizer())
        listImv.on("tap",event => {
            log.I(TAG,"listImv click")
            router.navigate("list")
        })

        let naviImv:ImageView =  <ImageView>this.view.findViewById("navi_img")
        naviImv.addGestureRecognizer(new TapRecognizer())
        naviImv.on("tap",event => {
            log.I(TAG,"naivImv click")
            router.navigate("navi")
        })

        let settingImv:ImageView =  <ImageView>this.view.findViewById("setting_img")
        settingImv.addGestureRecognizer(new TapRecognizer())
        settingImv.on("tap",event => {
            log.I(TAG,"settingImv click")
            router.navigate("setting")
        })

        let btn1:Button =  <Button>this.view.findViewById("anim_btn1")
        btn1.on("tap",event => {
            this.startRotationAnim(btn1)
        })

        let btn2:Button =  <Button>this.view.findViewById("anim_btn2")
        btn2.on("tap",event => {
            this.startAlphaAnim(btn2)
        })

        let btn3:Button =  <Button>this.view.findViewById("anim_btn3")
        btn3.on("tap",event => {
            this.startScaleAnim(btn3)
        })

        let btn4:Button =  <Button>this.view.findViewById("anim_btn4")
        btn4.on("tap",event => {
            this.startGroupAnim(btn1,btn2,btn3)
        })
    }

    onDestroy() {
        // when using automatic module loading mechanism
        // you don't have to destroy view & model by yourself
        // the router will handle it automatically
    }

    startRotationAnim(view:View){
        let propertyAnimation = new PropertyAnimation(view);
        propertyAnimation.from = {rotationZ: 0}
        propertyAnimation.to = {rotationZ: 360}
        propertyAnimation.duration = 2000
        propertyAnimation.start()

    }

    startAlphaAnim(view:View){
        let propertyAnimation = new PropertyAnimation(view);
        propertyAnimation.from = {opacity: 1}
        propertyAnimation.to = {opacity: 0}
        propertyAnimation.duration = 2000
        propertyAnimation.start()

    }

    startScaleAnim(view:View){
        let propertyAnimation = new PropertyAnimation(view);
        propertyAnimation.from = {scaleX: 1,scaleY:1}
        propertyAnimation.to = {scaleX: 2,scaleY:2}
        propertyAnimation.duration = 2000
        propertyAnimation.start()
        propertyAnimation.addListener("scaleX",(scale) => {
            log.I(TAG,"startScaleAnim scaleX=" + scale)
        })
    }

    startGroupAnim(view1:View,view2:View,view3:View){
        let animationGroup = new AnimationGroup();
        let propertyAnimation1 = new PropertyAnimation(view1);
        propertyAnimation1.from = {rotationZ: 0}
        propertyAnimation1.to = {rotationZ: 360}
        propertyAnimation1.duration = 2000

        let propertyAnimation2 = new PropertyAnimation(view2);
        propertyAnimation2.from = {opacity: 1}
        propertyAnimation2.to = {opacity: 0}
        propertyAnimation2.duration = 2000

        let propertyAnimation3 = new PropertyAnimation(view3);
        propertyAnimation3.from = {scaleX: 1,scaleY:1}
        propertyAnimation3.to = {scaleX: 2,scaleY:2}
        propertyAnimation3.duration = 2000

        animationGroup.add(propertyAnimation1)
        animationGroup.add(propertyAnimation2)
        animationGroup.add(propertyAnimation3)

        animationGroup.start()
    }
}

export = HomePresenter;
