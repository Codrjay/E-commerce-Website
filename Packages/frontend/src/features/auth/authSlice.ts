import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import apiClient from "/workspace/E-commerce-Website/Packages/frontend/src/services/apiClient.ts";

// Define your types
export interface User {
  id: string; // or number, depending on your use case
  username: string;
  email: string;
  role: string; // Adjust according to your needs
}

export interface UserResponse {
  token: string;
  userId: string; // or number, depending on your design
  username: string;
  email: string;
  role: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
}

// Initial state
const initialState: AuthState = {
  user: null,
  token: null,
};

// Create async thunks for API calls
export const loginUser = createAsyncThunk<UserResponse, { email: string; password: string }>(
  'auth/login',
  async (credentials) => {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data; // Adjust according to your API response structure
  }
);

export const logoutUser = createAsyncThunk<{ message: string }, void>(
  'auth/logout',
  async () => {
    const response = await apiClient.post('/auth/logout');
    return response.data; // Adjust according to your API response structure
  }
);

// Update registerUser to include role
export const registerUser = createAsyncThunk<UserResponse, { username: string; email: string; password: string; role: string }>(
  'auth/register',
  async (userInfo) => {
    const response = await apiClient.post('/auth/register', userInfo);
    return response.data; // Adjust according to your API response structure
  }
);

// Create the authSlice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    refreshAuthentication: (state) => {
      const isAuthenticated = sessionStorage.getItem("isAuthenticated");
      if (isAuthenticated === "true") {
        const userSession = sessionStorage.getItem("user");
        const response: UserResponse = JSON.parse(userSession as string);
        state.token = response.token;
        state.user = {
          username: response.username,
          id: response.userId,
          email: response.email,
          role: response.role,
        };
      }
    },
    setUser: (state, action: PayloadAction<UserResponse>) => {
      state.user = {
        id: action.payload.userId,
        username: action.payload.username,
        email: action.payload.email,
        role: action.payload.role,
      };
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = {
          id: payload.userId,
          username: payload.username,
          email: payload.email,
          role: payload.role,
        };
        sessionStorage.setItem("isAuthenticated", "true");
        sessionStorage.setItem("user", JSON.stringify(payload));
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = null;
        state.user = null;
        sessionStorage.removeItem("isAuthenticated");
        sessionStorage.removeItem("user");
      });
  },
});

// Export actions and the reducer
export const { refreshAuthentication, setUser } = authSlice.actions;
export default authSlice.reducer;

// Export hooks for using the API in components
export const useLoginMutation = () => {
  return async (credentials: { email: string; password: string }) => {
    const resultAction = await loginUser(credentials);
    if (loginUser.fulfilled.match(resultAction)) {
      return resultAction.payload;
    }
   
  };
};

export const useLogoutMutation = () => {
  return async () => {
    const resultAction = await logoutUser();
    if (logoutUser.fulfilled.match(resultAction)) {
      return resultAction.payload;
    }
    
  };
};

export const useRegisterMutation = () => {
  return async (userInfo: { username: string; email: string; password: string; role: string }) => {
    const resultAction = await registerUser(userInfo);
    if (registerUser.fulfilled.match(resultAction)) {
      return resultAction.payload;
    }
    
  };
};
