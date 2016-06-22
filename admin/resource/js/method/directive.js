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

/* 七牛上传图片接口 */
app.directive('qiniuUpload', ['currentPage', 'service','messageFactory', function(currentPage, service,messageFactory) {
    var key = '';
    function guid() {
        var uuid = (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());
        function S4() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return 'note'+uuid;
    };
    return {
        link: function(scope, elem, attrs) {
            var option = {op:1,s:2}
            // 获取上传图片的tooken & 每次进去页面都要捞取
            service.getMethod('/user_info.html',function(data){
                if( data.code === 'ERR_TOKEN_EXPIRED'){
                    messageFactory({text:data.message});
                    //location.href = '#/login';
                    return false;
                }
                var uploader = Qiniu.uploader({
                    runtimes: 'html5,flash,html4',    //上传模式,依次退化
                    browse_button: elem.attr('id'),       //上传选择的点选按钮，**必需**
                    uptoken : data.model, //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
                    uptoken_url: '/token',            //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
                    // unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
                    // save_key: true,   // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK会忽略对key的处理
                    domain: 'http://img1.wanchushop.com/',   //bucket 域名，下载资源时用到，**必需**
                    max_file_size: '1mb',           //最大文件体积限制
                    flash_swf_url: 'Moxie.swf',  //引入flash,相对路径
                    max_retries: 3,                   //上传失败最大重试次数
                    chunk_size: '4mb',                //分块上传时，每片的体积
                    auto_start: true,                 //选择文件后自动上传，若关闭需要自己绑定事件触发上传
                    filters: {
                        mime_types : [ //限制部分文件类型的上传
                            { title : "Image files", extensions : "jpg,jpeg,png,gif" }
                        ],
                        prevent_duplicates:true //限制重复文件的上传
                    },
                    multi_selection: false, //不允许多选
                    init: {
                        'FilesAdded': function(up, files) {
                            scope[attrs.qiniuAdded](); //调用上级scope中的回调函数
                        },
                        'BeforeUpload': function(up, file) {
                            // 每个文件上传前,处理相关的事情
                        },
                        'UploadProgress': function(up, file) {
                            // 每个文件上传时,处理相关的事情
                        },
                        'FileUploaded': function(up, file, info) {
                            // 每个文件上传成功后,处理相关的事情
                            // 其中 info 是文件上传成功后，服务端返回的json，形式如
                            // {
                            //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                            //    "key": "gogopher.jpg"
                            //  }
                            // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html

                            // var domain = up.getOption('domain');
                            // var res = parseJSON(info);
                            // var sourceLink = domain + res.key; 获取上传成功后的文件的Url

                            var domain = up.getOption('domain');
                            var res = JSON.parse(info);
                            var sourceLink = domain + res.key;

                            scope[attrs.qiniuUpload](sourceLink); //调用上级scope中的回调函数，函数名为<div qiniu-upload="functionNameHere"> qiniu-upload属性的值
                        },
                        'Error': function(up, err, errTip) {
                            //上传出错时,处理相关的事情
                            messageFactory({text:errTip});
                            scope[attrs.qiniuError](); //调用上级scope中的回调函数
                        },
                        'UploadComplete': function() {
                            //队列文件处理完毕后,处理相关的事情
                        },
                        'Key': function(up, file) {
                            // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                            // 该配置必须要在 unique_names: false , save_key: false 时才生效
                            key = guid()+'.jpg';
                            // do something with key here
                            return key
                        }
                    }
                });
            },option);

        }
    };
}]);