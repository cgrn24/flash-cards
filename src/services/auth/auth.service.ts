import { baseApi } from '../base-api'

import { LoginArgs, RegisterArgs, User } from './auth.types'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<void, LoginArgs>({
      invalidatesTags: ['Me'],
      query: body => ({
        body,
        method: 'POST',
        url: `v1/auth/login`,
      }),
    }),
    me: builder.query<User, void>({
      providesTags: ['Me'],
      query: () => `v1/auth/me`,
    }),
    register: builder.mutation<void, RegisterArgs>({
      query: body => ({
        body,
        method: 'POST',
        url: `v1/auth/sign-up`,
      }),
    }),
  }),
})

export const { useLoginMutation, useMeQuery, useRegisterMutation } = authService
