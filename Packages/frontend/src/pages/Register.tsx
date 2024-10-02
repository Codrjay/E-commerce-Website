// src/components/Register.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser, setUser } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '/workspace/E-commerce-Website/Packages/frontend/src/store/store.ts'; // Adjust the import according to your project structure

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('shopper');
  const dispatch = useDispatch<AppDispatch>(); // Specify AppDispatch here
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(registerUser({ username: name, email, password, role })).unwrap();
      dispatch(setUser(resultAction)); // Assuming this returns the user data
      navigate('/dashboard');
    } catch (err) {
      console.error('Failed to register', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
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
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="shopper">Shopper</option>
        <option value="seller">Seller</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
