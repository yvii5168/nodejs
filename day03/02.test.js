// const itnode = require('./itnode-tools/index');
// 在没有指定具体文件时，会从package.json文件中main获取入口文件
const itnode = require('./itnode-tools');

const dtStr = itnode.dateFormat(new Date());
console.log(dtStr);

console.log('=====================');
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>';
const str = itnode.htmlEscape(htmlStr);
console.log(str);

console.log('=====================');
const str2 = itnode.htmlUnEscape(str);
console.log(str2);

