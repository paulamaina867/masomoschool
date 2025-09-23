import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginComponent = () => {
    // Define the hooks to help you capture the different states
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    // Define the three hooks to capture the state of the application
    const[loading, setLoading] = useState('');
    const[error, setError] = useState('');
    const navigate = useNavigate();

    // define the url for the api endpoint
    const url = "https://kindergartenapi.onrender.com/api/auth/login"

    // define a function to handle the submit action
    const handleSubmit = async (e)=>{
        // prevent your site from reloading
        e.preventDefault()
        setError('')
        setLoading("Logging in Please wait...")

        try{
            const data = {email, password};

            const res = await axios.post(url, data);

            const {token, user} = res.data

            // console.log("The token is: ", token)
            // console.log("The user details are: ", user)

            // use the localstorage to store the two details
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user))

            // based on the user role erdirect a perso a given dashboard
            if(user.role === 'admin'){
                navigate('/admin-dashboard')
            } else if (user.role ==='teacher'){
                navigate('/teacher-dashboard')
            } else if (user.role === 'parent'){
                navigate('/parent-dashboard')
            } else{
                navigate('/');
            }
        }
        catch(error){
            setLoading('');
            if(error.response && error.response.status === 401){
                setError(error.response.data.message)
            } else{
                setError("Network Or server Error")
            }
        }
    }

  return (
    <div className="container mt-5" style={{ maxWidth : '500px' }}>
        <form onSubmit={handleSubmit} className="card shadow p-4 bg-light rounded">
            <h2 className="text-center text-success">Masomo School</h2>
            <h3 className="text-center text-success">Login</h3>

            {/* bind the messages */}
             {loading ? <div className="alert alert-info">{loading}</div> : null}
            {error ? <div className="alert alert-danger">{error}</div> : null}
            

            <label >Email: </label> 
            <input type="email" 
            className='form-control' 
            placeholder='Enter the email Address Here...'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required /> <br />

            {/* {email} */}

            <label >Password:</label>
            <input type="password" 
            placeholder="Enter the Password Here..." 
            className='form-control'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required/> <br />

            {/* {password} */}

            <div className="d-grid mb-3">
                <button className="btn btn-success" type='submit'>Login</button>
            </div>
            <div className="text-center">
                <p>
                    Don't have an Account? 
                    <Link to='/register'>Register</Link>
                </p>
            </div>
        </form>
    </div>
  )
}

export default LoginComponent