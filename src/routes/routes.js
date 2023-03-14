import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import Login from "../pages/login/Login";
import Signup from "../pages/Signup/Signup";

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
        element : <Dashboard></Dashboard>
    }

])