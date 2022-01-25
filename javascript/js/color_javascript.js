        window.onload = function() {
            //먼저 아이디 선택자가 menu2를 찾는다.
            var menu2 = document.getElementById("menu2");
            // ul 태그의 하위요소인 li(태그)를 배열로 저장한다.
            var liArrays = menu2.getElementsByTagName("li");
            // li태그를 하나씩 접근해서 글자색을 변경하고 있다.
            for(var i = 0; i<liArrays.length; i++){
                var li = liArrays[i];
                li.style.color = "blue";
            }
        }