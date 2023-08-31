import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAlbum, INewAlbum } from '../../types/album';

export const albumApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/` }),
  reducerPath: 'albumApi',
  tagTypes: ['albums'],
  endpoints: (build) => ({
    getAlbums: build.query<IAlbum[], { token: string }>({
      query: ({ token }) => {
        return {
          url: '/v1/albums',
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      transformResponse: (response: { data: IAlbum[] }) => {
        return response.data;
      },
      providesTags: ['albums'],
    }),
    createAlbum: build.mutation<IAlbum, { token: string; album: INewAlbum }>({
      query: ({ token, album }) => {
        return {
          url: '/v1/albums',
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      transformResponse: (response: { data: IAlbum }) => {
        return response.data;
      },
      invalidatesTags: ['albums'],
    }),
  }),
});

export const { useGetAlbumsQuery, useCreateAlbumMutation } = albumApi;
