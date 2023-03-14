import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";

export  const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            }
        ]
    },
    {
        path : '/dashboard',
        element : <Dashboard></Dashboard>
    }

])