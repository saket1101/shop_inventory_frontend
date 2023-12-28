
import {createApi,fetchBaseQuery } from "@reduxjs/toolkit/query"

export const api = createApi({ 
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "posts",
        }),
        getPost: builder.query({
            query: (id) => `posts/${id}`,
        }),
    }),
})
