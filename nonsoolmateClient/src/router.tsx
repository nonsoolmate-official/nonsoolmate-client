import Error from "error";
import Main from "@pages/Main";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "layout/RootLayout";
import Home from "home";
import HomePractice from "home/components/HomePractice";
import HomeStudy from "home/components/HomeStudy";
import HomeTest from "home/components/HomeTest";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/example", element: <Main /> },
      {
        path: "/home",
        element: <Home />,
        children: [
          { path: "/home/practice", element: <HomePractice /> },
          { path: "/home/study", element: <HomeStudy /> },
          { path: "/home/test", element: <HomeTest /> },
        ],
      },
    ],
  },
]);
