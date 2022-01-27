var gigu = null;
$(document).ready(function(){  
    initialise();
    event_gigu();
})

function initialise() {
    //지구본 찾기
    //버튼에 이벤트 등록
    gigu = $("#gigu");
}
//이벤트와 관련된 내용을 함수로 등록
function event_gigu() {
    $("#btnStart").click(function(){
        //지구본 움직이기
        //지구본 위치값 구하기
        var x = parseInt($("#x_text").val());
        var y = parseInt($("#y_text").val());
        moveGigu(x,y);
    });
}
//지구본의 움직이는 기능을 구현해놓은 함수
function moveGigu(x, y){
    if((x >= 0 && x <= 500) && (y >= 0 && y <= 400)){
        gigu.css({
            left : x,
            top : y
        });
    }else{
        alert("입력된 값이 범위를 벗어났습니다.")
    }
}
