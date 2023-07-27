//express 사용 3단계
//1. npm init --> 프로젝트의 정보를 저장하는 package,json 생성
//2. 프로젝트 express 설치
//3. 프로젝트 구조 생성
//  config(환경설정), public(정적), router(경로), app.js(서버)

//express 서버 생성
//1. express 모듈 가져오기
const express = require("express")

//2. express 실행정보를 app 변수에 담아주기
const app = express();


const router = require("./router/router")


//4. 경로를 설정할 수 있는 Router 만들기
// const router = express.Router();
// router.get("/",function(request,response){
//     console.log("접속 확인!")
//     response.end()
// })

// router.get("/response",function(request,response){
//     console.log(request.query.text)
//     response.end()
// })
//5. router로 만든 경로를 서버(app)에 등록 시켜주기!
// 서버에 등록시킨다 ==> 미들웨어
// body영역 허용뒤 -> router 등록! 
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(router)



//3. 포트번호 달아주기
app.listen(4000)