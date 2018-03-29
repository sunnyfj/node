

const express = require('express')
const bodyParser = require('body-parser');
const bodyParser2 = require('./libs/my-body-parser'); //自定义中间件

let server = express();

server.listen(8080);

server.use(bodyParser2())

server.use('/', (req, res) => {  //只对根对所有路径生效
    console.log(req.body)
})









//
