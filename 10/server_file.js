
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')
const fs = require('fs')


let objMulter = multer({dest: './www/upload/'});

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
server.use('/upload.html',(req, res) => {
    var file_name = req.url;
    //console.log(file_name)

	fs.readFile('./upload.html' , (err,data) => {
		if(err){
			res.write('404');
		}else{
			res.write(data);
		}
		res.end();
	})
})

server.listen(8080);












































//
