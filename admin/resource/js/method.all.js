if( document.location.hostname === 'm.waiguoshuo.com'){
	var globalPath = 'http://h5api.waiguoshuo.com';
}else{
	var globalPath = 'http://h5apitest.waiguoshuo.com';
}

var phoneGap = false;
var dataCompletion = true;

angular.cookie = {
	setCookie: function (cname, cvalue, exdays){//设置cookie
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires;
	},
	getCookie: function (cname) {//获取cookie
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1);
			if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
		}
		return "";
	},
	clearCookie: function (name) {//清除cookie
		this.setCookie(name, "", -1);
	}
};

var browser = function(){
	return {
		v : (function(){
			var u = navigator.userAgent, app = navigator.appVersion, p = navigator.platform,ua = u.toLowerCase();
			return {
				trident: u.indexOf('Trident') > -1, //IE内核
				presto: u.indexOf('Presto') > -1, //opera内核
				webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
				gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
				mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
				ios: !!u.match(/i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
				android: u.indexOf('Android') > -1, //android终端
				iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
				iPad: u.indexOf('iPad') > -1, //是否iPad
				weixin: u.indexOf('MicroMessenger') > -1, //是否微信
				webApp: u.indexOf('Safari') == -1, //是否web应用程序，没有头部与底部
				UCB: u.match(/UCBrowser/i) == "UCBrowser",
				QQB: u.match(/MQQBrowser/i) == "MQQBrowser",  //安卓QQ客户端包括QQ浏览器
				QQ: u.match(/QQ/i) == "QQ",  //iosQQ客户端内盒
				androidQQ: u.match(/YYB_D/i) == "YYB_D",  //安卓QQ客户端内盒
				win: p.indexOf('Win') > -1,//判断是否是WIN操作系统
				mac: p.indexOf('Mac') > -1,//判断是否是Mac操作系统
				weibo:ua.match(/weibo/i) == "weibo",
				waiguoshuo:ua.match(/waiguoshuo/i) == 'waiguoshuo', //判断是否是自己app
				ios9: /(iPhone|iPad|iPod).* OS 9_\d/.test(u) && !/Version\/9\./.test(u)
			};
		})()
	};
}();

var app = angular.module('app', ['ui.router','angular-carousel','angularLazyImg','angularDateBinder','pasvaz.bindonce'],
	[ '$compileProvider', function($compileProvider) {
		$compileProvider.aHrefSanitizationWhitelist(/^\s*((https?|ftp|tel|sms|mailto|file|javascript|chrome-extension):)|#/);
}]).factory('authHttpResponseInterceptor', [ '$q', '$location', function($q, $location) {
	return {
		request: function (config) {
			//var token = angular.cookie.getCookie('getToken')
			config.headers = config.headers || {};
			if(config.method == 'JSONP'){
				if(!config.params){
					config.params = {};
				}
				config.params.callback='JSON_CALLBACK'
			}

			if(config.method.toLowerCase() == 'get'){
				if(!config.params){
					config.params = {};
				}
				//config.params.token = token||'';
			}else{
				if(!config.data){
					config.data = {};
				}
				//config.data.token = token;
			}
			return config;
		},
		response : function(response) {
			return response || $q.when(response);
		},
		responseError : function(rejection) {
			if (rejection.status === 401) {}
			return $q.reject(rejection);
		}
	}
} ]).config([ '$httpProvider', '$stateProvider', '$urlRouterProvider',
		function($httpProvider, $stateProvider, $urlRouterProvider){
	$httpProvider.interceptors.push('authHttpResponseInterceptor');
	$urlRouterProvider.otherwise('index');

	// 直接影响路由是否直接跳转
	$urlRouterProvider.otherwise(function($injector, $location) {
		if ($location.$$url === '') {
			return 'index'
		}
	});
	window.routers = [{
		"name" : "index", // 单品详情
		"url" : "/index",
		"templateUrl" : "index/index.html",
		"controller" : "indexCont"
	},{
		"name" : "topicDetail", // 单品详情
		"url" : "/topicDetail/{id}",
		"templateUrl" : "topicDetail/topicDetail.html",
		"controller" : "topicDetailCont"
	}];
	//定义路由表
	angular.forEach(window.routers, function(item) {
		var config = {
			url : item.url,
			views : {
				"appState" : {
					templateUrl : item.templateUrl,
					controller : item.controller
				}
			}
		};
		if (item.name) {
			$stateProvider.state(item.name, config);
		}
	});
}]).run([ '$rootScope', '$http', '$timeout','$window','messageFactory','getHeight',
function($rootScope, $http, $timeout, $window, messageFactory, getHeight){
	// $http.defaults.cache = false;
	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	function unEvent(e){ e.preventDefault(); };

	//  路由跳转之前执行
	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){

		// LSwiperMaker方法所需的事件条件
		if( location.hash === '#/index' ){
			document.addEventListener('touchmove', unEvent, false);// 禁止微信touchmove冲突
		}else{
			document.removeEventListener('touchmove',unEvent,false);
		}
	});

	// 公共的service错误信息提示方法
	angular.filterService = function(result,callback) {
		if(result.code == 'error'){
			messageFactory({text: result.message});
		} else {
			callback(result);
		}
	};
}]);
;
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if(typeof(clientWidth)=='number' && clientWidth<500 && clientWidth>320){
                docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
            }else if(typeof(clientWidth)=='number' && clientWidth>500){
                docEl.style.fontSize = '31.1875'+'px'
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);;
/* 首页控制器 */
app.controller('mainController', [ '$scope','currentPage', function($scope,currentPage){
	$scope.page={};
	// 读取缓存的隐藏下载面板cookie
	var hideAppDownload = angular.cookie.getCookie('hideAppDownload');

	if( hideAppDownload ){
		currentPage.hideAppDownload = hideAppDownload;
		$scope.page.hideAppDownload = hideAppDownload;
	}
}]);

/*
 *	分享模块
 * */
app.controller('indexCont', [ '$scope','getHeight','$timeout', function($scope,getHeight,$timeout) {
	$scope.wrapHeight = getHeight.wrapHeight();

	//var timer;
	var index = 0;
	var element = document.getElementById('indexPage');
	var browserHeight = document.documentElement.clientHeight;
	$timeout(function(){
		//document.body.style.height = getHeight.wrapHeight().height;
		//document.body.style.overflow = 'hidden';

		new LSwiperMaker({
			bind:document.getElementById("indexPage"),  // 绑定的DOM对象
			dire_h:false,     //true 判断左右， false 判断上下
			backfn:function(o){    //回调事件
				if(o.dire ==='U'){
					//clearTimeout(timer);
					//timer=setTimeout(function(){
						if(index===0){
							element.style.top = '-'+browserHeight+'px'
							index = index+1;
						}else if(index >0 && index<4){
							element.style.top= '-'+(index*browserHeight +browserHeight)+'px';
							index = index+1;
						}
					//},200);

				}else if(o.dire === 'D'){
					//clearTimeout(timer);
					//timer=setTimeout(function(){
						if(index>1 &&index<5){
							element.style.top= '-'+((index-1)*browserHeight)+'px';
							index = index-1;
						}else if(index === 1){
							element.style.top=0
							index = 0;
						}

					//},200);

				}
			}
		});
	},0)

	$scope.appDownload = function(){
		if(browser.v.iPhone){
			if(browser.v.iPhone&&browser.v.weixin){
				window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.haizhetou.wgs'
			}else{
				window.location.href = 'https://itunes.apple.com/cn/app/wai-guo-shuo/id1067202550'
			}
		}else if(browser.v.android){
			window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.haizhetou.wgs'
		}else if(browser.v.mac){
			window.location.href = 'https://itunes.apple.com/cn/app/wai-guo-shuo/id1067202550'
		}else if(browser.v.win){
			window.location.href = 'http://android.myapp.com/myapp/detail.htm?apkName=com.haizhetou.wgs'
		}else{
			messageFactory({text:'暂不支持您所使用的系统,如需帮助,请您联系我们.'});
		}
		//messageFactory({text:'APP正在审核中,敬请期待…'});
	};

}]);

/*
 *	单品详情页面
 * */
app.controller('topicDetailCont', [ '$scope', '$state', 'service','$stateParams','$sce','$timeout','$anchorScroll','$location','getHeight','messageFactory',
function($scope, $state, service, $stateParams, $sce, $timeout, $anchorScroll, $location, getHeight, messageFactory){
	$scope.detailsHeight = getHeight.detailsHeight();
	$scope.isWai = browser.v.waiguoshuo;

    service.getMethod('/topic_detail.html',function(data){
        $scope.goodsItem = data.model.topic;
        $scope.goodsComments = data.model.comments;
    },{ 'id':$stateParams.id});
}]);
;
app.directive('downApp', ['$window','$location','currentPage','messageFactory', function($window, $location, currentPage, messageFactory){
    return {
        restrict: "EA",//指令的使用方式，包括标签，属性，类，注释
        template: '<a href="javascript:;" class="downApp downAppVisible" ng-click="appDownload()" ng-cloak ng-show="!currentPage.hideAppDownload && !currentPage.native" > <span class="close" ng-click="downPanelClose();$event.stopPropagation()">×</span> <div class="pic"><img class="inner" src="./img/logo.png" alt="歪果说"/></div> <div class="cont"> <p>下载APP</p> <p>全球好物收集器</p> </div> <span href="javascript:;" class="btn-down">下载APP</span> </a>',    //指令使用的模板，用HTML字符串的形式表示
        replace: true,//是否用模板替换当前元素，若为false，则append在当前元素上
        link: function (scope, elem, attrs){
            // 点击下载app
            scope.appDownload = function(){
                if(browser.v.iPhone){
                    if(browser.v.iPhone&&browser.v.weixin){
                        window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.haizhetou.wgs'
                    }else{
                        window.location.href = 'https://itunes.apple.com/cn/app/wai-guo-shuo/id1067202550'
                    }
                }else if(browser.v.android){
                    window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.haizhetou.wgs'
                }else if(browser.v.mac){
                    window.location.href = 'https://itunes.apple.com/cn/app/wai-guo-shuo/id1067202550'
                }else if(browser.v.win){
                    window.location.href = 'http://android.myapp.com/myapp/detail.htm?apkName=com.haizhetou.wgs'
                }else{
                    messageFactory({text:'暂不支持您所使用的系统,如需帮助,请您联系我们.'});
                }
                //messageFactory({text:'APP正在审核中,敬请期待…'});
            };
            // 隐藏面板并缓存
            scope.downPanelClose = function(){
                angular.cookie.setCookie('hideAppDownload',true,1);
                scope.currentPage.hideAppDownload = true;
            };
            // 判断是否为native调用
            if(browser.v.qiaoqiaoshuo || document.location.hash.match(/native/i)){
                scope.native = true; currentPage.native = true;
            }
            scope.currentPage = currentPage;
        }
    }
}]);
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


















;
app.filter('starFormat', function() {
    // 详情页star评分
    return function(text) {
        return Math.floor((text/20)*10)/10;
    };
});;
app.service('service', [ '$http', '$rootScope', function($http, $rootScope) {
    this.getMethod = function(url,callback,params) {
        $http({
            method : 'JSONP',
            url : globalPath+url,
            cache : false,
            params:params||{}
        }).success(function(data, status) {
            angular.filterService(data,callback);
        }).error(function(data, status, headers, config) {
            angular.filterService({code:"error",message:'请求出错'},callback);
        });
    };

    this.postMethod = function(url,data,callback) {
        $http({
            method : 'POST',
            url : globalPath+url,
            cache : false,
            data : data
        }).success(function(data, status) {
            angular.filterService(data,callback);
        }).error(function(data, status, headers, config) {
            angular.filterService({code:"error",message:'请求出错'},callback);
        });
    };

} ]);
;
angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('WEB-INF/templates/h5/views/error.html',
    "{\"code\":\"error\",\"message\":\"error.html\"}"
  );


  $templateCache.put('WEB-INF/templates/h5/views/index.html',
    "<!DOCTYPE HTML><html lang=\"zh-cn\" ng-app=\"app\"><head><meta charset=\"UTF-8\"><title>歪果说 - 全球好物收集器</title><link rel=\"shortcut icon\" href=\"img/favicon.ico\" type=\"image/x-icon\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><meta name=\"viewport\" content=\"initial-scale=1,width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no\" media=\"(device-height: 568px)\"><meta name=\"renderer\" content=\"webkit\"><meta name=\"apple-mobile-web-app-capable\" content=\"yes\"><meta name=\"apple-touch-fullscreen\" content=\"yes\"><meta name=\"mobile-web-app-capable\" content=\"yes\"><meta name=\"full-screen\" content=\"yes\"><meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\"><meta name=\"format-detection\" content=\"telephone=no\"><meta name=\"format-detection\" content=\"address=no\"><meta name=\"apple-mobile-web-app-status-bar-style\" content=\"yes\"><meta name=\"description\" content=\"全球好物收集器\"><link href=\"css/reset.css\" rel=\"stylesheet\"><link href=\"css/new-base.css?0.04\" rel=\"stylesheet\"><!--<script type=\"text/javascript\" src=\"js/method/base.js?0.04\"></script>--><!--<script type=\"text/javascript\" src=\"js/basicComponents/angular.min.js?0.04\"></script>--><!--<script type=\"text/javascript\" src=\"js/basicComponents/angular-ui-router.js?1.0242\"></script>--><!--<script type=\"text/javascript\" src=\"js/basicComponents/angular-sanitize.js?0.04\"></script>--><!--<script type=\"text/javascript\" src=\"js/basicComponents/angular.cookie.js?0.04\"></script>--><!--<script type=\"text/javascript\" src=\"js/basicComponents/angular-date-binder.js?0.04\"></script>--><!--<script type=\"text/javascript\" src=\"js/basicComponents/bindonce.js?0.04\"></script>--><!--<script type=\"text/javascript\" src=\"js/basicComponents/fastclick.js?0.04\"></script>--><!--<script type=\"text/javascript\" src=\"js/basicComponents/angular-touch.js?0.04\"></script>--><!--<script type=\"text/javascript\" src=\"js/basicComponents/angular-carousel.js?0.04\"></script>--><!--<script type=\"text/javascript\" src=\"js/basicComponents/angular-lazy-img.js?0.04\"></script>--><!--<script type=\"text/javascript\" src=\"js/basicComponents/LSwiperMaker.js?0.04\"></script>--><!--<script type=\"text/javascript\" src=\"js/method/app.js?0.04\"></script>--><!--<script type=\"text/javascript\" src=\"js/method/controllers.js?0.04\"></script>--><!--<script type=\"text/javascript\" src=\"js/method/directive.js?0.04\"></script>--><!--<script type=\"text/javascript\" src=\"js/method/factory.js?0.04\"></script>--><!--<script type=\"text/javascript\" src=\"js/method/filter.js?0.04\"></script>--><!--<script type=\"text/javascript\" src=\"js/method/service.js?0.04\"></script>--><link href=\"css/all.min.css?0.04\" rel=\"stylesheet\"><script src=\"js/app.all.min.js?0.04\"></script></head><body ng-controller=\"mainController\"><div class=\"wrap\" ng-style=\"wrapHeight\" id=\"wrap\"><div ui-view=\"appState\" class=\"app-state\"></div></div><script type=\"text/javascript\" src=\"http://tajs.qq.com/stats?sId=52206816\" charset=\"UTF-8\"></script></body></html>"
  );


  $templateCache.put('WEB-INF/templates/h5/views/index/index.html',
    "<div class=\"indexPage\" id=\"indexPage\"><div class=\"part part1\" ng-style=\"{{wrapHeight}}\"><div class=\"bg\" ng-style=\"{{wrapHeight}}\"><img src=\"./img/index_bg.png\" class=\"inner\" alt=\"\"></div><div class=\"show\"><img src=\"./img/index_p1.png\" alt=\"\"></div><div class=\"cloud\"><img src=\"./img/index_cloud.png\" alt=\"\"></div><div class=\"down_btn\"><a href=\"javascript:;\" class=\"btn\" ng-click=\"appDownload()\">下载APP</a></div><div class=\"index_goTop\"><img src=\"./img/index_up.png\" alt=\"\"></div></div><div class=\"part part2\" ng-style=\"{{wrapHeight}}\"><div class=\"show\"><img src=\"./img/index_p2.png\" alt=\"\"></div><div class=\"down_btn\"><a href=\"javascript:;\" class=\"btn\" ng-click=\"appDownload()\">下载APP</a></div><div class=\"index_goTop\"><img src=\"./img/index_up.png\" alt=\"\"></div></div><div class=\"part part3\" ng-style=\"{{wrapHeight}}\"><div class=\"show\"><img src=\"./img/index_p3.png\" alt=\"\"></div><div class=\"cloud\"><img src=\"./img/index_cloud.png\" alt=\"\"></div><div class=\"down_btn\"><a href=\"javascript:;\" class=\"btn\" ng-click=\"appDownload()\">下载APP</a></div><div class=\"index_goTop\"><img src=\"./img/index_up.png\" alt=\"\"></div></div><div class=\"part part4\" ng-style=\"{{wrapHeight}}\"><div class=\"show\"><img src=\"./img/index_p4.png\" alt=\"\"></div><div class=\"down_btn\"><a href=\"javascript:;\" class=\"btn\" ng-click=\"appDownload()\">下载APP</a></div><div class=\"index_goTop\"><img src=\"./img/index_up.png\" alt=\"\"></div></div><div class=\"part part5\" ng-style=\"{{wrapHeight}}\"><div class=\"show\"><img src=\"./img/index_p5.png\" alt=\"\"></div><div class=\"cloud\"><img src=\"./img/index_cloud.png\" alt=\"\"></div><div class=\"down_btn\"><a href=\"javascript:;\" class=\"btn\" ng-click=\"appDownload()\">下载APP</a></div><div class=\"copyright\"><p>Copyright © 2015 杭州海蜇头网络科技有限公司</p><p>浙ICP备15027497号-3</p></div></div></div>"
  );


  $templateCache.put('WEB-INF/templates/h5/views/topicDetail/topicDetail.html',
    "<div down-app></div><div class=\"detailPages cf\"><div class=\"header-pic\"><img ng-src=\"{{goodsItem.image}}\" alt=\"\" ng-style=\"{{detailsHeight}}\"></div><h2 class=\"title\">{{goodsItem.title}}</h2><div class=\"part\" ng-repeat=\"item in goodsItem.contents\"><h1 class=\"title\" ng-if=\"item.type === 2\">{{item.value}}</h1><p class=\"subTitle\" ng-if=\"item.type === 1\"><span class=\"index\">{{item.order}}</span> <span class=\"cont\">{{item.value}}</span></p><p class=\"paragraph\" ng-if=\"item.type === 3\" ng-class=\"{'quoted':item.hasDescriptionQuote}\">{{item.value}}</p><div class=\"detail-pic\" ng-if=\"item.type === 4\" ng-class=\"{'focused':item.hasImageBox}\"><p class=\"description\" ng-if=\"item.imageDescription\" ng-bind=\"item.imageDescription\"></p><div class=\"img-wrap\"><img lazy-img=\"{{item.value}}\" alt=\"\" class=\"inner beforeLoading\"></div></div><div class=\"moreInfo cf\" ng-if=\"item.type === 5\"><a ng-href=\"{{item.value}}\" class=\"goShopping\">直达链接</a> <span class=\"price\"><span>￥</span><span>{{item.price}}</span> <span class=\"priceRange\" ng-if=\"item.hasPriceRange\">起</span></span></div><div class=\"br\" ng-if=\"item.type === 6\"></div></div><div class=\"goods-comment cf\" ng-if=\"isWai\"><div class=\"subHeader\"><span class=\"dealerBrand\"><span class=\"inner inner2\">悄悄评论</span></span></div><div class=\"comment-items\"><div class=\"comment-item\" ng-repeat=\"item in goodsComments\"><div class=\"comment-buyer\"><div class=\"pic\"><img lazy-img=\"{{item.userAvatar}}\" alt=\"头像\"></div><strong>{{item.userName}}</strong> <span>{{item.timestamp}}</span></div><div class=\"comment-info\">{{item.content}}</div></div><div class=\"noData\" ng-if=\"!goodsComments.length\">暂无评论，快去抢沙发~</div></div><a href=\"#/comment/goods/{{goodsItem.id}}\" class=\"moreComment\" ng-if=\"goodsComments.length>=3\">查看更多评论</a></div></div>"
  );

}]);
