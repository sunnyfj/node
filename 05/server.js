
const express = require('express');
const expressStatic = require('express-static');


let server = express();

server.listen(8080);

let users = {
    'tom':'123'
}

/*
    //根据路径请求的 use 第一个参数是路径 /xxx ，方法
    server.use('/a.html',(req,res) => {
        res.send('abc');
        res.end();
    })
    server.use('/b.html',(req,res) => {
        res.send('123')
        res.end();
    })
*/


//接口请求
server.get('/login',(req, res) => {
    let user = req.query.user;
    let pass = req.query.pass;

    if(!users[user]){
        res.send({ok: false, msg: '用户不存在'});
    }else{
        if(users[user] != pass){
            res.send({ok: false, msg: '密码不正确'});
        }else{
            res.send({ok: true, msg: '成功'});
        }
    }
    res.end();
})

server.use(expressStatic('./www'))
