import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASEURL from "../../constant/BaseApi";
const baseQuery = fetchBaseQuery({
  baseUrl: BASEURL,
  credentials: "include",
  withCredentials: "true",
});

export const mainApi = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
