import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import {  useNavigate, Link } from 'react-router-dom'

const RegisterComponent = () => {

    // Create hooks that enables you to capture different states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secretKey, setSecretKey] = useState('');

    // Define three additiona hooks to manage the states
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState('');

    // specify the url and also declare the useNavigate hook
    const url = 'https://kindergartenapi.onrender.com/api/auth'
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading('Please wait as Registration is in Progress...');


        try{
            const data = {name, email, password, secretKey};

            const res = await axios.post(url, data);

            console.log("Registration success", res.data)

            setLoading('')
            setSuccess('Registration successful! Redirecting to the Login Page...')

            alert('Registration successful! Redirecting to the Login Page...')
            navigate('/')
        }
        catch(err){
            setLoading('');
            setError("Registration Failed. Please try again")
        }
    }
  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
        <form onSubmit={handleSubmit} className='shadow card p-4 bg-light rounded'>
            <h1 className='text-center text-success'>Masomo School</h1>
            <h2 className='text-center mb-4 text-success'>Register</h2>

                {error ? <div className="alert alert-danger">{error}</div> : null}
                {success ? <div className="alert alert-success">{success}</div> : null}
                {loading ? <div className="alert alert-info">{loading}</div> : null}

            <input type="text"
            placeholder='Enter Full Name Here'
            className='form-control mb-3'
            onChange={(e) => setName(e.target.value)}
            value={name}
            required />

            {/* {name} */}

            <input type="email" 
            placeholder='Enter the Email Address Here'
            className='form-control mb-3'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required />

            {/* {email} */}

            <input type="password" 
            placeholder='Type password Here'
            className='form-control mb-3'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required />
            {/* {password} */}

            <input type="text"
            placeholder='Enter The Secret Key'
            className='form-control mb-3'
            onChange={(e) => setSecretKey(e.target.value)}
            value={secretKey}
            required />

            {/* {secretKey} */}

            <div className='d-grid mb-3'>
                <button type='submit' className='btn btn-success'>Register</button>
            </div>
            <div className="text-center">
                <p>Alredy have an Account? <Link to="/login">Login</Link></p>
                
                
            </div>
        </form>
    </div>
  )
}

export default RegisterComponent