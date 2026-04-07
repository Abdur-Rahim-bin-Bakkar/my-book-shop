import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import BookDet from "../Pages/BookDet/BookDet";
import MYBooks from "../Pages/MYBooks/MYBooks";
import ReadCollection from "../Componensts/ReadCollection/ReadCollection";
import WishCollection from "../Componensts/WishCollection/WishCollection";
import Charts from "../Pages/Charts/Charts";
export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: 'details/:id',
                Component: BookDet,

            },
            {
                path: 'books',
                Component: MYBooks,
                children: [
                    {
                        index: true,
                        Component: ReadCollection
                    },
                    {
                        path: 'collection',
                        Component: WishCollection
                    }
                ]
            }, 
            {
                path: 'charts',
                Component: Charts
            }
        ]
    }
])