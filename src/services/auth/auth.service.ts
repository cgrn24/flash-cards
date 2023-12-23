import { baseApi } from '../base-api'

import { LoginArgs, User } from './auth.types'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<void, LoginArgs>({
      query: body => ({
        body,
        method: 'POST',
        url: `v1/auth/login`,
      }),
    }),
    me: builder.query<User, void>({
      query: () => `v1/auth/me`,
    }),
  }),
})

export const { useLoginMutation, useMeQuery } = authService
