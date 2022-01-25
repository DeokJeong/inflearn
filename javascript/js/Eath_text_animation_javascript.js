window.onload = function() {
    var bg = document.getElementsByClassName("hello")[0];
    var text = document.getElementsByClassName("text")[0];

    function hello () {
        var rnd1 = Math.floor(Math.random() * 20);
        var rnd2 = Math.floor(Math.random() * 40);
        var rnd3 = Math.floor(Math.random() * 3) + 100;

        text.style.bottom = rnd1+ "px";
        text.style.left = rnd2 + "px";

        bg.style.backgroundSize = rnd3 + "%";
    }setInterval(hello, 80);
};