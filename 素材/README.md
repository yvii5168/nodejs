## 安装

```
npm install itnode-tools
```

## 导入

```js
const itheima = require('itnode-tools');
```

## 格式化时间

```js
// 调用 dateFormat 对时间进行格式化
const dtStr = itnode.dateFormat(new Date());
// 结果： 2024-02-11 10:53:42
console.log(dtStr);
```

## 转义 HTML 中的特殊字符

```js

// 待转义的 HTML 字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123 </span></h1>';
// 调用 htmlEscape 方法进行转义
const str = itnode.htmlEscape(htmlStr);
// 转义后的结果
console.log(str);
```

## 还原 HTML 中的特殊字符

````js
// 待还原的 HTML 字符串
const str2 = itnode.htmlUnEscape(str);
console.log(str2);
````

## 开源协议

ISC
