import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

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
  font-size: 62.5%
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
