/**
 * 검색
 */
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');    // searchEl 안에서 input 요소를 찾음

// search라는 클래스를 갖고 있는 요소를 클릭하면 input 요소에 포커스하라.
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

// input 요소가 포커스되면 search 클래스 요소에 focused라는 클래스 추가
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  // input 요소에 placeholder : 통합검색 설정
  searchInputEl.setAttribute('placeholder', '통합검색');    
});

// 포커스 해제됐을 때
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  // input 요소에 placeholder : 통합검색 설정
  searchInputEl.setAttribute('placeholder', '');    
});

/**
 * 배지
 */
const badgeEl = document.querySelector('header .badges');

// window 객체 : 브라우저 창을 의미
/* 화면을 스크롤할 때 (스크롤할때마다 해당함수가 실행되기 때문에 사이트 자체가 무거워짐 -> 화면 버벅임 현상 발생)
window.addEventListener('scroll', function () {
  console.log('scroll!!');
}); */
// _.throttle(함수, 시간) : 0.3초 단위(사용자 지정)로 부하를 줘서 함수가 연속으로 실행되는 것을 방지 (lodash.js)
window.addEventListener('scroll', _.throttle(function () {
  // window.scrollY : 화면이 몇 px 지점에 위치하는지 확인
  if(window.scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display = 'none'; > 이렇게 하면 부자연스러워 보일 수 있어서 gsap.js 사용
    // gsap.to(요소, 지속시간, 옵션)
    // badgeEl 요소를 0.6초 동안 opacity : 0(점점 투명해지는) + display : none 애니메이션이 처리
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'
    });
    
    // srollTo 버튼 보이기
    gsap.to('#to-top', .2, {
      x : 0
    });
  }else{
    // 배지 보이기
    // badgeEl.style.display = 'block';
    // badgeEl 요소를 0.6초 동안 opacity : 1(점점 나타나는) + display : block 애니메이션이 처리
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });
    
    // srollTo 버튼 숨기기
    gsap.to('#to-top', .2, {
      x : 100
    });
  }
}, 300));

/**
 * scrollTo 기능
 */
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo : 0      // 화면의 위치를 0px 지점으로 옮겨줌
  });
});


/**
 * 순서대로 나타나는 기능
 */
// 나타날 요소들(.fade-in) 찾기.
const fadeEls = document.querySelectorAll('.visual .fade-in')
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  // 각 요소들을 순서대로(delay) 보여지게 함!
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,    // 0.7, 1.4, 2.1, 2.8
    opacity: 1
  })
});

/* 
 * 공지사항 Swiper 
 * new : javascript에서 생성자
 * new Swiper(선택자, 옵션)
 * */
new Swiper('.notice-line .swiper-container', {
  direction : 'vertical',   /* 수직 swiper */
  autoplay : true,          /* 자동재생 */
  loop : true               /* 반복재생 */
});

/* 
* 프로모션 Swiper 
* */
new Swiper('.promotion .swiper-container', {
  //direction : 'horizontal', /* 수평 swiper : 기본값이므로 생략 */
  slidesPerView : 3,      /* 한번에 보여줄 슬라이드 개수 */
  spaceBetween : 10,      /* 슬라이드 사이 여백(10px) */
  centeredSlides : true,  /* 1번 슬라이드가 가운데 보이게 */
  loop : true,            /* 반복재생 */
  autoplay : {            /* 1초에 한번씩 자동 재생 */
    delay : 1000
  },
  pagination : {
    el : '.promotion .swiper-pagination', /* 페이지 번호 요소 선택자 */
    clickable : true    /* 사용자의 페이지 번호 요소 제어 여부 */
  },
  navigation : {        /* 이전, 다음 슬라이드 네비 제공 */
    prevEl : '.promotion .swiper-prev',    
    nextEl : '.promotion .swiper-next'
  }
});

/* 
* 어워즈 Swiper 
* */
new Swiper('.awards .swiper-container', {
  autoplay : true,        /* 자동재생 */
  loop : true,            /* 반복재생 */
  spaceBetween : 30,      /* 슬라이드 사이 여백(30px) */
  slidesPerView : 5,      /* 한번에 보여줄 슬라이드 개수 */
  pagination : {
    el : '.awards .swiper-pagination', /* 페이지 번호 요소 선택자 */
    clickable : true    /* 사용자의 페이지 번호 요소 제어 여부 */
  },
  navigation : {        /* 이전, 다음 슬라이드 네비 제공 */
    prevEl : '.awards .swiper-prev',    
    nextEl : '.awards .swiper-next'
  }
});


/* 
* 슬라이드 영역 토글
* */
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;       // false면 true, true면 false로
  
  if(isHidePromotion){
    // 숨김 처리
    promotionEl.classList.add('hide');
  }else{
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});

/* 
* 범위 랜덤 함수(소수점 2자리까지)
* */
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

/* 
* 반복 애니메이션
* */
function floatingObject(selector, delay, size){
  gsap.to(
    selector,               // 선택자 
    random(1.5, 2.5), {     // 애니메이션 동작 시간
      y : size,               // y축으로 size픽셀로 내려가기
      repeat : -1,            // 무한 반복
      yoyo : true,            // 재생된 애니메이션 뒤로가기 
      ease: Power1.easeInOut,
      delay : random(0, delay)
    });
  }
  floatingObject('.floating1', 1, 15);
  floatingObject('.floating1', .5, 15);
  floatingObject('.floating1', 1.5, 20);
  
/* 
* ScrollMagic
* - Scene : 특정한 요소를 감시하는 옵션을 지정해주는 메소드
* - setClassToggle : 클래스 토글 지정
* - addTo : ScrollMagic에서 컨트롤러 개념의 내용을 추가하기 위해 사용
* */
const spyEls = document.querySelectorAll('section.scroll-spy')    // section 태그 + scroll-spy 클래스 요소
spyEls.forEach(function (spyEl) {
  // 요소가 뷰포트의 0.8 지점에서 감시되면 'show'라는 클래스를 토글하라
  new ScrollMagic
    .Scene({
      triggerElement : spyEl,   // 보여짐 여부를 감시할 요소 지정
      triggerHook : .8          // 감시할 요소가 뷰포트(0(최상단)~1(최하단))의 어떤 지점에서 감시됨을 판단
    })
    .setClassToggle(spyEl, 'show')   
    .addTo(new ScrollMagic.Controller());
});

/* 
* 올해 년도 구하고 지정
* new Date : 날짜 생성자
* */
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

