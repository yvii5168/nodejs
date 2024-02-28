const express = require('express');

app = express();

// 在这里，使用 express.static() 方法，快速的对外提供静态资源
// 多个目录托管时，按照顺序在目录中查找，谁在前边展示谁的
app.use('/files', express.static('./files'));
app.use(express.static('./clock'));


app.listen(8080, () => {
  console.log('Express server running at http://127.0.0.1:8080');
});