import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // App state
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const url = "https://kindergartenschool.onrender.com/api/auth/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setLoadingMessage('Logging in... Please wait.');

    try {
      const data = { email, password };

      // Axios POST with explicit headers
      const res = await axios.post(url, data, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Full API Response:", res.data); // Debugging: check the response

      // Adjust destructuring based on actual response structure
      const { token, user } = res.data;

      if (!token || !user) {
        throw new Error("Invalid response from server");
      }

      console.log("User object:", user); // Debugging: check user and role
      console.log("Token:", token);

      // Store in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Navigate based on role
      switch (user.role) {
        case 'admin':
          navigate('/admin-dashboard');
          break;
        case 'teacher':
          navigate('/teacher-dashboard');
          break;
        case 'parent':
          navigate('/parent-dashboard');
          break;
        default:
          console.warn("Unknown role, redirecting to home");
          navigate('/');
      }
    } catch (err) {
      console.error("Login error:", err); // Debugging: log the error
      if (err.response && err.response.status === 401) {
        setError(err.response.data.message || "Invalid credentials");
      } else if (err.response) {
        setError(`Server Error: ${err.response.status}`);
      } else {
        setError("Network or CORS error. Check console.");
      }
    } finally {
      setLoading(false);
      setLoadingMessage('');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <form onSubmit={handleSubmit} className="card shadow p-4 bg-light rounded">
        <h2 className="text-center text-success">Masomo School</h2>
        <h3 className="text-center text-success">Login</h3>

        {loading && <div className="alert alert-info">{loadingMessage}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          className="form-control"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          className="form-control"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <br />

        <div className="d-grid mb-3">
          <button className="btn btn-success" type="submit" disabled={loading}>
            Login
          </button>
        </div>

        <div className="text-center">
          <p>
            Don't have an Account? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
