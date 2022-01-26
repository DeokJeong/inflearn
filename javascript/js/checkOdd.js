//홀수인지 짝수인지를 검사하는 프로그램을 함수로 포장
function checkOdd(number){ //매개변수가 있는 함수
    if(number % 2){
        document.write(number + "는 홀수 입니다.");
    }else{
        document.write(number + "는 짝수 입니다.");
    }
}
var number = prompt("숫자를 입력해주세요.");
checkOdd(number);

number = prompt("숫자를 입력해주세요.");
checkOdd(number);