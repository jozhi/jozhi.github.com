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
