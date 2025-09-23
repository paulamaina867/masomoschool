import React, { useContext } from 'react'
import { AuthContext } from './AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({allowedRoles, children}) => {
    // get the user from the AuthContex
    const { user } = useContext(AuthContext)


    if(!user){
        // This user is not logged in
        return <Navigate to="/login" replace />
    }

    if(!allowedRoles.includes(user.role)){
        // Here we are verifying the role of the person logged in
        return <Navigate to="/notAuthorized" replace />
    }

    return children
  
};

export default ProtectedRoute;