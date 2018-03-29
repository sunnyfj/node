

const express = require('express')
const bodyParser = require('body-parser');
const querystring = require('querystring');

let server = express();

server.listen(8080);

server.use((req, res, next) => {  //对所有路径生效

    let str = '';
    req.on('data', (data) => {
        str += data;
    })
    req.on('end', () => {
        req.body = querystring.parse(str);
        next(); //在end下执行 确保数据读取完毕
    })
})

server.use('/', (req, res) => {  //只对根对所有路径生效
    console.log(req.body)
})









//
