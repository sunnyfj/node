

const express = require('express')
const bodyParser = require('body-parser');


let server = express();

server.listen(8080);

server.use('/', (req, res, next) => {
    console.log('a');
    next(); //不一定 都需要下一步 链式操作 链式是可选的 如果需要下一步 就调用next()
})

server.use('/', (req, res, next) => {
    console.log('b')
})














//
