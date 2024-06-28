import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import { supabase } from '../../services/supabaseClient.mjs';
import logo from '../../assets/logo.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const { data } = await axios.post('http://localhost:5000/login', { username, password });

      console.log('Login response:', data);
      // Handle successful login
           const { role } = data; // Assuming data contains role after successful login

      switch (role) {
        case 'Super Admin':
          navigate('/superadmin');
          break;
        case 'Doctor':
          navigate('/doctor');
          break;
        case 'Accounts':
          navigate('/accounts');
          break;
        case 'Dietitian':
          navigate('/dietitian');
          break;
        default:
          // Handle unknown role or default redirection
          navigate('/');
          break;
      }
    } catch (error) {
      setError('Login failed: ' + error.message);
    }
  };

  return (
   <div>
      <img src={logo} alt="Logo" style={{ width: '100px', height: '100px', marginBottom: '20px' }} />
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
