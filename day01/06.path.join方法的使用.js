const path = require('path');

const fs = require('fs');

// 注意：../ 会抵消前边的路径
const pathStr = path.join('/a', '/b/c', '../', '/d', 'e');

console.log(pathStr);

// fs.readFile(__dirname + '/files/1.txt', function(err, dataStr) {
// 	if (err) {
// 		return console.log('文件读取失败！'+ err.message);
// 	}
// 	console.log('文件读取成功！', dataStr);
// });
// 使用path.join()替代路径+号的拼接，+号在某些场景会有点问题
fs.readFile(path.join(__dirname, '/files/1.txt'), 'utf8', function(err, dataStr) {
	if (err) {
		return console.log('文件读取失败！'+ err.message);
	}
	console.log('文件读取成功！', dataStr);
});
