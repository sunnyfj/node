const express = require('express')
const mysql = require('mysql')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const multer = require('multer')
const consolidate = require('consolidate')
const bodyParser = require('body-parser')

//连接  连接池
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'blog'
})


let server = express();
let field = server.listen(8080, 'localhost', () => {
    let host = field.address().address;
    let port = field.address().port;
    console.log('Example app listening at http://'+ host +':'+port)
});

//1.解析cookie
server.use(cookieParser('sadfefehjoihoiuh'));

//2.使用session
let arr = [];
for(let i = 0; i < 10000; i++){
    arr.push('keys_' + Math.random());
}
server.use(cookieSession({name: 'sess_id', keys: arr, maxAge: 20*3600*1000}));

//3.post数据  bodyParser 解析普通post数据
server.use(bodyParser.urlencoded({extended: false})); //不使用扩展模式
             //multer   解析post 上传文件
server.use(multer({dest: './www/upload/'}).any());

//4.配置模板引擎
    //输出html文件
server.set('view engine', 'html');
    //模板文件放在
server.set('views', './template');
    //用哪种模板引擎
server.engine('html', consolidate.ejs);
    //接收用户请求
server.get('/', (req, res, next) => {
    //查询
    db.query('SELECT * FROM `banner_table`', (err, data) => {
        if(err){
            res.status(500).send('database error').end();
        }else{
            res.banners = data;
            next();
        }
    })

    //res.render('index.ejs', {})
    //res.send('1213')
    //console.log(req.query, req.body, req.files, req.cookies, req.session)
});

server.get('/', (req, res, next) => {
    db.query('SELECT ID,title,summary FROM `article_table`', (err, data) => {
        if(err){
            res.status(500).send('database error').end();
        }else{
            res.articles = data;
            next();
        }
    })
})
server.get('/', (req, res) => {
    res.render('index.ejs', {banners: res.banners, articles: res.articles})
})

server.get('/article', (req, res, next) => {
    res.render('conText.ejs', {})
})


//5. static 数据
server.use(express.static('./www'))
