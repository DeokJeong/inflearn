$(document).ready(function(){
    function hello() {
        var rnd1 = Math.floor(Math.random() * 20);
        var rnd2 = Math.floor(Math.random() * 40);
        var rnd3 = Math.floor(Math.random() * 3) + 100;

        //글자 흔들기
        $(".hello .text").css({
            "bottom" : rnd1, "left" : rnd2
        })
        //배경 확대
        $(".hello").css({"background-size" : rnd3 + "%"});
    }setInterval(hello, 80);
});