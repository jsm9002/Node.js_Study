exports.postTemp_1 = function(queryData){
    let avg_1 = 0 ;
    let grade = 0;
    avg = (num1,num2,num3,num4) => {
        num1 = parseInt(num1)
        num2 = parseInt(num2)
        num3 = parseInt(num3)
        num4 = parseInt(num4)
       average = (num1+num2+num3+num4)/4
       avg_1 = average; 
    }
    avg(queryData.html_score,queryData.css_score,queryData.nodejs_score,queryData.android_score)
    if(avg_1 >= 95 ){
        grade = "A+"
    }else if(avg_1>= 90){
        grade = "A"
    }else if(avg_1 >= 85){
        grade = "B"
    }else if(avg_1 >= 80){
        grade = "C"
    }else if(avg_1 >=70){
        grade = "D"
    }
    else{
        grade = "F"
    }
    let result_html = ""
        result_html=
        "<html><body>"+
        `<p><h1>name : ${queryData.name}</h1></p>`+
        `<p><h1>html : ${queryData.html_score}</h1></p>`+
        `<p><h1>css : ${queryData.css_score}</h1></p>`+
        `<p><h1>nodejs : ${queryData.nodejs_score}</h1></p>`+
        `<p><h1>android : ${queryData.android_score}</h1></p>`+
        `<p><h1>avg : ${avg_1}</h1></p>`+
        `<p><h1>grade : ${grade}</h1></p>`+
        "</body></html>"
    
    return result_html;

}