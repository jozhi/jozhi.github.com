app.factory('currentPage',[function(){
    return {
        hideAppDownload:'',
        native:false
    }
}])
app.factory('getHeight',[function(){
    var browserWidth = document.documentElement.clientWidth,
        browserHeight = document.documentElement.clientHeight;
    return {
        index:0,
        wrapHeight:function(){
            return {'height':browserHeight+'px'}
        },
        wrapWidth:function(){
            if(browserWidth>640){
                return {'width':'640px'}
            }else{
                return {'width':browserWidth+'px'}
            }
        },
        detailsHeight:function(){
            if(browserWidth>640){
                return {'height':'470px'}
            }else{
                var height = Math.floor(browserWidth/1.36);
                return {'height':height+'px'}
            }
        },
        moreDetailHeight:function(){
            if(browserWidth>640){
                return {'height':'243px'}
            }else{
                var height = Math.floor( (browserWidth-browserWidth*0.05)*0.4 );
                return {'height':height+'px'}
            }
        }
    };
}])
.factory('messageFactory',['$rootScope','$timeout', function($rootScope,$timeout) {
    return function(o){
        var option = {
            time:2000,
            text:''
        };
        angular.extend(option,o);
        var time;
        var scope = $rootScope.$new();
        var elm = (function(){
            return document.getElementById('massage');
        }());
        var elmHtml = angular.element('<div class="massage" id="massage"><div class="massage-main">' + option.text + '</div></div>');
        if(!elm){
            angular.element(document.body).append(elmHtml[0]);
        }else{
            elm.getElementsByClassName('massage-main')[0].innerHTML = option.text;
        }
        clearTimeout(time);
        time = $timeout(function(){
            elm = null;
            scope.$destroy();
            elmHtml.remove();
            elmHtml = null;
        },option.time);
    }
}])


















