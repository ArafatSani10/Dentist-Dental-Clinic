import {
    createBrowserRouter,
} from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Dentist from "../Pages/Dentist/Dentist";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Appointment from "../Pages/Appointment/Appointment";
import About from "../Pages/About/About";
import GeneralDentist from "../Pages/Services/GeneralDentist/GeneralDentist";
import CosmeticDentist from "../Pages/Services/CosmeticDentist/CosmeticDentist";
import PediatricDentist from "../Pages/Services/PediatricDentist/PediatricDentist";
import RestorativeDentist from "../Pages/Services/RestorativeDentist/RestorativeDentist";


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
                path:'/about',
                element:<About></About>
            },

            {
                path:'/dentist',
                element:<Dentist></Dentist>
            },

            {
                path:'/services/General',
                element:<GeneralDentist></GeneralDentist>
            },

            {
                path:'/services/cosmetic',
                element:<CosmeticDentist></CosmeticDentist>
            },
            {
                path:'/services/pediatric',
                element:<PediatricDentist></PediatricDentist>
            },
            

            {
                path:'/services/restorative ',
                element:<RestorativeDentist></RestorativeDentist>
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