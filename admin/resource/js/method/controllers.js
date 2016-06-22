/* 首页控制器 */
app.controller('mainController', [ '$scope','$state', function($scope,$state){

    $scope.menuList = [
        { name: '广告管理', path: '/appAdManage',isChild:true,
            children:[
                { name: 'app广告位', path: '/appAdManage'}
                ,{ name: 'web首页广告', path: '/webBannerAdManage'}
                ,{ name: 'web侧边广告', path: '/webSlideAdManage'}
            ]
        }
        ,{ name: '用户管理', path: '/userManage',isChild:true,
            children:[
                { name: '酒店管理', path: '/hotelManage'}
                ,{ name: '供应商管理', path: '/supplierManage'}
                ,{ name: '用户审核', path: '/userManage'}
            ]
        }
        ,{ name: '内容专题', path: '/albumList',isChild:true,
            children:[
                { name: '专题列表', path: '/albumList'}
                ,{ name: '头条内容', path: '/headlinesList'}
            ]

        }

        /*,{ name: '产品管理', path: '/productManage',isChild:true,
            children:[
                { name: '产品列表', path: '/productList'}
                ,{ name: '产品排序', path: '/productSort'}
                ,{ name: '产品审核', path: '/productAudit'}
            ]
        }
        ,{ name: '头条管理', path: '/headlinesManage',isChild:true,
            children:[
                { name: '头条消息', path: '/headlinesMessage'}
                ,{ name: '头条内容', path: '/headlinesContent'}
            ]
        }
        ,{ name: '价格走势', path: '/priceTrend'}
        ,{ name: '用户反馈', path: '/feedback'}
        ,{ name: '订单管理', path: '/orderManage',isChild:true,
            children:[
                { name: '未接单订单', path: '/noHasOrder'}
                ,{ name: '已接单订单', path: '/itHasOrder'}
                ,{ name: '已完成订单', path: '/completedOrder'}
            ]
        }
        ,{ name: '分类管理', path: '/categoryManage'}
        ,{ name: '单位管理', path: '/unitManage'}*/
    ];
    $scope.slideIndex= 0;
    $scope.slideSubItemIndex= 0;
    $scope.goPath = function(item,index){
        $scope.slideIndex = index;
        $scope.slideSubItemIndex= 0;
        if(!!item){
            $state.go(item[0].path.replace('/',''))
        }
    };
    $scope.goSubPath = function(pIndex,subIndex){
        //if(item.isChild){
        $scope.slideIndex = pIndex;
        $scope.slideSubItemIndex= subIndex;
        //$state.go(item[0].path.replace('/',''))
        //}
    };

    $scope.setOption = function(){
        //console.log(11)
        $scope.userOpCont = !$scope.userOpCont
    }

    if(location.hash.substr(1)){

        var hash = location.hash.substr(1);
        var sIndex = null;
        var sIndexSub = null;

        angular.forEach($scope.menuList,function(val,key){
            if(!sIndexSub && val.children.length){
                angular.forEach(val.children,function(subVal,subKey){
                    if( subVal.path === hash){
                        sIndex = key;
                        sIndexSub = subKey;
                        return false;
                    }
                })
            }
        });
        //console.log(sIndex,sIndexSub)
        //location.hash.substr(1)

        $scope.slideIndex= sIndex;
        $scope.slideSubItemIndex= sIndexSub;

    }

}]);
/* 首页 */
app.controller('indexCont', [ '$scope', function($scope) {

}]);

/* app首页广告管理 */
app.controller('appAdManageCont', [ '$scope','messageFactory', function($scope,messageFactory){


    $scope.moveLeft = function(index){
        if(index>0){
            var currentItem = $scope.uploadedPics[index]
            var leftItem = $scope.uploadedPics[index-1]
            $scope.uploadedPics.splice(index-1,1,currentItem)
            $scope.uploadedPics.splice(index,1,leftItem)
        }
    }
    $scope.moveRight = function(index){
        if(index<($scope.uploadedPics.length-1)){
            var currentItem = $scope.uploadedPics[index]
            var rightItem = $scope.uploadedPics[index+1]
            $scope.uploadedPics.splice(index+1,1,currentItem)
            $scope.uploadedPics.splice(index,1,rightItem)
        }
    }
    $scope.deleteItem = function(index){
        $scope.uploadedPics.splice(index,1)
    }

    /*  七牛上传图片 */
    $scope.uploadedPics = [
        {'image':'./resource/pic/img2.jpg'},
        {'image':'./resource/pic/img3.jpg'},
        {'image':'./resource/pic/img1.jpg'}
    ]; //上传图片返回的地址

    $scope.showLoadingPic = false; //打开时不显示占位图，显示真实上传区域
    //图片上传成功返回地址的回调函数
    $scope.addPics = function (url) {
        $scope.$apply(function(){
            $scope.uploadedPics.unshift({
                image:url
            }); //显示为加工后即将在日记详情里显示的尺寸
        })
    }

    //图片上传时的回调函数
    $scope.showLoading = function () {
        $scope.$apply(function(){
            $scope.showLoadingPic = true; //上传时显示占位图片
        })
    }

    //图片上传错误的回调函数
    $scope.upError = function () {
        $scope.$apply(function(){
            $scope.showLoadingPic = false;
        })
    }

    //不允许同时上传多个图片
    $scope.fakeUploadClick = function () {
        messageFactory({text:'图片正在上传，请稍等~'});
    }

}]);
/* web首页banner广告管理 */
app.controller('webBannerAdManageCont', [ '$scope','messageFactory', function($scope,messageFactory){


    $scope.moveLeft = function(index){
        if(index>0){
            var currentItem = $scope.uploadedPics[index]
            var leftItem = $scope.uploadedPics[index-1]
            $scope.uploadedPics.splice(index-1,1,currentItem)
            $scope.uploadedPics.splice(index,1,leftItem)
        }
    }
    $scope.moveRight = function(index){
        if(index<($scope.uploadedPics.length-1)){
            var currentItem = $scope.uploadedPics[index]
            var rightItem = $scope.uploadedPics[index+1]
            $scope.uploadedPics.splice(index+1,1,currentItem)
            $scope.uploadedPics.splice(index,1,rightItem)
        }
    }
    $scope.deleteItem = function(index){
        $scope.uploadedPics.splice(index,1)
    }

    /*  七牛上传图片 */
    $scope.uploadedPics = [
        {'image':'./resource/pic/img3.jpg'},
        {'image':'./resource/pic/img1.jpg'},
        {'image':'./resource/pic/img2.jpg'}
    ]; //上传图片返回的地址

    $scope.showLoadingPic = false; //打开时不显示占位图，显示真实上传区域
    //图片上传成功返回地址的回调函数
    $scope.addPics = function (url) {
        $scope.$apply(function(){
            $scope.uploadedPics.unshift({
                image:url
            }); //显示为加工后即将在日记详情里显示的尺寸
        })
    }

    //图片上传时的回调函数
    $scope.showLoading = function () {
        $scope.$apply(function(){
            $scope.showLoadingPic = true; //上传时显示占位图片
        })
    }

    //图片上传错误的回调函数
    $scope.upError = function () {
        $scope.$apply(function(){
            $scope.showLoadingPic = false;
        })
    }

    //不允许同时上传多个图片
    $scope.fakeUploadClick = function () {
        messageFactory({text:'图片正在上传，请稍等~'});
    }

}]);
/* web首页侧栏广告管理 */
app.controller('webSlideAdManageCont', ['$scope','messageFactory', function($scope,messageFactory){



    $scope.moveLeft = function(index){
        if(index>0){
            var currentItem = $scope.uploadedPics[index]
            var leftItem = $scope.uploadedPics[index-1]
            $scope.uploadedPics.splice(index-1,1,currentItem)
            $scope.uploadedPics.splice(index,1,leftItem)
        }
    }
    $scope.moveRight = function(index){
        if(index<($scope.uploadedPics.length-1)){
            var currentItem = $scope.uploadedPics[index]
            var rightItem = $scope.uploadedPics[index+1]
            $scope.uploadedPics.splice(index+1,1,currentItem)
            $scope.uploadedPics.splice(index,1,rightItem)
        }
    }
    $scope.deleteItem = function(index){
        $scope.uploadedPics.splice(index,1)
    }

    /*  七牛上传图片 */
    $scope.uploadedPics = [
        {'image':'./resource/pic/img1.jpg'},
        {'image':'./resource/pic/img2.jpg'},
        {'image':'./resource/pic/img3.jpg'}
    ]; //上传图片返回的地址

    $scope.showLoadingPic = false; //打开时不显示占位图，显示真实上传区域
    //图片上传成功返回地址的回调函数
    $scope.addPics = function (url) {
        $scope.$apply(function(){
            $scope.uploadedPics.unshift({
                image:url
            }); //显示为加工后即将在日记详情里显示的尺寸
        })
    }

    //图片上传时的回调函数
    $scope.showLoading = function () {
        $scope.$apply(function(){
            $scope.showLoadingPic = true; //上传时显示占位图片
        })
    }

    //图片上传错误的回调函数
    $scope.upError = function () {
        $scope.$apply(function(){
            $scope.showLoadingPic = false;
        })
    }

    //不允许同时上传多个图片
    $scope.fakeUploadClick = function () {
        messageFactory({text:'图片正在上传，请稍等~'});
    }


}]);


/* 酒店管理 */
app.controller('hotelManageCont', [ '$scope', function($scope) {
    $scope.goHotelDetail = function(){
        location.href='#/hotelDetail/'
    }
}]);
/* 酒店详情 */
app.controller('hotelDetailCont', [ '$scope', function($scope) {

}]);
/* 新增酒店 */
app.controller('hotelCreateCont', [ '$scope', function($scope) {

}]);


/* 供应商管理 */
app.controller('supplierManageCont', [ '$scope', function($scope) {
    $scope.goHotelDetail = function(){
        location.href='#/hotelDetail/'
    }
}]);
/* 供应商详情 */
app.controller('supplierDetailCont', [ '$scope', function($scope) {

}]);
/* 新增供应商 */
app.controller('supplierCreateCont', [ '$scope', function($scope) {

}]);

/* 用户管理 */
app.controller('userManageCont', [ '$scope', function($scope) {
    $scope.goUserReview = function(){
        location.href='#/userReview/'
    }

}]);
/* 用户审核 */
app.controller('userReviewCont', [ '$scope', function($scope) {

}]);
/* 专题列表 */
app.controller('albumListCont', [ '$scope', function($scope) {

}]);
/* 新增专题 */
app.controller('albumCreateCont', [ '$scope', function($scope) {

}]);

/* 头条内容 */
app.controller('headlinesListCont', [ '$scope', function($scope) {
    $scope.goHeadlinesDetail = function(){
        location.href='#/headlinesDetail/'
    }
}]);
/* 内容详情 */
app.controller('headlinesDetailCont', [ '$scope', function($scope) {

}]);
/* 新增头条 */
app.controller('headlinesCreateCont', [ '$scope', function($scope) {

}]);


















/* 产品管理 */
app.controller('productManageCont', [ '$scope', function($scope) {

}]);
/* 产品列表 */
app.controller('productListCont', [ '$scope', function($scope) {

}]);
/* 产品排序 */
app.controller('productSortCont', [ '$scope', function($scope) {

}]);
/* 产品审核 */
app.controller('productAuditCont', [ '$scope', function($scope) {

}]);


/* 头条管理 */
app.controller('headlinesManageCont', [ '$scope', function($scope) {

}]);
/* 头条消息 */
app.controller('headlinesMessageCont', [ '$scope', function($scope) {

}]);
/* 头条内容 */
app.controller('headlinesContentCont', [ '$scope', function($scope) {

}]);


/* 价格走势 */
app.controller('priceTrendCont', [ '$scope', function($scope) {

}]);


/* 用户反馈 */
app.controller('feedbackCont', [ '$scope', function($scope) {

}]);
/* 订单管理 */
app.controller('orderManageCont', [ '$scope', function($scope) {

}]);
/* 未接单订单 */
app.controller('noHasOrderCont', [ '$scope', function($scope) {

}]);
/* 已接单订单 */
app.controller('itHasOrderCont', [ '$scope', function($scope) {

}]);
/* 已完成订单 */
app.controller('completedOrderCont', [ '$scope', function($scope) {

}]);


/* 分类管理 */
app.controller('categoryManageCont', [ '$scope', function($scope) {

}]);

/* 单位管理 */
app.controller('unitManageCont', [ '$scope', function($scope) {

}]);

