/* 
* 유투브 영상 플레이어
* */

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// 유투브를 제어해주는 자바스크립트 라이브러리가 자체적으로 이 함수를 찾기 떄문에 절대 이름을 바꾸면 안된다!!!
function onYouTubeIframeAPIReady() {    
  new YT.Player('player', {     // 'player'는 <div id="player"></div>을 의미
    videoId: 'An6LvWQuj_8',     // 유투브 영상 Url에 있는 videoId
    playerVars : {
      autoplay : true,          /* 자동재생 유무 */
      loop : true,              /* 반복재생 유무 */
      playlist : 'An6LvWQuj_8'  /* 반복재생할 영상 ID 목록 */
    },
    events : {
      onReady : function (event) {    // 영상이 준비되면
        event.target.mute();          // 음소거 처리하겠다.
      }
    }
  });
}