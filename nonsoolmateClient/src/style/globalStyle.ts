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
      font-family: SUIT-Regular;
      font-style: normal;
      font-weight: normal;
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
  }

}
`;
