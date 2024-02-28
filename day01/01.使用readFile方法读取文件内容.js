const { log } = require('console');
const fs = require('fs');

fs.readFile('./files/1.txt', 'utf8', function (err, dataStr) {
	console.log(err);
	console.log('--------------');
	console.log(dataStr);
})
// 报错样例：文件路径故意写错
// fs.readFile('./files/11.txt', 'utf8', function (err, dataStr) {
// 	console.log(err);
// 	console.log('--------------');
// 	console.log(dataStr);
// })