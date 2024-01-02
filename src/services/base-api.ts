import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from './base-query-with-refetch'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['Me', 'Decks'],
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
})
