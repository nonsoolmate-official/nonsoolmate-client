import Error from "error";
import Main from "@pages/Main";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "layout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [{ path: "/example", element: <Main /> }],
  },
]);
