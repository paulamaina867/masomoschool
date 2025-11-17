import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const RegisterComponent = () => {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secretKey, setSecretKey] = useState('');

  // App state
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  const navigate = useNavigate();
  const url = 'https://kindergartenschool.onrender.com/api/auth';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    setLoadingMessage('Please wait as registration is in progress...');

    try {
      const data = { name, email, password, secretKey };

      // Axios POST with explicit headers
      const res = await axios.post(url, data, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Full API Response:", res.data); // Debugging: check the response

      // You can adjust based on actual API response
      setSuccess('Registration successful! Redirecting to Login Page...');
      alert('Registration successful! Redirecting to Login Page...');

      navigate('/login');
    } catch (err) {
      console.error("Registration error:", err); // Debugging: log the error
      if (err.response) {
        // If backend returned an error status
        setError(err.response.data.message || `Server Error: ${err.response.status}`);
      } else {
        // Network or CORS error
        setError('Network or CORS error. Check console.');
      }
    } finally {
      setLoading(false);
      setLoadingMessage('');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <form onSubmit={handleSubmit} className="shadow card p-4 bg-light rounded">
        <h1 className="text-center text-success">Masomo School</h1>
        <h2 className="text-center mb-4 text-success">Register</h2>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        {loading && <div className="alert alert-info">{loadingMessage}</div>}

        <input
          type="text"
          placeholder="Enter Full Name Here"
          className="form-control mb-3"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />

        <input
          type="email"
          placeholder="Enter the Email Address Here"
          className="form-control mb-3"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />

        <input
          type="password"
          placeholder="Type password Here"
          className="form-control mb-3"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <input
          type="text"
          placeholder="Enter The Secret Key"
          className="form-control mb-3"
          onChange={(e) => setSecretKey(e.target.value)}
          value={secretKey}
          required
        />

        <div className="d-grid mb-3">
          <button type="submit" className="btn btn-success" disabled={loading}>
            Register
          </button>
        </div>

        <div className="text-center">
          <p>
            Already have an Account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterComponent;
