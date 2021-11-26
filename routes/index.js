var express = require('express');
var router = express.Router();

/* GET home page. */
// views/index.pug 파일이 렌더링 된 것
// router 를 통해서도 router.get 처럼 method 를 사용할 수 있다
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// app.js 에서 routes/index.js 를 가져오기 위해 모듈을 exports 한다
module.exports = router;
