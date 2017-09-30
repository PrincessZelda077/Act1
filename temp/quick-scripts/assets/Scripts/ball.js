(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/ball.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1cc02yhWv9HIZHaUZfdcmZ2', 'ball', __filename);
// Scripts/ball.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {

        acceleration: 0
    },

    // use this for initialization
    onLoad: function onLoad() {

        // switch of acceleration direction
        this.accLeft = false;
        this.accRight = false;
        this.accUp = false;
        this.accDown = false;
        // current horizontal speed of main character
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setInputControl();
    },

    setInputControl: function setInputControl() {
        var self = this;
        // add keyboard event listener
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            // When there is a key being pressed down, judge if it's the designated directional button and set up acceleration in the corresponding direction
            onKeyPressed: function onKeyPressed(keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.a:
                        self.accLeft = true;
                        self.accRight = false;
                        break;
                    case cc.KEY.d:
                        self.accLeft = false;
                        self.accRight = true;
                        break;
                    case cc.KEY.w:
                        self.accDown = false;
                        self.accUp = true;
                        break;
                    case cc.KEY.s:
                        self.accUp = false;
                        self.accDown = true;
                        break;
                }
            },
            // when releasing the button, stop acceleration in this direction
            onKeyReleased: function onKeyReleased(keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.a:
                        self.accLeft = false;
                        break;
                    case cc.KEY.d:
                        self.accRight = false;
                        break;
                    case cc.KEY.w:
                        self.accUp = false;
                        break;
                    case cc.KEY.s:
                        self.accDown = false;
                        break;
                }
            }
        }, self.node);
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {

        // update speed of each frame according to the current acceleration direction
        if (this.accLeft) {
            this.xSpeed -= 5 * this.acceleration * dt;
        } else if (this.accRight) {
            this.xSpeed += 5 * this.acceleration * dt;
        } else {
            this.xSpeed = 0;
        }
        // Up & Down
        if (this.accUp) {
            this.ySpeed += 5 * this.acceleration * dt;
        } else if (this.accDown) {
            this.ySpeed -= 5 * this.acceleration * dt;
        } else {
            this.ySpeed = 0;
        }

        // update the position of the main character according to the current speed
        this.node.x += this.xSpeed * dt;
        this.node.y += this.ySpeed * dt;
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=ball.js.map
        