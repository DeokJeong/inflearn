function localTest(){
    var value = "신은혁";
    document.write("1. value" + value); //{}내에서는 지역변수가 출력이 된다.
}
localTest();
//value값은 지역변수로 선언되어 있어서 함수가 종료되면 사라지므로 전역에서는 사용 할 수 없다.
document.write("2. value" + value);