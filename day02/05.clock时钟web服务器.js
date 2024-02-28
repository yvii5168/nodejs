const http = require('http');

const fs = require('fs');

const path = require('path');

const server = http.createServer();

server.on('request', (req, res)=>{
  const url = req.url;

  // const fPath = path.join(__dirname, url);
  // 路径格式化，节省路径输入/clock
  let fPath = '';
  if (url === '/') {
    fPath = path.join(__dirname, './clock/index.html');
  } else {
    fPath = path.join(__dirname, './clock', url);
  }

  console.log(`访问的url地址为：${fPath}`);
  
  fs.readFile(fPath, 'utf8', (err, dataStr) => {
    if(err) return res.end('404 Not found.');
    res.end(dataStr);
  });
});

server.listen(8080, ()=>{
  console.log('Server running at http://127.0.0.1:8080');
});