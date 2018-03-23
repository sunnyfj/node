const http = require('http');

http.createServer((req,res) => {

    let str = ''; //接收数据


    let i = 0;
    //data  有一段数据到达（很多次）  post请求比较大 是分段的发送 接收的时候也是分段接收的
    req.on('data', (data) => {
        console.log(`第多少次${i++}`);
        str += data;
    })
    //end 数据全部到达（一次）
    req.on('end', () =>{
        console.log(str);
    })

}).listen(8081)
