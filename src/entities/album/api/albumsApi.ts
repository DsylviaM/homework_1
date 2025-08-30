import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Album } from '../model/types';

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  tagTypes: ['Album'],
  endpoints: (builder) => ({
    getAlbums: builder.query<Album[], void>({
      query: () => 'albums',
      providesTags: ['Album'],
    }),
    getAlbumsByUserId: builder.query<Album[], number>({
      query: (userId) => `albums?userId=${userId}`,
      providesTags: (result, error, userId) => [
        { type: 'Album', id: userId }
      ],
    }),
    getAlbumById: builder.query<Album, number>({
      query: (id) => `albums/${id}`,
      providesTags: (result, error, id) => [{ type: 'Album', id }],
    }),
  }),
});

export const {
  useGetAlbumsQuery,
  useGetAlbumsByUserIdQuery,
  useGetAlbumByIdQuery,
} = albumsApi;