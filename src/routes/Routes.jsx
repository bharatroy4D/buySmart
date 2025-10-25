import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SelectCart from "../Components/SelectCart/SelectCart";
import Home from "../Pages/Home/Home";
import Banner from "../Pages/Home/banner/Banner";

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
                path: "/selectCart",
                element: <SelectCart />
            },
         
        ]

    }
])