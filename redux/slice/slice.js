import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toDolist: [],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList: (state, action) => {
      state.origin = action.payload;
    },
  },
});

export const { setList } = listSlice.actions;

export const selectList = (state) => state.list.toDolist;

export default listSlice.reducer;
