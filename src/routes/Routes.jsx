import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
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
                path: "/",
                element: <Banner />
            },
            {
                path: "/",
                element: <Banner />
            },
        ]

    }
])