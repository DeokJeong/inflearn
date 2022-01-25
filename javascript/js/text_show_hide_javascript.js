window.onload = function(){
    var show = document.getElementById("showText");
    var hide = document.getElementById("hideText");
    var text = document.getElementsByTagName("p")[0];

    show.onclick = function() {
        text.style.display = "block";
    };

    hide.onclick = function() {
        text.style.display = "none";
    };
};

    //Uncaught TypeError: Cannot set properties of null (setting 'onclick')