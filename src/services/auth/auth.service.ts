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
    me: builder.query<User | null, void>({
      providesTags: ['Me'],
      query: () => `v1/auth/me`,
    }),
    updateMe: builder.mutation<User, Partial<Pick<User, 'avatar' | 'name'>>>({
      query: body => {
        return { url: `v1/auth/me`, method: 'PATCH', body }
      },
      invalidatesTags: ['Me'],
    }),
    register: builder.mutation<void, RegisterArgs>({
      query: body => ({
        body,
        method: 'POST',
        url: `v1/auth/sign-up`,
      }),
    }),
    logout: builder.mutation<void, void>({
      invalidatesTags: ['Me'],
      query: () => ({
        method: 'POST',
        url: `v1/auth/logout`,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          authService.util.updateQueryData('me', undefined, () => {
            return null
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }),
  }),
})

export const {
  useLoginMutation,
  useMeQuery,
  useRegisterMutation,
  useLogoutMutation,
  useUpdateMeMutation,
} = authService
