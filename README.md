#custom-event.js#

JavaScript custom event module.

##usage##

-----------------
```js
var App = {
    main : function(){
        exdendEvent(App);
        App.initPage();
    },

    initPage : function(){
        Mod1.init();
        setTimeout(function(){
            App.trigger('testEvent', 'hello world!');
        },1000);
    }
}

var Mod1 = {

    init : function(){
        Mod1.initEvent();
    },

    initEvent : function(){
        App.bind('testEvent', function(param){
            alert(param);
        });
    }
}

```
-----------------
* exdendEvent 
* bind
* trigger
* unbind


##License##

Released under the MIT license

_*[hechangmin@gmail.com](mailto://hechangmin@gmail.com)*_
