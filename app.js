var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');         // 2.
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// use() 함수는 클라이언트가 서버에 요청을 할 때 중간에 거쳐가는 함수를 사용(use)하려고 할 때 사용한다.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 현재 경로(__dirname)에 있는 public 폴더 안에 내용인 static 파일들을 쓰겠다고 명시
// path에서 제공하는 join 함수로 __dirname 와 public 경로를 합친다.
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);         // 1.
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
