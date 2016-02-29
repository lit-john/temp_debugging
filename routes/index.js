var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var myTitle = process.env.TITLE || 'Express';
  console.log("process.env.TITLE is " + process.env.TITLE);
  res.render('index', { title: myTitle });
});

module.exports = router;
