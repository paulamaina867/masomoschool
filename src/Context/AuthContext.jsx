import { jwtDecode } from 'jwt-decode';
import React, { createContext, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();


const AuthProvider = ({ children }) =>{
    // create the navigate hook
    const navigate = useNavigate();


    // We need to get the token and the user details from the local storage
    const [token, setToken] = useState(() => localStorage.getItem('token') || '');
    const [user, setUser] = useState(() => {
  const storedUser = localStorage.getItem('user');
  return storedUser ? JSON.parse(storedUser) : null;
});


    console.log("The Details of the stored user are: ", user)

    // Create a fucntion that handles logout
    const logout = useCallback(() =>{
        localStorage.clear();
        setToken('');
        setUser(null)
        navigate('/login')
    }, [navigate])

    // check the timeout for the token expiration
    useEffect(()=>{
        if(token){
            try{
                const decode = jwtDecode(token);

            // check whether the token is expired or not
            const isExpired = decode.exp * 1000 < Date.now()

            if(isExpired){
                // if the token is expired, invoke the logout function created earlier on
                logout()
            }
            }
            catch(error){
                // maybe the token format is incorrect. Just redirect to logout()
                logout()
            }
        }
    }, [token, logout]);

    return (
        // The setToken and setUser functions are needed for login to alert the changes in state
        <AuthContext.Provider value={{ token, user, logout, setToken, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}


// export both the Authcontext and the AuthProvider
export {AuthContext, AuthProvider}