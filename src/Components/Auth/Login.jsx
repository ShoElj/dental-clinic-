import React, { useState } from 'react';
import { supabase } from '../../services/supabaseClient';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { error, user } = await supabase.auth.signIn({ email, password });
    if (error) {
      setError(error.message);
    } else {
      switch (user.role) {
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
          navigate('/');
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
