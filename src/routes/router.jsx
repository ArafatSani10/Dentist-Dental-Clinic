import {
    createBrowserRouter,
} from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Dentist from "../Pages/Dentist/Dentist";
import ContactUs from "../Pages/ContactUs/ContactUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path:'/dentist',
                element:<Dentist></Dentist>
            },

            {
                path:'/contact',
                element:<ContactUs></ContactUs>
            },
        ],
    },
]);

export default router;