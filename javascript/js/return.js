// 가장 기본적인 함수 ( 매개변수가 없음 )
        // function hello() {
        //     document.write("반갑습니다.<br/>");
        // }
        // hello();
        // hello();
        // hello();
        
        //매개변수와 리턴값이 있는 함수 만들기
        function add(num1, num2){ //매개변수 2개를 받고있따.
            var result = num1 + num2;
            return result; //호출한 곳으로 결과값을 넘긴다.
        }
        function mul(num1, num2){ //매개변수 2개를 받고있따.
            var result = num1 * num2;
            return result; //호출한 곳으로 결과값을 넘긴다.
        }

        function minus(num1, num2){ //매개변수 2개를 받고있따.
            var result = num1 - num2;
            return result; //호출한 곳으로 결과값을 넘긴다.
        }

        var value = add(100,200);
        alert("두 수의 합 : " + value);

        var value = mul(100,200);
        alert("두 수의 곱 : " + value);

        var value = minus(100,200);
        alert("두 수의 차이 : " + value);