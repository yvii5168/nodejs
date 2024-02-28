const fs = require('fs');
const { resolve } = require('path');
const path = require('path');
const { runInContext } = require('vm');

// 定义正则表达式，分别匹配以下标签的内容
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

fs.readFile(path.join(__dirname, '../素材/index.html'), 'utf8', function (err, dataStr) {
  if (err) return console.log('读取html文件失败！' + err.message);

  // 读取文件成功后，分别拆解出css,js,html文件
  resolveCss(dataStr);
  resolveJs(dataStr);
  resolveHtml(dataStr);
})

function resolveCss(htmlStr) {
  const r1 = regStyle.exec(htmlStr);
  const newCss = r1[0].replace('<style>', '').replace('</style>', '');
  console.log(newCss);
  fs.writeFile(path.join(__dirname, './clock/index.css'), newCss, function (err) {
    if (err) return console.log('写人 CSS 样式失败！' + err.message);
    console.log('写入样式文件成功！');
  });
}

function resolveJs(htmlStr) {
  const r2 = regScript.exec(htmlStr);
  const newJs = r2[0].replace('<script>', '').replace('</script>', '');

  fs.writeFile(path.join(__dirname, './clock/index.js'), newJs, function (err) {
    if (err) return console.log('写入 JavaScript 脚本失败！' + err.message);
    console.log('写入 JS 脚本成功！');
  });
}

function resolveHtml(htmlStr) {
  const newHtml = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace
    (regScript, '<script src="./index.js"></script>');
  fs.writeFile(path.join(__dirname, './clock/index.html'), newHtml, function(err) {
    if(err) return console.log('写入 Html 文件失败！'+err.message);
    console.log('写入 Html 页面成功！');
  });
}
