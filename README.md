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

script link 를 윗쪽으로 두고싶을 경우 __window.onload()__를 사용하면 된다.
