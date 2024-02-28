const http = require('http');

const server = http.createServer();

server.on('request', function (req, res) {
  console.log('Someone visit our web server.');  
});

server.listen(8080, function (res) {
  console.log('Server running at http:/127.0.0.1:8080');
});