const express = require("express")

const router = express.Router();

let id_1 = 0;
let pw_1 = 0;
let nick_1 = 0;

router.get("/",function(request,response){
    console.log("접속 확인!")
    response.end()
})

router.get("/response",function(request,response){
    console.log(request.query.text)
    response.end()
})

router.get("/nextPage",function(request,response){
    // request.query.next
    // 페이지 이동하는 방법!
    let link_text = request.query.next
    let url_end = 0
    if(link_text == "Daum"){
        url_end = ".net"
    }else{
        url_end = ".com"
    }
    response.redirect(`http://www.${link_text}${url_end}`)
    // if(link_text == "Google"){
    //     response.redirect("http://www.google.com")
    // }else if(link_text == "Naver"){
    //     response.redirect("http://www.naver.com")
    // }else{
    //     response.redirect("http://www.daum.net")
    // }
})

router.get("/join",function(request,response){
    id_1 = request.query.id //join id = 성민
    pw_1 = request.query.pw // join pw = 123
    nick_1 = request.query.pw

    response.redirect("http://127.0.0.1:5500/0727Express/public/Login.html")
})


router.post("/login",function(request,response){
    let id = request.body.id
    let pw = request.body.pw
    console.log(`${id_1},${pw_1}`)

    if(id_1 == "성민" && pw_1 == "123"){
        response.redirect("http://127.0.0.1:5500/0727Express/public/S.html")
        console.log("로그인성공")
    }else{
        response.redirect("http://127.0.0.1:5500/0727Express/public/F.html")
        console.log("로그인실패")
    }
})


//위에 만들어진 기능을 외부에서 사용할 수 있도록 빼내는 작업
//-->모듈화 (router)
module.exports = router