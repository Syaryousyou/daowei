var express = require('express')
var router = require('./routes/route.js')
var app = express()
app.use(express.static("public"));
app.use(router)
app.listen(4000,function () {
  console.log("数据库连接成功，端口号4000");
})