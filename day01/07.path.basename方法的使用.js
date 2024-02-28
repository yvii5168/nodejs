const path = require('path');

const fPath = '/a/b/c/d/idnex.html';

// 获取文件名
const fullName = path.basename(fPath);
console.log(fullName);

const nameWithoutExt = path.basename(fullName, '.html');
console.log(nameWithoutExt);

