console.log("실행 확인!")
const http = require("http")
const m_url = require("url")
http.createServer(function(request,response){
//192.168.0.38:4000

let data = m_url.parse(request.url,true).query 
console.log(data)
//주소창의 쿼리문을 객체로 받아주기위한 구문
let num1 = parseInt(data.num1)
let num2 = parseInt(data.num2)
let cul = data.cul
let cul_tran = 0
let cul_res = 0



if(cul == '+'){
    cul_tran = 'PLUS'
    cul_res = num1 + num2
}else if(cul == '-'){
    cul_tran = 'MINUS'
    cul_res = num1 - num2
}else if(cul == '*'){
    cul_tran = 'MULTI'
    cul_res = num1 * num2
}else if(cul == '/'){
    cul_tran = 'div'
    cul_res = num1 / num2
}


response.writeHead(200,{"Content-Type":"text-html;charset=utf-8"});

response.write("<html>")
response.write("<body>")
response.write(`<h1>${cul_tran} : ${cul_res}</h1>`)
response.write("</body>")
response.write("</html>")
response.end();
}).listen(4000)