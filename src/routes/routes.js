import { createBrowserRouter } from "react-router-dom";
import BecomeAHost from "../dashboardComponents/BecomeAHost";
import MyBookings from "../dashboardComponents/MyBookings";
import Home from "../home/Home";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import Login from "../pages/login/Login";
import Signup from "../pages/Signup/Signup";
import PrivetRoute from "./PrivetRoute";

export  const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path : '/dashboard',
        element : <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
        children : [
            {
                path : 'my-bookings',
                element : <PrivetRoute><MyBookings></MyBookings></PrivetRoute>
            },
            {
                path : 'become-host',
                element : <PrivetRoute><BecomeAHost></BecomeAHost></PrivetRoute>
            }
        ]
    },
    

])