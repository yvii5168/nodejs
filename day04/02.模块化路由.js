const express = require('express');

const app = express();


// 导入路由模块
const router = require('./03.router');
// 注册路由模块
// app.use('/files', express.static('./files'));
app.use('/api', router);

// 注意：app.use() 函数的作用，就是来注册全局中间件

app.listen(8080, ()=>{
  console.log('Express server running at http://127.0.0.1:8080');
});