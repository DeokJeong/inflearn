function sum() {
    var sum = 0;
    var count = 1;

    //무한 루프 시작
    while(true){
        var num = parseInt(window.prompt("숫자를 입력 : ", 1));
        if(num == 0){
            document.write("함수를 종료합니다.");
            return; //실행하던 함수를 종료합니다.
        }

        sum += num;
        document.write(count + ". " + sum + "<br/>");
        count++;
    }
}
 sum();