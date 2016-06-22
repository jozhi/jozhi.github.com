app.filter('starFormat', function() {
    // 详情页star评分
    return function(text) {
        return Math.floor((text/20)*10)/10;
    };
});