const fs = require('fs');

// 出现路径拼接错误的问题，是因为使用了相对路径，为避免此问题，使用绝对路径即可
// fs.readFile('./files/1.txt', 'utf8', function(err) {

// 绝对路径时：\代表转移， 需要使用\\，但是这种方法移植性非常差，不利于维护
// fs.readFile('D:\\exercise_study\\node-roject\\day01\\files\\1.txt', 'utf8', function(err) {
// 此时可以使用__dirname表示当前文件所处的文件路径
console.log('__dirname代表的路径：', __dirname);

fs.readFile(__dirname + '/files/1.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('文件读取错误！', err.message);
    }
    console.log('文件读取成功！' + dataStr);
});