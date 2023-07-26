const http = require("http")
const qs = require("querystring")
// --> body 안에 담긴데이터를 객체형식으로 변환해서 사용할 수 있게끔 도와주는 역할
const exPostTemp = require("./exPostTemp")

http.createServer(function(request,response){

    //1.클라이언트가 보낸 데이터를 꺼내오겠습니다.
    let bodyData = ""
    request.on('data',function(data){
        bodyData+=data    
    })
    //2.모든 요청이 끝났을때(데이터를 전부 전송했을때)
    //--> 받아온 데이터를 (개발자가 사용할 수 있게끔)변환시켜서 사용하겠습니다.
    request.on('end',function(){
        let queryData = qs.parse(bodyData)
        console.log(queryData)

        response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
        response.write(exPostTemp.postTemp(queryData))
        response.end()
    })
}).listen(4000)