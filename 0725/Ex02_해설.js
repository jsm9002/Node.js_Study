{/* <table>
    <!-- 행(<tr>)과 열(<td>로 표현 --table -->
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>

</table> */}

console.log("실행확인!")
console.log("서버실행!")

const http = require("http")
const m_url = require("url")

http.createServer(function(request,response){

    let data = m_url.parse(request.url,true).query
    //{inputTD : 12}
    response.write("<html>")
    response.write("<body>")
    response.write("<table border='1px solid black'>")
    response.write("<tr>")
    for(let i =1; i<data.inputTD;i++){
        response.write(`<td>${i}</td>`)
    }
    response.write("</tr>")
    response.write("</table>")
    response.write("</body>")
    response.write("</html>")
    response.end();

}).listen(4000)