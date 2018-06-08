var express = require('express');
var router = express.Router();

var index = require('../data/index.json');
var service = require('../data/service');
var item = require('../data/item')
var comments = require('../data/comment')

router.get('/msite',function (req,res) {
  res.send(index)
})
router.get('/service',function (req,res) {
  res.send(service)
})
router.get('/item',function (req,res) {
  res.send(item)
})
router.get('/comment',function (req,res) {
  var page = req.query.page/1;
  var comment = comments.slice(page*10,10*(page+1))
  res.send(comment)
})

module.exports = router;