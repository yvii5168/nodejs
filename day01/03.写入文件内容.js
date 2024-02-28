const { log } = require('console');
const fs = require('fs');

dataIn = '这是fs.writeFile方法创建的文件，且写入的内容，该内容为全文件覆盖写入；'

fs.writeFile('./files/2.txt', dataIn, function(err) {
    if (err) {
       return console.log('文件写入失败！'+err.message);
    }
    console.log('文件入成功！');
});

// 错误示例：写入不存在的盘符
// fs.writeFile('F:/files/2.txt', dataIn, function(err) {
//     if (err) {
//        return console.log('文件写入失败！'+err.message);
//     }
//     console.log('文件入成功！');
// });