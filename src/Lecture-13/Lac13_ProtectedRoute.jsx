import React from 'react'
import { Navigate } from 'react-router-dom';

function Lac13_ProtectedRoute({ children }) {


    // const isLogin = true;

    // if (isLogin === false) {
    //     return <Navigate to={"/login"} />
    // }
    
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" />;
    }
    return children;

}

export default Lac13_ProtectedRoute