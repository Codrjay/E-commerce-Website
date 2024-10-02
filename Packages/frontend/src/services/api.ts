// src/features/auth/api.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserResponse, LoginRequest, RegisterRequest, LogOutResponse } from '../features/products/types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'baseUrl: 'https://codrjay-ecommercewebsit-p9gu1blo7rr.ws-eu116.gitpod.io:5000/',
' }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<UserResponse, RegisterRequest>({
      query: (userInfo) => ({
        url: 'auth/register',
        method: 'POST',
        body: userInfo,
      }),
    }),
    logout: builder.mutation<LogOutResponse, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = authApi;
