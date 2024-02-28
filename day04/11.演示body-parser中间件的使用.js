const express = require('express');

const app = express();

// 导入解析表单数据的中间件：body-parser
const parser = require('body-parser');
app.use(parser.urlencoded({ extended: false }));

// app.use(express.urlencoded({ extended: false }))'

app.post('/user', (req, res) => {
  // 如果没有配置任何解析表单数据的中间件，则req.body则默认为undefined
  console.log(req.body);
  res.send('OK');
});


app.listen(8080, () => {
  console.log('Express server running at http://127.0.0.1:8080');
});