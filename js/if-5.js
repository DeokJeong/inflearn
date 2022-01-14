//사용자로부터 입력받는 부분
        var value = window.prompt("행운의 번호를 고르세요.")

        //값 비교

        //CPU의 참조를 가장 적게 받기위한 방법 if / else if / else를 사용하는것이 가장 좋다.
        if(value == "1"){
            document.write("당첨! OLED TV");
        }else if(value == "2"){
            document.write("당첨! 무풍 에어컨");
        }else if(value == "3") {
            document.write("당첨! 고성능 PC");
        }else{
            document.write("꽝! 다음기회에..");
        }