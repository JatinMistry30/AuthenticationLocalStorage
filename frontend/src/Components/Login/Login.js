import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { gsap } from 'gsap';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      '.login-form',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
    gsap.to('.background', {
      backgroundPosition: '200% center',
      duration: 10,
      repeat: -1,
      ease: 'linear',
    });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        { email, password },
        { withCredentials: true }
      );
  
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        toast.success('Login successful!');
        navigate('/profile'); // Navigate after successful login
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Login failed';
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };
  

  return (
    <div className="background">
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <img 
            src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" 
            alt="Logo" 
            className="logo"
          />
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button type="submit">Login</button>
          <p>Don't have an account? <a href="/register">Register</a></p>
        </form>
      </div>
    </div>
  );
}

export default Login;