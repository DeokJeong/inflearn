# inflearn

javascript 및 jQuery를 인프런을 통해 공부하고 있습니다.



## 필기 

__var__ 은 전역변수

---

__let / const__ 는 블록 레벨 스코프로 

선언한 변수를 모두 코드 블록 (ex 함수[if(),for() 등등) 안에서 
변경한다고 가정 했을 경우 해당 블록 안에서만 변경한 내역으로 사용가능하다.

함수 밖에서 출력 할 경우 위 블록 안에서 변경된 값은 적용되지 않는다.

---


__swiper__ __사용 방법__

정해져 있는 class명 ( div 나 ul,li 등 상관없이 사용 가능)

1. 메인컨테이너 class = "swiper-container"
2. 보여지는 영역 class = "swiper-wrapper"
3. 메인 슬라이더 class = "swiper-slide"

세가지로 이루어져 있다.

페이징 버튼 처리를 원할경우
swiper-pagination 을 사용한다.

방향 버튼은
class = "swiper-button-prev"
class = "swiper-bttton-next"
로 사용 가능하다.

-

스크립트

    const swiper = new Swiper('클래스명' {
    // 기본

    // 방향 : vertical 수직, horizontal 수평  _ 설정을 안 할 경우 수평
    direction: 'horizontal',

    // 한번에 보여지는 페이지 숫자 ( 'auto' 가능 )
    slidesPerView: 1,

    // 페이지와 페이지 사이의 간격
    spaceBetween: 0,

    // 드레그 기능 : true 사용가능 false 사용불가
    debugger: true,

    // 마우스 휠기능 : true 사용가능 false 사용불가
    mousewheel: true,

    // 반복 기능 : true 사용가능 false 사용불가
    loop: true,

    // 선택된 슬라이드가 가운데  : true 사용가능 false 사용불가
    centeredSlides: true,

    // 페이지 전환효과 slidesPerView효과와 같이 사용 불가
    effect: 'fade',
    speed: 1000,

    // 자동 스크를링
    autoplay: {

    // 시간 1000 이 1초
    delay: 3500,
    disableOnInteraction: false,
    },

    // 페이징
    pagination: {

    // 페이지 기능
    el: '.swiper-pagination',

    // 클릭 가능여부
    clickable: true,
    },
    });

script link 를 윗쪽으로 두고싶을 경우 __window.onload()__ 를 사용하면 된다.


---

__함수의 분류__

1. 사용자 정의 함수  : 사용자가 필요한 기능을 직접 만든 함수
2. 자바스크립트 코어 함수 : 자바스크립트가 기본적으로 제공하는 함수 (ex: parseInt(), math.random()등)

__함수의 종류__

1. 일반함수 : 가장 일반적인 함수

2. 중첩함수 : 함수 안에 함수가 있는 경우 중첩되었다라고 하며 이 때, 함수 안에 있는 함수를 __중첩함수__ 라고 한다.

3. 콜백함수 : 함수 실행결과 값을 리턴이 아닌 매개변수로 넘어온 함수를 호출해서 넘겨주는 방식을 __콜백__ 이라고 하며 이 때, 매개변수로 넘어온 함수를 __콜백함수__ 라고 한다.

4. 클로저함수 : 일반적인 함수의 경우 함수 호출에 의해 함수 내부의 실행구문을 모두 실행하게 되면 함수내부에서 만든 지역변수가 자동으로 사라지지만 
              ___어떤 경우에는 사라지지 않고 남는 경우가 존재하는데 이 현상을___ __클로저__ 라고 하며 이 현상을 일으키는 함수를 __클로저함수__ 라고 한다.

