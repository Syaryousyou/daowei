var express = require('express');
var router = express.Router();

var index = require('../data/index.json');
var service = require('../data/service');
var item = require('../data/item')

router.get('/msite',function (req,res) {
  res.send(index)
})
router.get('/service',function (req,res) {
  res.send(service)
})
router.get('/item',function (req,res) {
  res.send(item)
})
//暴露
module.exports = router;