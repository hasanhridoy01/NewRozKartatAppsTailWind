import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Game from "../pages/GameTopUpChange/Game/Game";
import Vouchers from "../pages/Vouchers/Vouchers";
import BillPay from "../pages/BillPay/BillPay/BillPay";
import Recharge from "../pages/Recharge/Recharge/Recharge";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/game",
        element: <Game />,
      },
      {
        path: '/vouchers',
        element: <Vouchers />
      },
      {
        path: '/billPay',
        element: <BillPay />
      },
      {
        path: '/mobile',
        element: <Recharge />
      }
    ],
  },
]);
