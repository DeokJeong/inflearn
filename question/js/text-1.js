var a = window.prompt('숫자를 입력해주세요.')
var b = window.prompt('숫자를 입력해주세요.')
    a = parseInt(a)
    b = parseInt(b)
if(a <= 9999 && b <= 9999){
    document.write(a + "+" + b + "=" + (a+b) + "<br>")
    document.write(a + "-" + b + "=" + (a-b) + "<br>")
    document.write(a + "x" + b + "=" + a*b + "<br>")
    document.write(a + "/" + b + "=" + a/b + "<br>")
}else{
    alert('잘못 입력되었습니다. 숫자를 입력해주세요')
}