console.log("실행 확인!")
const http = require("http")
const m_url = require("url")
http.createServer(function(request,response){
//192.168.0.38:4000

let queryData = m_url.parse(request.url,true).query
let num1 = queryData.num1
let num2 = queryData.num2

response.writeHead(200,{"Content-Type":"text-html;charset=utf-8"});
sum = (num1_1,num2_1) => {
    num3 = parseInt(num1_1) + parseInt(num2_1)
    return response.write(`<html><body><h1>${num1}+${num2}=${num3}</h1></body></html>`)     
}
sum(num1,num2)
response.end();
}).listen(4000)