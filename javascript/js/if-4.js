//사용자로부터 입력받는 부분
        var userID = window.prompt("아이디를 입력해주세요.")
        var userPW = window.prompt("비밀번호를 입력해주세요.")
        //값 비교

        //CPU의 참조를 가장 적게 받기위한 방법 if / else if / else를 사용하는것이 가장 좋다.
        if(userID == "Shin" && userPW == "1111"){
            alert(userID + "님이 로그인 하셨습니다.");
        }else if(userID == "Shin"){
            alert("패스워드가 잘못 입력 되었습니다.")
        }else {
            alert("아이디가 잘못 입력 되었습니다.")
        }