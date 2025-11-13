import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SelectCart from "../Components/SelectCart/SelectCart";
import Banner from "../Pages/Home/banner/Banner";
import ShopCart from "../Components/ShopCart/ShopCart";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import Home from "../Pages/Home";
import Products from "../Pages/Home/Products/Products";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shopCart",
                element: <ShopCart />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/products",
                element: <Products />,
            },

        ]

    }
])