import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  tagTypes: ['Comment'],
  endpoints: (builder) => ({
    getPostComments: builder.query<Comment[], number>({
      query: (postId) => `posts/${postId}/comments`,
      providesTags: (result, error, postId) => [
        { type: 'Comment', id: postId }
      ],
    }),
  }),
});

export const { useGetPostCommentsQuery } = commentsApi;