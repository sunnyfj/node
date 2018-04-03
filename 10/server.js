
const express = require('express')
const static = require('express-static')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const jade = require('jade')
const ejs = require('ejs')
const nulter = require('multer')
const path = require('path')
const fs = require('fs')


let server = express();

server.listen(8080);


//1 解析cookie
server.use(cookieParser('weqrweqrwqersafhsaddj'));

//2 使用session
var arr = [];
for(var i=0; i<10000; i++){
    arr.push('keys_'+Math.random());
}
server.use(cookieSession({name: 'sess_id', keys: arr, maxAge: 20*3600*1000}));

//3 post数据 bodyParser不好，只能解析普通的post数据 不能解析文件上传
server.use(bodyParser.urlencoded({extended: false})); //不使用扩展模式
server.use(multer({dest: './www/upload/'}).any());

//用户请求
server.use('/', (req, res, next) => {


    console.log(req.query, req.body, req.files, req.cookies, req.session)
})


//4 static数据
server.use(static('./www'));























//
