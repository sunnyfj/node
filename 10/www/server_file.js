
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')
const fs = require('fs')


let objMulter = multer({dest: './upload/'});

let server = express();

//server.use(bodyParser.urlencoded({extended: false}));
server.use(objMulter.any())

server.post('/', (req, res, next) => {
    console.log(req.files)
    //当前文件名 + 元文件的扩展名 就是新的文件名
    let newname = req.files[0].path + path.parse(req.files[0].originalname).ext;

    fs.rename(req.files[0].path, newname, (err) => {
        if(err){
            res.send('失败')
        }else{
            res.send('成功')
        }
    })
    //1.获取原始文件扩展名
    //2.重名名零时文件

})


server.listen(8080);












































//
