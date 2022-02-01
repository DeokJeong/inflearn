$(function( ){
    $('.btn1').click(function(){
        $('#p1').css({
            'color' : '#f00',
            'font-weight' : 'bold'
        });
    });

    $('.btn2').on({
        "mouseover focus" : function() {
            $("#p2").css({
                'color' : '#0f0',
                'font-weight' : '900'
            });
        },
        "mouseout blur" : function(){
            $("#p2").css({
                'color' : '#000',
                'font-weight' : 'normal'
            });
        }
    });
    //off 함수는 등록된 이벤트를 제거할때 사용
    $('.btn1').off("click");
    $('.btn2').off("mouseout blur");
});