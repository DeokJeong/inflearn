$(document).ready(function(){

    function hi(){
        document.write("안녕하세요. 반갑습니다!");
    }
    //버튼이 클릭이 되면 hi함수가 실행된다. 즉 리턴값으로 함수가 이용된 꼴이다.
    $("#btnstart").click(hi);
});