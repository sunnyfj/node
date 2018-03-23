/*
    接口：
    /user?act=reg&user=aaa&pass=123456
    {'ok':true,'msg':'xxxx'}

    /user?act=login&user=aaa&pass=123456
    {'ok':true,'msg':'xxxx'}

    请求主要分俩类：
        对文件访问：
        http://localhost:8080/1.html
        http://localhost:8080/1.ajax
        http://localhost:8080/1.png


        对接口访问：
        http://localhost:8080/user?act=reg&name=aaa


*/

const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

let users = {}; //{'aaa':'1243234',} 模拟数据 一旦服务器关了数据就没有了

let server = http.createServer((req,res) => {

    //解析数据
    let str = '';
    req.on('data',(data) => {
        str += data;
    })
    req.on('end',() => {
        let obj = urlLib.parse(req.url, true);

        const url =  obj.pathname;
        const GET = obj.query;
        const POST = querystring.parse(str);

        //区分  接口/文件
        if(url == '/user'){  //接口

            switch(GET.act){
                case 'reg':
                    //1.检查用户名是否已经有了
                    //2.插入users
                    if(users[GET.user]){
                        res.write('{"ok":false,"msg":"此用户已存在"}');
                    }else{
                        users[GET.user] = GET.pass;
                        res.write('{"ok":true,"mag":"注册成功"}');
                        console.log(users)
                    }
                break;
                case 'login':
                    //1.检查用户名是否存在
                    //2.检查用户密码
                    if(users[GET.user] == null){
                        res.write('{"ok":false,"msg":"用户不存在"}');
                    }else if(users[GET.user] != GET.pass){
                        res.write('{"ok":false,"msg":"用户名或密码错误"}');
                    }else{
                        res.write('{"ok":true,"msg":"登陆成功"}');
                    }
                break;
                default:
                res.write('{"ok":false,"msg":"未知的act"}')
            }
            res.end();

        }else{              //文件
            //读取文件
            let file_name = './www'+url;
            fs.readFile(file_name, (err,data) => {
                if(err){
                    res.write('404');
                }else{
                    res.write(data)
                }
                res.end();
            })
        }


    })
})

server.listen(8091)
