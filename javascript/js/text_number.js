// 상당히 비효율적인 코드
        // document.write("1. 홍길동 <br/>")
        // document.write("2. 홍길동 <br/>")
        // document.write("3. 홍길동 <br/>")
        // document.write("4. 홍길동 <br/>")
        // document.write("5. 홍길동 <br/>")

        // 반복문 활용
        // 함수를 사용하는 방법(코드의 재활용)
        function callName(name,count){
            for(var i = 1; i <= count; i++){
                document.write(i + ". " + name + "<br/>")
            };
        };
        //매개변수를 달리 주면 결과가 달라진다. 
        //매개변수 ()안에있는 내용
        callName("홍길동",5);
        callName("신사임당",7);