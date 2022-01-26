import { configureStore } from '@reduxjs/toolkit';
import listSlice from '../slice/slice';

export const store = configureStore({
  reducer: {
    list: listSlice,
  },
});
