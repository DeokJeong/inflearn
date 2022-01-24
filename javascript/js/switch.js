//사용자로부터 입력받는 부분
var rank = window.prompt("직급을 입력해주세요. 1-부장, 2-차장, 3-과장, 4-대리, 5-사원");

//switch 문은 정형화, 한정된 데이터에 가독성을 좋게 하고자 한다면 switch문을 
//쓸것을 고려해도 좋다.
switch(rank){
    case "1" : document.write("<p>부장의 급여는 <strong>500만원 입니다.</strong></p>");
        break;
    case "2" : document.write("<p>차장의 급여는 <strong>400만원 입니다.</strong></p>");
        break;
    case "3" : document.write("<p>과장의 급여는 <strong>300만원 입니다.</strong></p>");
        break;
    case "4" : document.write("<p>대리의 급여는 <strong>200만원 입니다.</strong></p>");
        break;
    case "5" : document.write("<p>사원의 급여는 <strong>150만원 입니다.</strong></p>");
        break;
        default : alert("잘못 입력하셨습니다.")
}