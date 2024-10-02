import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import productReducer from '../features/products/productSlice';
import userReducer from '../features/users/userSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  user: userReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
