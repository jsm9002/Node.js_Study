//4000번 포트로 서버를 열어주세요!
//접속했을때 --> 서버생성완료
//require("http") --> http 모듈을 가져와서 사용하겠습니다.
console.log("실행 확인!");

const http = require("http")
const m_url = require("url");
//url 모듈 : 클라이언트가 보낸 url 정보를 사용할 수 있게 도와주는 모듈(기능)
//http://192.168.0.28:4000
http.createServer(function(request,response){
    //request : 클라이언트 -> 서버
    //response : 서버 -> 클라이언트
    //http://192.168.0.28:4000/?inputId=abc&inputPw=paapds
    //? get방식으로 쿼리스트링 형태로 데이터를 요청보낸다!
    //쿼리스트링 : ? 를 기준으로 왼쪽에는  주소
    // 오른쪽 data(key-value) >> key --> input 태그에 적은 name
    // 데이터가 여러개 라면 & 기호를 기준으로 나뉘어진다!

    //url에 담긴 데이터 꺼내기
   console.log(request.url)//--> request.url : 클라이언트가 요청한 url
   //true --> 쿼리스트링의 데이터부분만 사용하겠습니다.
   //.query -> 사용할 수 있게끔 객체로 만들어 주겠습니다.
   let queryData = m_url.parse(request.url, true).query
   let inId = queryData.inputId
   let inPw = queryData.inputPw

   console.log(queryData)
   console.log("입력한 ID :" +queryData.inputId)
   console.log("입력한 PW :" +queryData.inputPw)
   //넘겨받은 값의
   //ID:aischool , PW : 123
   //h1태그로 '로그인 성공!'
   //둘중 하나라도 값이 다르다면
   //h1태그로 '로그인실패'
    console.log("서버생성완료!")

    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    
    if(inId == 'aischool' && inPw == '123'){
        response.write("<html><body><h1>로그인성공!</h1></body></html>");
        response.end();
       }else{
        response.write("<html><body><h1>로그인실패!</h1></body></html>");
        response.end();
       };
}).listen(4000)
//포트 --> 중복X