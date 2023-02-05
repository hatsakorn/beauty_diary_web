import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import CoursePage from "../pages/CoursePage";
import Homepage from "../pages/HomePage";
import PackagePage from "../pages/PackagePage";
import WalletPage from "../pages/WalletPage"
import ReservePage from "../pages/ReservePage"
import LoginPage from '../pages/LoginPage'
import ThankPage from '../pages/ThankPage'
const router = createBrowserRouter([
  
  {
    path: "/",
    element: (
      <>
        <AuthLayout/>
      </>
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
        path: "/wallet",
        element: <WalletPage />,
      },
      {
        path: "/login",
        element: <LoginPage />
      },
        {
          path: "/courses",
          element: <CoursePage />,
        },
        {
          path: "/reserve",
          element: <ReservePage/>,
        },
        {
          path: "/thank",
          element: <ThankPage/>,
        },
  ],
}
  // {
  //   path: "/nofooter",
  // },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
