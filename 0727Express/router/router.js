const express = require("express")

const router = express.Router();

router.get("/",function(request,response){
    console.log("접속 확인!")
    response.end()
})

router.get("/response",function(request,response){
    console.log(request.query.text)
    response.end()
})

//위에 만들어진 기능을 외부에서 사용할 수 있도록 빼내는 작업
//-->모듈화 (router)
module.exports = router