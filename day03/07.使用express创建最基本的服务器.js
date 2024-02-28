const express = require('express');

const app = express();

app.get('/user', (req, res) => {
  // 调用express提供的res.send()方法，向客户端响应一个json文件
  res.send({ name: '张三', age: 20, gender: '男' });
});

app.post('/user', (req, res) => {
  res.send('请求成功');
});

app.get('/', (req, res)=>{
  console.log(req.query);
  res.send(req.query);
});

// 注意：这里的:id是一个动态的参数
app.get('/user/:id/:name', (req, res)=>{
  // req.params 是动态匹配到的 URL 参数，默认也是一个空对象
  console.log(req.params);
  res.send(req.params);
});

app.listen(8080, () => {
  console.log('Express server running at http://127.0.0.1:8080');
});