//함수 calc()선언과 구현을 하고있다.
function calc() {
    var currentYear = 2022; // 올해 년도 저장을 변수 currentYear에 저장함
    var birthYear = prompt("태어난 년도를 입력하세요.","YYYY") // 사용자로부터 입력을 받은 값으로 변수 birthYear에 저장함
    var age = 0; //변수 age를 0으로 초기화
    
    age = currentYear - birthYear + 1; //실제 나이를 구하기 위한 코드
    //document는 현재 웹 브라우저의 페이지를 의미
    //querySelector()는 id선택자(#result인 div)를 의미한다.
    //innerHTML은 대입한 값으로 html문서에 대체하는것을 의미한다.
    document.querySelector("#result").innerHTML = "당신의 나이는" + age + "세 입니다."; 
}