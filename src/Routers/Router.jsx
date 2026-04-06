import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import BookDet from "../Pages/BookDet/BookDet";
export const router = createBrowserRouter([
    {
        path:'/',
        Component: MainLayout,
        children:[
            {
                index: true,
                Component: HomePage
            },
            {
                path:'details/:id',
                Component: BookDet,
                
            }
        ]
    }
])