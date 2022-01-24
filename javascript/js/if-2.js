//짝수 검사하는 프로그램
        var value = window.prompt("숫자를 입력해주세요.")
        //prompt()에서 받은 value 값은 string타입이다. 하여, 아래 코드는 parseInt를 통해서 string타입을 정수 타입으로 바꾸고 있다.
        //강제 형변환
        value = parseInt(value);

        if(value % 2 == 0){
            alert("짝수 입니다.");
        }else{
            alert("홀수 입니다.");
        }