window.onload = function(){
var btnStart = document.getElementById("btnStart");

    btnStart.addEventListener('click',function(e){
        e.preventDefault;
        document.getElementById("gigu").animate({
            left : "500px"
        },3000);
    });
};



// TypeError: Cannot set properties of null (setting 'onclick')

// SyntaxError: missing ) after argument list

// TypeError: Cannot read properties of null (reading 'addEventListener')

// TypeError: Cannot read properties of null (reading 'addEventListener')

// ReferenceError: click is not defined

