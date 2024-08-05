import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// import { baseQueryWithReauth } from './base-query-with-reauth'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Projects', 'Auth', 'Tasks'],
})
