
console.log("실행 확인");


//파일을 서버로 만들기 위해서는 서버의 기능을 할 수 있는 
//모듈이라는 녀석들을 가져와서 사용해 줘야 한다!
//http 기능(모듈)을 불러와서 사용하기!
const http = require("http")

//http://로컬컴퓨터주소(ip주소)(192.168.0.28)
// ip주소 확인하는법 cmd창에 ipconfig
// 현재 내컴퓨터의 ip주소를 확인 가능하다!

//http://192.168.0.28:3000
http.createServer(function(request, response){
    //1. createServer : 현재 js 파일을 서버로 만들어 주는 역할!
    //2. function(request, response){실행로직} : 클라이언트가 요청을 보냈을때 실행할 로직
    console.log("접속확인")

    //request : 클라이언트가 서버로 요청을 보넀을떄 정보를 가지고 있다.
    let ip = request.connection.remoteAddress;
    console.log("요청보낸 주소 : " +ip)
    //응답값 만들어 주기 -> html 형식!
    //200 --> 통신성공코드
    //"Content-Type":"text/html" --> html형식으로 응답하겠습니다.
    //response : 응답객체 --> 응답을 하기위한 객체
    response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    response.write("<html>");
    response.write("<body>");
    response.write("<h1>첫번쨰 응답</h1>");
    response.write("</body>");
    response.write("</html>");

    response.end();
}).listen(3000)

// 서버실행 : node 실행파일명
// 서버중지 : Crtl + C

//CLI : command line interface --> 리눅스 기반
//GUI : Grapic User Interface  사용자에 초점 화면 ==> Window 명령

//cd : 경로 이동 ex) cd 경로명(파일명) cd .. 이전 경로로!
//ls : 현재 경로에서 접근할 수 있는 파일을 확인
//clear : 커맨드창 지우기
//tab : 자동완성
