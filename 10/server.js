
const express = require('express')
const static = require('express-static')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
// const jade = require('jade')
// const ejs = require('ejs')
const multer = require('multer')
// const path = require('path')
// const fs = require('fs')
const consolidate = require('consolidate')


let server = express();



//1 解析cookie
server.use(cookieParser('weqrweqrwqersafhsaddj'));

//2 使用session
let arr = [];
for(let i=0; i<10000; i++){
    arr.push('keys_'+Math.random());
}
server.use(cookieSession({name: 'sess_id', keys: arr, maxAge: 20*3600*1000}));

//3 post数据 bodyParser不好，只能解析普通的post数据 不能解析文件上传
server.use(bodyParser.urlencoded({extended: false})); //不使用扩展模式
server.use(multer({dest: './www/upload/'}).any());

//用户请求
// server.use('/', (req, res, next) => {
//
//
//     console.log(req.query, req.body, req.files, req.cookies, req.session)
// })
//4.配置模板引擎

//c.输出什么东西
server.set('view engine', 'html');  //set 是对整个服务的修改
//b.模板文件放在哪
server.set('views', './views');
//a.用哪种模板引擎
server.engine('html', consolidate.ejs)
//接收用户请求
server.get('/index', (req, res) => {
    res.render('1.ejs', {name: 'tom'}); //render 编译一个模板然后返回
})


//5 static数据
server.use(express.static('./www'));

//server.use(static('./www'));   新版express-static 这样会报错。。。 直接使用以上方式是ok的
//server.use(static(__dirname + '/public'));

server.listen(8080, () => {
    console.log('server is running at %s');
});





















//
