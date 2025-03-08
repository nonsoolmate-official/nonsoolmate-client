import Admin from "@pages/admin/login";
import Correction from "@pages/answer/correction";
import Explanation from "@pages/answer/explanation";
import Error from "@pages/error";
import Mobile from "@pages/error/components/Mobile";
import Home from "@pages/home";
import HomePractice from "@pages/home/homePractice/HomePractice";
import HomeStudy from "@pages/home/homeStudy/HomeStudy";
import HomeTest from "@pages/home/homeTest/HomeTest";
import Landing from "@pages/landing";
import Loading from "@pages/loading";
import Membership from "@pages/membership";
import MyPage from "@pages/mypage";
import Payment from "@pages/payment";
import Fail from "@pages/payment/components/Fail";
import PaymentFail from "@pages/payment/components/singlePayment/PaymentFail";
import PaymentSuccess from "@pages/payment/components/singlePayment/PaymentSuccess";
import Success from "@pages/payment/components/Success";
import Signup from "@pages/signup";
import RedirectPage from "@pages/socialLogin";
import Interceptors from "@pages/socialLogin/components/Interceptors";
import TakeTest from "@pages/takeTest";
import { createBrowserRouter } from "react-router-dom";
import Assign from "@pages/assign";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Interceptors />,
    errorElement: <Loading />,

    children: [
      { path: "", element: <Landing /> },
      {
        path: "/home",
        element: <Home />,
        children: [
          { path: "/home/practice", element: <HomePractice /> },
          { path: "/home/study", element: <HomeStudy /> },
          {
            path: "/home/test",
            element: <HomeTest />,
          },
        ],
      },
      { path: "/takeTest", element: <TakeTest /> },
      { path: "/correction", element: <Correction /> },
      { path: "/explanation", element: <Explanation /> },
      { path: "/signup", element: <Signup /> },
      { path: "/membership", element: <Membership /> },
      { path: "/login/oauth2/code/naver", element: <RedirectPage /> },
      { path: "/loading", element: <Loading /> },
      { path: "/error", element: <Error /> },
      { path: "/mypage", element: <MyPage /> },
      { path: "/payment", element: <Payment /> },
      { path: "/fail", element: <Fail /> },
      { path: "/success", element: <Success /> },
      { path: "/single-payment/fail", element: <PaymentFail /> },
      { path: "/single-payment/success", element: <PaymentSuccess /> },
      { path: "/mobile/error", element: <Mobile /> },
      { path: "/admin", element: <Admin /> },
      { path: "/assign", element: <Assign /> },
    ],
  },
]);
