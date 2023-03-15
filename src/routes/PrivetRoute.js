import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Speener from '../component/Speener';
import { AuthContext } from '../context/ContextAuth';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <Speener></Speener>
    }
    if(user && user.uid){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;