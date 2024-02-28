const express = require('express');

const app = express();

const mw1 = (req, res, next)=>{
  console.log('调用了局部生效的中间件');
  next();
}

app.get('/', mw1, (req, res)=>{
  res.send('Home page.');
});

app.get('/user', (req, res)=>{
  res.send('User page.');
});


app.listen(8080, ()=>{
  console.log('Express server running at http://127.0.0.1:8080');
});