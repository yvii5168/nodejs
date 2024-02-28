const http = require('http');

const server = http.createServer();

server.on('request', (req, res)=>{
  const str = `您请求的 URL 地址是 ${req.url}，您的请求的 METHOD 类型为：${req.method}`;
  // 解决中文的乱码问题，设置响应头
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(str);
});

server.listen(8080, ()=>{
  console.log('Someone visit our website http://127.0.0.1:8080');
});

// 注意：修改代码后，需要重启服务器，才能生效修改后的代码