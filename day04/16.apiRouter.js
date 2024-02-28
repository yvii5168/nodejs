const express = require('express');

const router  = express.Router();



// 在这里挂载对应的路由
router.get('/get', (req, res)=>{
  // 通过req.query获取客户端通过查询字符串，发送到服务器的数据
  const query = req.query;

  res.send({
    status: 0,
    msg: 'GET 请求成功',
    data: query
  });
});

router.post('/post', (req, res)=>{
  const body = req.body;

  res.send({
    status: 0,
    msg: 'POST 请求成功',
    data: body
  });
});

// 定义delete接口
router.delete('/delete', (req, res)=>{
  res.send({
    status: 0,
    msg: 'DELETE请求成功'
  });
});

module.exports = router;