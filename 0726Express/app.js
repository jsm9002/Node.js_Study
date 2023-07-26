const score_temp = require("./ex03_modul")

//1.express 사용 기능 가져오기
const express = require('express')

//2. express 실행 정보를 app 변수에 저장
const app = express()

//3. router 기능 사용 선언!
const router = express.Router()
// body 영역 사용등록 --> post 방식떄 사용되어짐
app.use(express.urlencoded({extended:true})) //body영역 허용
app.use(express.json()) //받은 데이터를 json객체로 변환!
//4. 서버등록
app.use(router)

// 클라이언트가 요청보낸 주소값에 따라서 서버를 사용하겠습니다.

//6.요청을 보낸 주소값에 대해서 처리!
//http://localhost:3000 --> /
router.get("/",function(request,response){
    console.log("서버 접속 확인!")
})
router.get("/plus",function(request,response){
    console.log("plus 서버 접속 확인!")
    console.log(request.query.num1)
    console.log(request.query.num2)
    let num1 = parseInt(request.query.num1)
    let num2 = parseInt(request.query.num2)

    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    response.write(`<html><body>${num1}+${num2}=${num1+num2}</body></html>`)
})



//router 를 통해 각각의 주소값에 따라 다른 기능을 실행 시킬수 있다!
//주의!! router,get,route.post 각각에 상황에맞게 사용해야함
//post는 body ////get 은 query
router.post("/login",function(request,response){
    console.log("서버 접속 확인!")


    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    let ID = request.body.inputId
    let PW = request.body.inputPw
    
    if(ID == "aischool" && PW == "123"){
        response.write(`<html><body><h1>로그인성공😊😊😊😊😊</h1></body></html>`)
        response.end()
    }else{
        response.write(`<html><body><h1>로그인실패😒😒😒😒😒</h1></body></html>`)
        response.end()
    }

})



router.post("/grade",function(request,response){
    console.log("서버 접속 확인!")

    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    //post 로 받아서 모듈 불러오기
    response.write(score_temp.postTemp_1(request.body))
    response.end()
        
})
//5. 포트번호 등록
app.listen(3000)
