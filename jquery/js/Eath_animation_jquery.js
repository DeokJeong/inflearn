$(document).ready(function(){
    // 지구이미지를 찾아서 저장한다.
    var gigu = $("#gigu");
    //버튼에 이벤트 등록
    $("#btnStart").click(function(){
        gigu.animate({
            left : "500px"
        },3000)
    })
});