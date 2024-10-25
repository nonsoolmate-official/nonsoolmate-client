import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  font-size: 62.5%;
  -ms-overflow-style: none; /* 인터넷 익스플로러  스크롤바 숨김 */
  scrollbar-width: none; /* 파이어폭스 스크롤바 숨김 */
  scroll-behavior: smooth;
}

#root::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 스크롤바 숨김 */
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

button {
  border: none;
  background: none;
  font: inherit;
  cursor: pointer;
}

html {
  @font-face {
      font-family: SUIT;
      font-style: normal;
      font-weight: normal;
      src: url('https://cdn.jsdelivr.net/gh/sun-typeface/SUIT/fonts/static/woff2/SUIT.css') format('woff2');
  }
}
`;
