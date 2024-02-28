const express = require('express');

const app = express();

// TODO_01:请配置Session中间件
const session = require('express-session');
app.use(session({
  secret: 'itnode',
  resave: false,
  saveUninitialized: true
}));

// 托管静态页面
app.use(express.static('./pages'));

// 解析POST提交过来的表单数据
app.use(express.urlencoded({extended: false}));


// 登录的API接口
app.post('/api/login', (req, res)=>{
  // 判断用户提交的登录信息是否正确
  if (req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({status: 1, msg: '登录失败'});
  }

  // TODO_02:请将登录成功后的用户信息,保存到session中
  // 注意:只有成功配置了express-session这个中间件之后,才能够通过req点出来session这个属性
  req.session.user = req.body; // 用户的信息
  req.session.islogin = true; // 用户的登录状态

  res.send({status: 0, msg: '登录成功'});
});

  
// 获取用户姓名的接口
app.get('/api/username', (req, res)=>{
  // TODO_03:请从session中获取用户的名称,响应给客户端
  console.log('res.session:', res.session);
  if (!res.session.islogin) {
    return res.send({status: 1, msg: 'fail'});
  }

  res.send({
    stauts: 0,
    msg: 'success',
    username: res.session.user.username
  });
});


// 退出登录的接口
app.post('/api/logout', (req, res)=>{
 
  // TODO_04: 清空Session信息 
  req.session.destroy();

  res.send({
    status: 0,
    msg: '退出登录成功'
  });
});



app.listen(8080, ()=>{
  console.log('Express server running at http://127.0.0.1:8080');
});