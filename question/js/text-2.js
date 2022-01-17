var year = prompt('년도를 입력해주세요.')
    year = parseInt(year);

    if(year >= 4000){
        alert('숫자 틀림')
    }else if(year % 4 == 0 && year % 100 != 0){
        document.write('1')
    }else if(year % 400 == 0){
        document.write('1')
    }else{
        document.write('0')
    }