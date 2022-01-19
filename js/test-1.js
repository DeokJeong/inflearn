var low = 0;
var high = 0;
var card = 0;

while(true){
    var count = 0;
    low = 0;
    high = 99;
    card = Math.floor(Math.random()*100);
    alert("수를 결정하였습니다. 맞춰보세요.");

    while(true){
        var n=0;
        alert(low + " - " + high);
        count++;
        alert("시도횟수 : " + count + "번째");

        n = prompt("숫자를 입력하세요!");
        n = parseInt(n);

        if(n > high || n < low){
            alert("값의 범위를 벗어났어요.");
        }else{
            if(n == card){
                alert("정답입니다. 짝짝짝!");
                break;
            }else if(n > card){
                alert("정답은 더 낮은 수 입니다.");
                high = n;
            }else {
                alert("정답은 더 높은 수 입니다.");
                low = n;
            }
        }
    }
    alert("시도횟수는" + count + "입니다.");
    
    var con = confirm("다시 게임을 하시겠습니까?(y/n)")
    if(con == false){
        break;
    }
}
