const express = require("express")
//nodejs의 express 불러오기

const router = express.Router();
//express의 모듈중 Router 불러와서 변수에 넣기
//DB연결
//1. mysql 연결할 수 있는 mysql2 이라는 모듈가져오기
const mysql = require("mysql2")

//2.mysql DB에 접근할 수 있는 정보를 저장
//DB에 접근할 수 있는 기능을 conn에 저장
let conn = mysql.createConnection({
    //mysql 서버의 주소(ip)
    host : "localhost",
    //mysql에 접속할 id
    user : "root",
    //mysql에 접속할 password
    password : "123456",
    port : "3306",
    database : "nodejs_DB"
})


// let id_1 = 0; 나의풀이
// let pw_1 = 0;
// let nick_1 = 0;

let inputId = "" // 선생님 풀이
let inputPw = ""
let inputNick=""

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

// router.get("/join",function(request,response){
//     id_1 = request.query.id //join id = 성민
//     pw_1 = request.query.pw // join pw = 123
//     nick_1 = request.query.pw

//     response.redirect("http://127.0.0.1:5500/0727Express/public/Login.html")
// })


router.post("/login",function(request,response){
    let id = request.body.id
    let pw = request.body.pw
    // console.log(`${id_1},${pw_1}`)
    conn.connect();

    let sql = "select * from member where id = ? and pw = ?" 
    //select 문은 where 조건에 맞는 값이 없으면 그냥 데이터값이 없다. syntax 에러는 나지 않음.
    conn.query(sql,[id,pw],function(err,rows){
    
        if(!err){
            console.log("정보 불러오기 성공!")
            if(rows.length==0){
                console.log("회원가입해주세요")
                
            }else{
                console.log("로그인성공했어용")
                response.render("LoginS",{nick:rows[0].nick})
                // response.redirect("http://localhost:5500/0727Express/public/Main.html")
            }
        }else{
            console.log("정보 불러오기 실패!")
        }
     
    })
    // if(inputId == "성민" && inputPw == "123"){
    //     response.redirect("http://127.0.0.1:5500/0727Express/public/S.html")
    //     console.log("로그인성공")
    // }else{
    //     response.redirect("http://127.0.0.1:5500/0727Express/public/F.html")
    //     console.log("로그인실패")
    // }
})

router.post('/join',function(request,response){
    inputId = request.body.id
    inputPw = request.body.pw
    inputNick = request.body.nick
    //DB접속
    conn.connect();

    
    // ? -> 나중에 값을 담아주겠습니다! (단! 순서를 맞춰서!)
    let sql = `insert into member values(?,?,?)`
    //conn.quert(sql, function) -> sql 쿼리문을 실행 시키겠습니다!
    // 퀑리문을 실행 후 작업 진행하겠습니다.
    conn.query(sql,[inputId,inputPw,inputNick],function(err,rows){

        //err -> 쿼리문 오류 내용을 받아오겠습니다.
        //rows -> 정상 실행된 결과를 받아오겠습니다.
        //err 또는 rows 둘중 하나만 값이 들어간다!
        if(!err){//err가 아니라면! -> 정상으로 쿼리문이 실행 되었다면!
            console.log("쿼리문 실행 완료!")
            response.redirect("http://localhost:5500/0727Express/public/Login.html")
        }
        else{
            console.log("db 명령이 제대로 실행되지 않았습니다!")
        }


    });

    
})

router.get('/delete',function(request,response){
    let delete_txt = request.query.deleteUser //삭제할 nick
    //1. 서버와 DB 의 통로
    conn.connect();
    //2. 실행시킬 쿼리문 작성
    let sql = "DELETE FROM MEMBER WHERE NICK = ?" //sql 명령문

    conn.query(sql,[delete_txt],function(err,rows){ //넣어보자
        if(!err){
            console.log("회원삭제 성공!")
            response.redirect("http://localhost:5500/0727Express/public/Main.html")
        }
        else{
            console.log("회원삭제 실패!")
        }})
    })

    router.get('/update',function(request,response){
        let modi_id = request.query.mo_id  //수정 원하는 곳의 id
        let modi_pw = request.query.mo_pw // 바꾸어줄 pw
        let modi_nick = request.query.mo_nick // 바꾸어줄 nick

        //1. 서버와 DB 의 통로
        conn.connect();
        //2. 실행시킬 쿼리문 작성
        let sql = "UPDATE MEMBER SET PW = ?, NICK = ? WHERE ID = ?" //sql 명령문
    
        conn.query(sql,[modi_pw,modi_nick,modi_id],function(err,rows){ //넣어보자
            if(!err){
                console.log("회원정보 수정 성공!")
                response.redirect("http://localhost:5500/0727Express/public/Main.html")
            }
            else{
                console.log("회원정보 수정 실패!")
            }
        })

})
//위에 만들어진 기능을 외부에서 사용할 수 있도록 빼내는 작업
//-->모듈화 (router)
module.exports = router