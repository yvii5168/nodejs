const http = require('http');

const server = http.createServer();

server.on('request', (req, res)=>{
  const url = req.url;
  const method =  req.method;
  const str = `Your request url is ${url}, and request method is ${method}`;
  console.log(str);

  // 调用res.end()方法，向客户端响应一些内容
  res.end(str);
});

server.listen(8080, ()=>{
  console.log('Server running at http://127.0.0.1:8080');
});