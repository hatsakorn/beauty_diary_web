import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage";
import PackagePage from "../pages/PackagePage";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Homepage />
    },
    {
        path:'/packages',
        element: <PackagePage/>
    }
])


export default function Router() {
    return  <RouterProvider router={router}/>
    
}
