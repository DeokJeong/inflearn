// 구구단을 출력해주는 함수를 만듬
function gugudan_print() {
    for(var i = 2; i<=9; i++){
        document.write(i + "단 출력" + "<br/>")
        for(var j=1; j<=9; j++){
            document.write(i + "*" + j + "=" + (i*j)+ "<br/>");
        }
        document.write("<br/>")
    }
}
//함수는코드를 재활용 하고 있다. 아울러, 코드도 절약이 되고 잘 만들어놓으면
//필요할때 호출만 하면 된다.
gugudan_print();
gugudan_print();