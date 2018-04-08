
const express = require('express')

let server = express();

//目录：/user/

let routeUser = express.Router();

routeUser.get('/1.html', (req, res) => { //http://localhost:8080/user/1.html
    res.send('1.html')
})

routeUser.get('/2.html', (req, res) => { //http://localhost:8080/user/2.html
    res.send('2.html')
})

server.use('/user', routeUser)  //创建好的路由加入 express

//目录：/articleRouter /

let article = express.Router();
server.use('/article', article);

article.use('/123.html', (req, res) => {
    res.send('123.html');
})




server.listen(8080)


































//
