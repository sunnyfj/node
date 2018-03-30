const express = require('express');
const cookieParser = require('cookie-parser');


let server = express();



//cookie
server.use(cookieParser('wdsdas'));

server.use('/', (req, res) => {

    req.secret = 'wdsdas';//签名(秘钥)  随便一个字符串

    //res.cookie('user', 'tom', {path: '/abc', maxAge: 30*24*3600*1000})
    res.cookie('user', 'tom', {signed: true})

    res.clearCookie('user'); //删除cookie

    console.log(req.cookies) //存的是没有签名的cookie
    console.log(req.signedCookies) //存 签名过的cookie   因cookie 容量过小 签过名会增大体积
    res.send('ok');
})














server.listen(8080);







































//
