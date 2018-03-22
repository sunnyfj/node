const http = require('http');
const querystring = require('querystring'); //也是处理url 的 没有url给力
const urlLib = require('url');

http.createServer((req,res) => {

	var obj = urlLib.parse(req.url, true); //true 代表解析query

	var url = obj.pathname;
	var GET = obj.query;

	console.log(url,GET)

	res.write('aaa');

	res.end();

}).listen(8080);
