const express = require('express');

const app = express();


// const mw = function (req, res, next) {
//   console.log('这是最简单的中间件函数');
//   next();
// }

// // 将mw注册为全局生效的中间件
// app.use(mw);


// 这是定义全局中间件的简化形式
app.use((req, res, next)=>{
  console.log('这是一个最简单的中间件函数');
  next();
});


app.get('/', (req, res)=>{
  console.log('调用了 / 这个路由');
  res.send('Home page.');
});

app.get('/user', (req, res)=>{
  console.log('调用了 /user 这个路由');
  res.send('User page.');
});

app.listen(8080, ()=>{
  console.log('Express server running at http://127.0.0.1:8080');
});