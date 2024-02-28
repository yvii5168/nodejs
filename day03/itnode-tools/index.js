// 这个是包的入口文件
const date = require('./src/dateFormat');
const escape = require('./src/htmlEscape');

module.exports = {
  ...date, // 展开运算符的使用
  ...escape
}
