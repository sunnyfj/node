
const http = require('http');

const fs = require('fs');

let server = http.createServer((req,res) => {

	var file_name = './www' + req.url;

	fs.readFile(file_name , (err,data) => {
		if(err){
			res.write('404');
		}else{
			res.write(data);
		}
		res.end();
	})
})

server.listen(8080)