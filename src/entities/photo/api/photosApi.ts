import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Photo } from '../model/types';

export const photosApi = createApi({
  reducerPath: 'photosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  tagTypes: ['Photo'],
  endpoints: (builder) => ({
    getPhotosByAlbumId: builder.query<Photo[], number>({
      query: (albumId) => `albums/${albumId}/photos`,
      providesTags: (result, error, albumId) => [
        { type: 'Photo', id: albumId }
      ],
    }),
  }),
});

export const { useGetPhotosByAlbumIdQuery } = photosApi;