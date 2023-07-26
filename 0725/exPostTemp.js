//화면에 대한 구조 정의! --> 모듈화
exports.postTemp = function(queryData){
    let result_html = ""
        result_html=
        "<html><body>"+
        `<p><h1>ID : ${queryData.id}</h1></p>`+
        `<p><h1>PW : ${queryData.pw}</h1></p>`+
        `<p><h1>GENDER :${queryData.gender}</h1></p>`+
        `<p><h1>BLOOD :${queryData.blood}</h1></p>`+
        `<p><h1>HOBBY :${queryData.hobby}</h1></p>`+
        `<p><h1>COLOR :${queryData.color}</h1></p>`+
        `<p><h1>할말 :${queryData.inputText}</h1></p>`+
        "</body></html>"
    
    return result_html;

}