import { mainApi } from "./mainApi";
import { USERS_URL } from "../../constant/ApiEndPoints";

export const userApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    reducerPath: "userApi",

    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/logout`,
        method: "GET",
      }),
    }),
  }),
})

export const {useRegisterMutation,useLoginMutation,useLogoutMutation} = userApi;