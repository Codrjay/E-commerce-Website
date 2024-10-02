// src/features/user/userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the User type directly inside the userSlice file
export interface User {
  id: string; // or number, depending on your use case
  username: string;
  email: string;
  role: string; // Adjust according to your needs
}

// Define the shape of the user slice state
interface UserState {
  users: User[];
}

// Initial state with type UserState
const initialState: UserState = {
  users: [],
};

// Create the user slice
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<string>) => { // assuming action.payload is a user ID
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});

// Export the actions and reducer
export const { setUsers, addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
