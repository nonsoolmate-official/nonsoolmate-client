import { GlobalStyle } from "style/globalStyle";
import theme from "style/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <p>논술메이트 화이팅!</p>
    </ThemeProvider>
  );
}

export default App;
