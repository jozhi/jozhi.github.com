var express = require('express');
var path = require('path');//path会自动处理不符合路径项
var app = express();
//var bodyParser = require('body-parser');//post请求使用

//app.set('views', path.join(__dirname, 'views'));//设定视图
//app.set('view engine', 'ejs');//引用模板

//app.use(bodyParser.json());//处理json
//app.use(bodyParser.urlencoded());//转码
//app.use('/', require('./model/user/service'));//引用用户后台服务

app.use(express.static(path.join(__dirname, './')));   // 静态文件路径
//app.use(express.static(path.join(__dirname, './WEB-INF/templates/h5/views/')));   // 静态文件路径

app.use(function(req, res, next) {  //404错误处理
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next){//处理500错误
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});


app.set('port', process.env.PORT || 5006);//设置监听端口

var server = app.listen(app.get('port'), function() {//新建监听
  console.log('Express server listening on port ' + server.address().port);
});
process.on('uncaughtException',function(err){//处理所有错误
    console.error(' caught exception'+err.stack);
});