import { baseApi } from '../base-api'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation({
        invalidatesTags: ['Auth'],
        query: params => ({
          body: params,
          method: 'POST',
          url: '',
        }),
      }),
      signUp: builder.mutation({
        query: params => {
          return {
            body: { ...params },
            method: 'POST',
            url: '',
          }
        },
      }),
    }
  },
})

export const { useLoginMutation, useSignUpMutation } = authService
