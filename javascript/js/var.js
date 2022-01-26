var name = "global"; //전역변수 선언과 동시에 초기화

        function func1() {
            var name = "local1"; //지역변수 선언과 동시에 초기화
            document.write('name = ' + name + '<br/>');
        }
        function func2() {
            var name = "local2"; //지역변수 선언과 동시에 초기화
            document.write('name = ' + name + '<br/>');
        }
        function func3() {
            name = "local3"; //전역변수의 내용을 덮어쓴다.
            document.write('name = ' + name + '<br/>');
        }
        document.write('name = ' + name + '<br/>'); //함수의 {} 밖에서 변수를 출력하고있으니 전역변수가 출력된다.
        func1();
        func2();
        func3();
        document.write('name = ' + name + '<br/>'); //fun3의 함수가 실행이 되었기때문에 덮어쓴 값이 출력이 된다.