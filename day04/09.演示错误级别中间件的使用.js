const express = require('express');

const app = express();

// 定义路由
app.get('/', (req, res)=>{
  // 认为的制造错误
  throw new Error('服务器内部发生了错误！');
  res.send('Home page.');
});

// 定义错误级别的中间件，捕获整个项目中的异常错误，从而防止程序的崩溃
// 错误中间件一定要放在所有路由之后
app.use((err, req, res, next)=>{
  console.log('发生了错误：'+err.message);
  res.send('Error：'+ err.message);
});


app.listen(8080, ()=>{
  console.log('Express server running at http://127.0.0.1:8080');
});