# Video_Slider

<img src="https://media.giphy.com/media/2SoNiY4UrF5B3AoQmO/giphy-downsized-large.gif" width=100%>

## 개요
#### 네비게이터를 onclick 할때 배경이 변하는 프로젝트

* OnlineTutorial 유튜브를 보고 구현함
  * https://www.youtube.com/watch?v=7gEJTwsH6kw&list=PLIMQzWccmG7a8D3JVSQpUyYruGPDlc1ZZ

#### 깃허브 페이지 빌드 링크
* https://dogguyman.github.io/Video_Slider/
---

## ...그런데 리펙토링 하고싶은데?

### 일단..
1. 또, 왜 position:absolute를 쓰는건가.. Flex 쓸줄 아는것 같은데
2. 화면 크기에 따라 반응형으로 만들어주자
2. 밑에 점으로 된 네비게이션을 추가하면 어떨까?

**flex를 활용하는게 어떨까?**

---

## 리펙토링 결과
### 1. Flex를 이용하고, 브라우저 크기에 반응하는 웹으로 수정

https://user-images.githubusercontent.com/61660260/159131048-eb71491c-7cda-4799-abd7-18ea50d701bb.mp4

### 2. 밑에 점으로 된 네이베이션을 추가했다.

https://user-images.githubusercontent.com/61660260/159131071-90dc7fa2-10e7-4ee2-827b-9edf30d35b1c.mp4

#### 알게된것
1. [자바스크립트의 Element의 Array는 String도, Number도 가능하다 : TS 팁](https://stackoverflow.com/questions/27537677/is-a-javascript-array-index-a-string-or-an-integer)
2. [이벤트 리스너 콜백 함수에 인자 전달하고싶다면.. 람다함수내부에 콜백할 함수 작성](https://blog.edit.kr/entry/addEventListener%EC%97%90-%ED%98%B8%EC%B6%9C-%ED%95%A8%EC%88%98%EC%97%90-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0-%EB%84%A3%EA%B8%B0)
