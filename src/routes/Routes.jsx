import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SelectCart from "../Components/SelectCart/SelectCart";
import Home from "../Pages/Home/Home";
import Banner from "../Pages/Home/banner/Banner";
import ShopCart from "../Components/ShopCart/ShopCart";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Banner />
            },
            {
                path: "/shopCart",
                element: <ShopCart />
            },
         
        ]

    }
])