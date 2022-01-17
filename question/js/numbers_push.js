        var numbers = [];
        for(var i = 1; i <= 10; i++){
            var a = window.prompt("숫자 입력")
            numbers.push(a)
        }

        // 입력받은 숫자들을 출력하는데
        // 10보다 크면서 짝수인 애들만 출력

        for(var i=0; i < numbers.length; i++){
            if(numbers[i] > 10 && numbers[i] % 2 == 0){
                document.write(numbers[i] + "<br>");
            }
        }