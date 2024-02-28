// 导入express模块
const express = require('express');

// 创建express的服务实例
const app = express();

// TODO_01:安装并导入jwt相关的两个包,分别是jsonwebtoken和express-jwt
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');


// 允许跨域资源共享
const cors = require('cors');
app.use(cors());

// 解析post表单数据的中间件
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// TODO_02:定义secret密钥,建议将密钥命名为secretKey
const secretKey = 'itnode kxc && <>()';

// TODO_04:注册将JWT字符串解析还原成JSON对象的中间件
// 注意:只要配置成功了express-jwt这个中间件,就可以把解析出来的用户信息,挂载到req.user属性上
app.use(expressJWT.expressjwt({secret: secretKey, algorithms: ['HS256']}).unless({path: [/^\/api\//]}));


// 登录接口
app.post('/api/login', (req, res) => {
  // 将req.body请求体中的数据,转存为userinfo常量
  const userinfo = req.body;

  // 登录失败
  if (userinfo.username !== 'admin' || userinfo.password !== '000000') {
    return res.send({
      status: 0,
      message: '登录失败'
    });
  }

  // 登录成功
  // TODO_03:在登录成功以后,调用jwt.sign()方法生成JWT字符串,并通过token属性发送到客户端
  // 参数1:用户的信息对象
  // 参数2:加密的密钥
  // 参数3:配置对象,可以配置当前token的有效期
  // 记住:千万不要把密码加密到token字符串中
  const tokenStr = jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: '30s' });
  res.send({
    status: 200,
    message: '登录成功',
    token: tokenStr // 要发送给客户端的token字符串
  });
});

// 这是一个有权限的API接口
app.get('/admin/getinfo', function(req, res) {
  // TODO_05:使用req.user获取用户信息,并使用data属性将用户信息发送给客户端
  console.log(res.user);
  res.send({
    status: 200,
    message: '获取用户信息成功',
    data: req.user // 要发送给客户端的用户信息
  }); 
});

// TODO_06:使用全局错误处理中间件,捕获解析JWT失败后产生的错误
app.use((err, req, res, next)=>{
  // 这次错误是由token解析失败导致的
  if (err.name === 'UnauthorizedError') {
    res.send({
      status: 401,
      message: '无效的token'
    });
  }

  res.send({
    status: 500,
    message: '未知的错误'
  });
})

// 调用api.listen方法,指定端口号并启动web服务器
app.listen(8080, () => {
  console.log('Express server running at http://127.0.0.1:8080');
});