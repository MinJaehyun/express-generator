# start
1. npm install 을 통해서 의존성 모듈을 설치 합니다.
2. npm start 명령어를 실행 합니다.
  

## 흐름:
    1. client 에서 server 에 URL 로 접근 시
    2. server 에서는 user() 함수로 사용된 내용들을 실행하고
    3. 이 후 client 에서 보낸 경로로 접근하기 위해 app.use() 미들웨어 함수를 실행한다
    4. 이 후 routes 에 설정된 내용을 실행하여
    5. view 에 접근할 수 있다.
    6. response 는 
    send 는 일반 문자열을 보내기 위해 사용한다.
    render 는 view 폴더의 파일을 출력하기 위해 사용한다.

## app.js 순서:
    1. const 선언
    2. Router 선언
    3. express() 로 app 객체 생성
    4. app.use() 로 도움되는 미들웨어 설정
    5. app.use() 로 경로와 Router 연동

## app.get 와 app.route() - /book 하나의 경로로 get, post, put 요청을 보낼 수 있다.
    app.route('/book')
      .get(function(req, res) {
        res.send('Get a random book');
      })
      .post(function(req, res) {
        res.send('Add a book');
      })
      .put(function(req, res) {
        res.send('Update the book');
      });


    - app.route()를 이용하면 라우트 경로에 대하여 체인 가능한 라우트 핸들러를 작성할 수 있다.


## express.Router - 모듈식 마운팅 가능한 핸들러를 작성할 수 있다
    var express = require('express');
    var router = express.Router();

    // router.use() 를 사용하여 라우터를 모듈로 작성하면 get, 실행 전, 미들웨어를 반드시 실행한다.
    router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
    });
    // define the home page route
    router.get('/', function(req, res) {
    res.send('Birds home page');
    });
    // define the about route
    router.get('/about', function(req, res) {
    res.send('About birds');
    });

    module.exports = router;
    
    
    
![21 11 22 express_generator](https://user-images.githubusercontent.com/43669992/143534426-70122db6-11b4-419b-a8ab-22a8a197144c.png)
