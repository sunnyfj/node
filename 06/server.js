

const express = require('express')
const bodyParser = require('body-parser');


let server = express();

server.listen(8080);


server.use(bodyParser.urlencoded({
    extended: true,      //扩展
    limit: 2*1024*1024   //限制
})) //先加工一次


server.use('/',(req,res) => {
    console.log(req.query) //GET
    console.log(req.body) //POST
})
















//
