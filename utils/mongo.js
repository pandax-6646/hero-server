const mongoose = require('mongoose');

// 连接数据库,第一个参数为数据库地址(如果是远程数据库,修改地址即可),第二参数为对象,为了消除警告信息
mongoose.connect('mongodb://localhost/person', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

module.exports = db;