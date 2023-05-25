import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://95df-112-196-113-2.ngrok-free.app/',
  prepareHeaders: headers => {
    headers.append(
      'authorization',
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhOWI3MTY0MC04MjYxLTRmYmQtOTU4NS01ODY5Y2NmMGYxOTgiLCJzdWIiOiI0Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjg0OTI5NzI2LCJleHAiOjE2ODUwMTYxMjZ9.ve2QuddUSLZhnGLHiMle_HIUIw-Y3xAQq3n64oOctsw',
    );

    return headers;
  },
});
const baseQueryWithInterceptor = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
  }
  return result;
};
export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
