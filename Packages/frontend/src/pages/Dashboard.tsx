import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

// Define User and AuthState types
interface User {
  id: string; // or number, depending on your use case
  username: string;
  email: string;
  role: string; // Adjust according to your needs
}

interface AuthState {
  user: User | null;
  token: string | null;
}

// Define your auth slice directly
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  } as AuthState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      sessionStorage.removeItem("isAuthenticated");
      sessionStorage.removeItem("user");
    },
  },
});

const { actions, reducer: authReducer } = authSlice;

// Create a Redux store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Define the RootState type
type RootState = ReturnType<typeof store.getState>;

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(actions.logout());
    // Add your navigation logic here if needed
  };

  return (
    <div>
      <h1>Welcome, {user?.username}</h1>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
