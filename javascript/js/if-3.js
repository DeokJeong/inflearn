//2와 3의 공배수를 검사하는 프로그램
        var value = window.prompt("숫자를 입력해주세요.")
        value = parseInt(value);

        // &&는 논리연산자로서 두 개의 조건이 true면 true를 리턴한다.
        // ||는 논리연산자로서 둘 중 하나의 조건만 true이면 true를 리턴한다.
        if((value % 2 == 0) && (value % 3 == 0)){
            alert("2와 3의 공배수 입니다.");
        }else{
            alert("2와 3의 공배수가 아닙니다.");
        }

        if((value % 2 == 0) || (value % 3 == 0)){
            alert("2이거나 3의 공배수 입니다.");
        }else{
            alert("2이거나 3의 공배수가 아닙니다.");
        }