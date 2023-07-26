const http = require("http")
const qs = require("querystring")
const result = require("./ex03_modul")

http.createServer(function(request,response){
    let bodyData =""
    request.on('data',function(data){
        bodyData+=data
    })

    request.on('end',function(){
        let queryData = qs.parse(bodyData)
        console.log(queryData)
        console.log("Test")
        response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
        response.write(result.postTemp(queryData))

        response.end()
    })
}).listen(4000)