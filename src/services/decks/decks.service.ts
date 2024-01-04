import { baseApi } from '../base-api'

import { DecksResponse, GetDecksParams } from './decks.types'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<DecksResponse, GetDecksParams | void>({
        query: params => {
          return {
            url: `v1/decks`,
            params: params ?? {},
          }
        },
        providesTags: ['Decks'],
      }),
    }
  },
})

export const { useGetDecksQuery } = decksService
