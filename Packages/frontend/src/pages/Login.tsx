import React, { useState } from 'react';
import { useLoginMutation } from '../services/api'; // Ensure the import points to your api
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { UserResponse } from '../features/products/types'; // Import the UserResponse type

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation(); // Use the hook here
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user: UserResponse = await login({ email, password }).unwrap(); // Ensure unwrapping the response
      dispatch(setUser(user));
      navigate('/dashboard');
    } catch (err) {
      console.error('Failed to log in', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
