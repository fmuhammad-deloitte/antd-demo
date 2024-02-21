import { baseApi } from "@/query/base";
// import { HttpResponse } from "../types/response";
import { UserParams, UserResponse } from "../types/userResponse";

const usersService = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getUserList: builder.query<HttpResponse<UserResponse[]>, UserParams>({
    getUserList: builder.query<UserResponse[], UserParams>({
      query: (params) => ({
        url: '/users',
        method: 'GET',
        params
      })
    })
  })
})

export const { useGetUserListQuery } = usersService