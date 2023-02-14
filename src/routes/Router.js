import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import CoursePage from "../pages/CoursePage";
import Homepage from "../pages/HomePage";
import PackagePage from "../pages/PackagePage";
import WalletPage from "../pages/WalletPage"
import ReservePage from "../pages/ReservePage"
import LoginPage from '../pages/LoginPage'
import ThankPage from '../pages/ThankPage'
import RedirectAuthenticate from '../features/auth/RedirectAuthenticate'
import ProtectedRoute from '../features/auth/ProtectedRoute'
import RHistoryPage from "../pages/RHistoryPage";
import TransactionPage from "../pages/TransactionPage";
const router = createBrowserRouter([
  
  {
    path: "/",
    element: (
        <AuthLayout/>
    ),
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/packages",
        element: <PackagePage />,
      },
      {
        path: "/courses",
        element:<CoursePage/>
      },
      {
        path: "/login",
        element: 
        <RedirectAuthenticate>
        <LoginPage />
        </RedirectAuthenticate>
      },{
        element:
        <ProtectedRoute>
        <Outlet/>
        </ProtectedRoute>,
        children:[
          {
            path: "/transaction",
            element: <TransactionPage />,
          },
          {
            path: "/wallet",
            element: <WalletPage />,
          },
        {
          path: "/hReservation",
          element: <RHistoryPage />,
        },
        {
          path: "/reserve",
          element: <ReservePage/>,
        },
        {
          path: "/thank",
          element: <ThankPage/>,
        },
      ]}
  ],
}
  // {
  //   path: "/nofooter",
  // },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
