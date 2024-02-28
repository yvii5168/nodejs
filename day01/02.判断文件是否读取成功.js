const { log } = require('console');
const fs = require('fs');

fs.readFile('./files/1.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('文件读取失败!' + err.message);
    }
    console.log('文件读取成功，内容是：' + dataStr);
});

// 报错示例：文件路径写错
// fs.readFile('./files/11.txt', 'utf8', function (err, dataStr) {
//     debugger;
//     if (err) {
//         return console.log('文件读取失败!' + err.message);
//     }
//     console.log('文件读取成功，内容是：' + dataStr);
// });