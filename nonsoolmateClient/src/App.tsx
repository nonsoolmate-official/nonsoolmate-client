import { GlobalStyle } from "style/globalStyle";
import theme from "style/theme";
import { ThemeProvider } from "styled-components";
import { router } from "router";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
