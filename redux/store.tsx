import { configureStore } from '@reduxjs/toolkit';
import albumSlice from './album/albumSlice';
import { albumApi } from './apis/albumAPI';

export const store = configureStore({
  reducer: {
    album: albumSlice,
    [albumApi.reducerPath]: albumApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
