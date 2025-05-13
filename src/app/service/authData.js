import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { use } from "react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URI}` }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: "api/auth/register",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newUser,
      }),
    }),

    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "api/auth/login",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: credentials,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "api/auth/forgot-password",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: email,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: `api/auth/reset-password`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:  data,
      }),
    }),

  }),
});

export const { 
  useRegisterUserMutation, 
  useLoginUserMutation ,
  useForgotPasswordMutation,
  useResetPasswordMutation
} = authApi;
