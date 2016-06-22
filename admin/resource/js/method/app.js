var globalPath = 'http://h5api.qiaoqiaoshuo.cn';

var app = angular.module('app', ['ui.router','pasvaz.bindonce','ui.bootstrap'],
	[ '$compileProvider', function($compileProvider) {
		$compileProvider.aHrefSanitizationWhitelist(/^\s*((https?|ftp|tel|sms|mailto|file|javascript|chrome-extension):)|#/);
}]).factory('authHttpResponseInterceptor', [ '$q', '$location', function($q, $location) {
	return {
		request: function (config) {
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
	var routers = [
        {
            "name" : "index", // 首页
            "url" : "/index",
            "templateUrl" : "views/index/index.html",
            "controller" : "indexCont"
        },{
            "name" : "appAdManage", // app首页广告管理
            "url" : "/appAdManage",
            "templateUrl" : "views/ad/appAdManage.html",
            "controller" : "appAdManageCont"
        },{
            "name" : "webBannerAdManage", // web首页banner广告管理
            "url" : "/webBannerAdManage",
            "templateUrl" : "views/ad/webBannerAdManage.html",
            "controller" : "webBannerAdManageCont"
        },{
            "name" : "webSlideAdManage", // web首页侧栏广告管理
            "url" : "/webSlideAdManage",
            "templateUrl" : "views/ad/webSlideAdManage.html",
            "controller" : "webSlideAdManageCont"
        },{
            "name" : "hotelManage", // 酒店管理
            "url" : "/hotelManage",
            "templateUrl" : "views/user/hotelManage.html",
            "controller" : "hotelManageCont"
        },{
            "name" : "hotelDetail", // 酒店详情
            "url" : "/hotelDetail/{id}",
            "templateUrl" : "views/user/hotelDetail.html",
            "controller" : "hotelDetailCont"
        },{
            "name" : "hotelCreate", // 新增酒店
            "url" : "/hotelCreate",
            "templateUrl" : "views/user/hotelCreate.html",
            "controller" : "hotelCreateCont"
        },{
            "name" : "supplierManage", // 供应商管理
            "url" : "/supplierManage",
            "templateUrl" : "views/user/supplierManage.html",
            "controller" : "supplierManageCont"
        },{
            "name" : "supplierDetail", // 供应商详情
            "url" : "/supplierDetail",
            "templateUrl" : "views/user/supplierDetail.html",
            "controller" : "supplierDetailCont"
        },{
            "name" : "supplierCreate", // 新增供应商
            "url" : "/supplierCreate",
            "templateUrl" : "views/user/supplierCreate.html",
            "controller" : "supplierCreateCont"
        },{

            "name" : "userManage", // 用户管理
            "url" : "/userManage",
            "templateUrl" : "views/user/userManage.html",
            "controller" : "userManageCont"
        },{
            "name" : "userReview", // 用户审核
            "url" : "/userReview/{id}",
            "templateUrl" : "views/user/userReview.html",
            "controller" : "userReviewCont"
        }

        ,{
            "name" : "albumList", // 专题列表
            "url" : "/albumList",
            "templateUrl" : "views/album/albumList.html",
            "controller" : "albumListCont"
        },{
            "name" : "albumCreate", // 新增专题
            "url" : "/albumCreate",
            "templateUrl" : "views/album/albumCreate.html",
            "controller" : "albumCreateCont"
        },{
            "name" : "headlinesList", // 头条内容
            "url" : "/headlinesList",
            "templateUrl" : "views/album/headlinesList.html",
            "controller" : "headlinesListCont"
        },{
            "name" : "headlinesDetail", // 内容详情
            "url" : "/headlinesDetail/{id}",
            "templateUrl" : "views/album/headlinesDetail.html",
            "controller" : "headlinesDetailCont"
        },{
            "name" : "headlinesCreate", // 新增头条
            "url" : "/headlinesCreate",
            "templateUrl" : "views/album/headlinesCreate.html",
            "controller" : "headlinesCreateCont"
        }






        ,{
            "name" : "productManage", // 产品管理
            "url" : "/productManage",
            "templateUrl" : "views/product/productManage.html",
            "controller" : "productManageCont"
        },{
            "name" : "productList", // 产品列表
            "url" : "/productList",
            "templateUrl" : "views/product/productList.html",
            "controller" : "productListCont"
        },{
            "name" : "productSort", // 产品排序
            "url" : "/productSort",
            "templateUrl" : "views/product/productSort.html",
            "controller" : "productSortCont"
        },{
            "name" : "productAudit", // 产品审核
            "url" : "/productAudit",
            "templateUrl" : "views/product/productAudit.html",
            "controller" : "productAuditCont"
        }

        ,{
            "name" : "headlinesManage", // 头条管理
            "url" : "/headlinesManage",
            "templateUrl" : "views/headlines/headlinesManage.html",
            "controller" : "headlinesManageCont"
        },{
            "name" : "headlinesMessage", // 头条消息
            "url" : "/headlinesMessage",
            "templateUrl" : "views/headlines/headlinesMessage.html",
            "controller" : "headlinesMessageCont"
        },{
            "name" : "headlinesContent", // 头条内容
            "url" : "/headlinesContent",
            "templateUrl" : "views/headlines/headlinesContent.html",
            "controller" : "headlinesContentCont"
        }

        ,{
            "name" : "priceTrend", // 价格走势
            "url" : "/priceTrend",
            "templateUrl" : "views/priceTrend/priceTrend.html",
            "controller" : "priceTrendCont"
        },{
            "name" : "feedback", // 用户反馈
            "url" : "/feedback",
            "templateUrl" : "views/feedback/feedback.html",
            "controller" : "feedbackCont"
        },{
            "name" : "orderManage", // 订单管理
            "url" : "/orderManage",
            "templateUrl" : "views/orderManage/orderManage.html",
            "controller" : "orderManageCont"
        },{
            "name" : "noHasOrder", // 未接单订单
            "url" : "/noHasOrder",
            "templateUrl" : "views/orderManage/noHasOrder.html",
            "controller" : "noHasOrderCont"
        },{
            "name" : "itHasOrder", // 已接单订单
            "url" : "/itHasOrder",
            "templateUrl" : "views/orderManage/itHasOrder.html",
            "controller" : "itHasOrderCont"
        },{
            "name" : "completedOrder", // 已完成订单
            "url" : "/completedOrder",
            "templateUrl" : "views/orderManage/completedOrder.html",
            "controller" : "completedOrderCont"
        }

        ,{
            "name" : "categoryManage", // 分类管理
            "url" : "/categoryManage",
            "templateUrl" : "views/category/categoryManage.html",
            "controller" : "categoryManageCont"
        },{
            "name" : "unitManage", // 单位管理
            "url" : "/unitManage",
            "templateUrl" : "views/unit/unitManage.html",
            "controller" : "unitManageCont"
        }


    ];
	//定义路由表
	angular.forEach(routers, function(item) {
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
	//function unEvent(e){ e.preventDefault(); }

	//  路由跳转之前执行
	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){

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
