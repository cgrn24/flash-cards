import { baseApi } from '../base-api'

import { LoginArgs } from './auth.types'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<void, LoginArgs>({
      query: body => ({
        body,
        method: 'POST',
        url: `v1/auth/login`,
      }),
    }),
  }),
})

export const { useLoginMutation } = authService
