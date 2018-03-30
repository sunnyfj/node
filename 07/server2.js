const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');


let server = express();

let arr = [];

for(let i = 0; i< 100000; i++) {
    arr.push('sig_' + Math.random());
}
//arr 这么做
//session
server.use(cookieParser());
server.use(cookieSession({
    name: 'sess',
    keys: ['aaa','bbb','ccc'],//arr
    maxAge: 2*3600*1000  //session  越短用户安全越高。
}));

server.use('/', (req, res) => {
    if(req.session['count'] == null){  //记录访问次数
        req.session['count'] = 1;
    }else{
        req.session['count']++;
    }
    console.log(req.session['count'])

    res.send('ok');

})









server.listen(8080);







































//
