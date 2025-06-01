import {
    createBrowserRouter,
} from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Dentist from "../Pages/Dentist/Dentist";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Appointment from "../Pages/Appointment/Appointment";

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

            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
        ],
    },
]);

export default router;