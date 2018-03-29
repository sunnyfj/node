
const querystring = require('querystring');


module.exports = () => {  //对所有路径生效
    return (req, res, next) => {
        let str = '';
        req.on('data', (data) => {
            str += data;
        })
        req.on('end', () => {
            req.body = querystring.parse(str);
            next(); //在end下执行 确保数据读取完毕
        })
    }
}
