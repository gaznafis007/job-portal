import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://interview.pencilwoodbd.org/api/',
        prepareHeaders: (headers) =>{
            const accessToken = sessionStorage.getItem('accessToken');
            headers.set("Content-type", "application/json");
            if(accessToken){
                headers.set('Authorization', `Bearer ${accessToken}`)
            }
            return headers
        }
    }),
    endpoints: (builder) =>({
        registerUser: builder.mutation({
            query: (userData) =>({
                url: 'auth/register/',
                method: 'POST',
                body: userData,
                headers: {
                    'Content-Type' : 'application/json'
                }
            }),
        }),
        loginUser: builder.mutation({
            query: (loginData) =>({
                url: '/auth/login/',
                method: 'POST',
                body: loginData
            }),
        }),
        refreshToken: builder.mutation({
            query: (refreshToken) =>({
                url: '/auth/refresh/',
                method: 'POST',
                body: {refresh: refreshToken}
            })
        }),
        getJobs: builder.query({
            query: () => '/job/'
        })
    })
})

export const {useGetJobsQuery, useRegisterUserMutation, useLoginUserMutation, useRefreshTokenMutation} = baseApi