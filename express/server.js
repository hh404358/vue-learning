const express = require('express');
const app = express();

// 解决跨域问题，允许所有来源的请求都可以访问，
//也可以采用nginx代理解决跨域问题 
//前端打包后放在后端静态资源，当路由发生变化这时刷新页面会出现跨域问题， 一般都是由后端解决
const history = require('connect-history-api-fallback');
app.use(history());

const port = 3000;
app.use(express.static(__dirname + '/static'))
app.get('/person', (req, res) => {
  res.send({
    name: 'John',
    age: 30,
    occupation: 'Software Engineer'
  });
});
app.listen(port, (err) => {
    if(!err)console.log(`Example app listening at http://localhost:${port}`);
});

//在终端使用node server.js启动服务，然后在浏览器中访问http://localhost:3000/person，可以看到返回的json数据。