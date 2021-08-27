var Koa = require('koa')
var app = new Koa()
var router = require('./router');
var corsFn = require('./utils/corsFn');
var db = require('./utils/mongo');
var paramsFn = require('./utils/params.js');
var koaBody = require('koa-body');


// 启用数据库
db.on('error', function (err) {
  console.log('数据库连接失败', err);
});
db.once('open', function () {
  console.log('数据库连接成功');
});



// 添加跨域的中间件
app.use(corsFn);



// 获取 post 请求参数
app.use(koaBody());


// 处理请求参数的中间件, 把get和post的请求参数都放入ctx.params对象, 方便获取请求参数
app.use(paramsFn); // 访问数据库是异步的，所以这个 paramsFn 需要监听异步


// 启用路由
app.use(router.routes());


app.listen(3001, () => {
  console.log('serve is open in http://localhost:3001');
});
