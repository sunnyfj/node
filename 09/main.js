

const jade = require('jade')
const fs = require('fs')


let str = jade.renderFile('./views/index.jade', {pretty: true});
console.log(str)
fs.writeFile('./build/index.html', str, (err) => {
    if(err){
        console.log('编译失败')
    }else{
        console.log('编译成功')
    }
})









































//
