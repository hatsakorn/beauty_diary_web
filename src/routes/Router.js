import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "../layouts/Footer";
import Homepage from "../pages/Homepage";
import PackagePage from "../pages/PackagePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet />
        <Footer />
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
    ],
  },
  {
    path: "/nofooter",
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
