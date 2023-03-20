import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../dashboardComponents/addProducts/AddProducts";
import AllProducts from "../dashboardComponents/allProducts/AllProducts";
import AllUsers from "../dashboardComponents/alluser/AllUsers";
import BecomeAHost from "../dashboardComponents/BecomeAHost";
import MyBookings from "../dashboardComponents/MyBookings";
import Home from "../home/Home";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import Login from "../pages/login/Login";
import Shop from "../pages/Shop/Shop";
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
            },
            {
                path : '/shop',
                element : <PrivetRoute><Shop></Shop></PrivetRoute>
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
            },
            {
                path: 'all-users',
                element : <AllUsers></AllUsers>
            },
            {
                path: 'all-products',
                element : <AllProducts></AllProducts>
            },
            {
                path: 'add-products',
                element : <AddProducts></AddProducts>
            }
        ]
    },
    

])