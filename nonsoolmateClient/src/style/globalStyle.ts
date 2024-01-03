import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0 auto;
  font-size: 62.5%;
}

a {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
  font: inherit;
  background: none;
  border: none;
}
html {
  
  @font-face {
      font-family: 'SUIT-Regular';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
  }

}
`;
