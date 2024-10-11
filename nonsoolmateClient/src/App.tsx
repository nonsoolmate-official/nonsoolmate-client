import { RouterProvider } from "react-router-dom";
import { router } from "router";
import { GlobalStyle } from "style/globalStyle";
import theme from "style/theme";
import { ThemeProvider } from "styled-components";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider } from "contexts/ModalProvider";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
            <GlobalStyle />
          </ThemeProvider>
        </RecoilRoot>
      </ModalProvider>
    </QueryClientProvider>
  );
}

export default App;
