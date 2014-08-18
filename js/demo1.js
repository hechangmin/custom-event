var App = function(){
    
    var initPage = function(){
        setTimeout(function(){
            App.trigger('testEvent', 'hello world!');
        },1000);
    };

    return {
        main : function(){
            exdendEvent(this);
            Mod1.init();
            initPage();
        }
    };
}();

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