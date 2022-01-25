/* 공통적으로 사용하는 자바스크립트 */
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

 /* 
* 올해 년도 구하고 지정
* new Date : 날짜 생성자
* */
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
