/**
 * 自定义事件模块
 *
 * @authors hechangmin (hechangmin@gmail.com)
 * @date    2014-07-17
 */

var exdendEvent = function(targetObj){
    targetObj._evt_ = {};

    targetObj.bind = function(eventName, callback){
        if(! this._evt_[eventName]){
            this._evt_[eventName] = [];
        }
        this._evt_[eventName].push(callback);
    };

    targetObj.trigger = function(eventName, params){
        if(this._evt_[eventName]){
            var callbacks = this._evt_[eventName];

            for(var i in callbacks){
                if(callbacks[i](params) === false){
                    return false;
                }
            }
        }
    };

    targetObj.unbind = function(eventName, callback){
        if(this._evt_[eventName]){
            var callbacks = this._evt_[eventName];
            if(callbacks.length > 0){
                if(callback !== undefined){
                    for(var i in callbacks){
                        if(callbacks[i] == callback){
                            delete callbacks[i];
                            return;
                        }
                    }
                }else{
                    this._evt_[eventName] = [];
                }
            }
        }
    };
};

