// 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

var n = window.prompt('숫자를 입력해주세요.');
    n = parseInt(n);
    h = 0;
    
for(var i = 0; i <= n; i++ ){
    if(n >= 10000 || 0 >= n){
        alert("값을 확인해주세요.")
    }
    h = h+i;
}
document.write(h);
