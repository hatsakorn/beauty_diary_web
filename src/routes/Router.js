import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../layouts/Homepage";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Homepage />
    }
])

export default function Router() {
    return  <RouterProvider router={router}/>
    
}
