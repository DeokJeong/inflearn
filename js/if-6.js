//사용자로부터 입력받는 부분
var score = window.prompt("점수를 입력하세요.")

//문자를 숫자로 변경
score = parseInt(score);

//CPU의 참조를 가장 적게 받기위한 방법 if / else if / else를 사용하는것이 가장 좋다.
if(score >=90 && score <= 100 ){
    document.write(score + "점의 학점은? A입니다.");
}else if(score >=80 && score <= 90 ){
    document.write(score + "점의 학점은? B입니다.");
}else if(score >=70 && score <= 80 ){
    document.write(score + "점의 학점은? C입니다.");
}else if(score >=60 && score <= 70 ){
    document.write(score + "점의 학점은? D입니다.");
}else{
    document.write(score + "점의 학점은? F입니다.");
}