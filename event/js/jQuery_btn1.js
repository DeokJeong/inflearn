//focus = tab키를 눌렀을때 그 위치에 도착한다면..
$(document).ready(function(){
    //첫번째 방법
    // $("#btn").on('mouseover focus', function(){
    //     alert("안녕하세요.");
    // });

    //두번째 방법
    // $("#btn").on({
    //     "mouseover focus" : function() {
    //         console.log("이벤트 발생");
    //     }
    // });

    //세번째 방법
    $("#btn").on({
        "mouseover" : function() {
            console.log("이벤트 발생");
        },
        "focus" : function() {
            console.log("이벤트 발생 포커스");
        }
    });
});