import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IAlbum } from '../../types/album';
import { albumApi } from '../apis/albumAPI';

export interface AlbumState {
  albums: IAlbum[];
}

const initialState: AlbumState = {
  albums: [],
};

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(albumApi.endpoints.searchAlbums.matchFulfilled, (state, action: PayloadAction<IAlbum[]>) => {
      state.albums = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = albumSlice.actions;

export default albumSlice.reducer;
