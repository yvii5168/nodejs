const fs = require('fs');

fs.readFile('../素材/成绩.txt', 'utf8', function(err, dataStr) {
  if (err) {
		return console.log('读取文件失败！'+err.message);
	}
	// console.log('读取文件成功！'+dataStr);
	const arrOld = dataStr.split(' ');
	console.log(arrOld);
	const arrNew = [];
	arrOld.forEach(item => {
		arrNew.push(item.replace('=',':'));
	});
	const newStr = arrNew.join('\r\n');
	console.log(newStr);

	fs.writeFile('./files/成绩-ok.txt', newStr, function(err) {
		if (err) {
			return console.log('写入文件失败！'+err.message);
		}
		console.log('成绩写入成功！');
	});
});