import { createSlice } from '@reduxjs/toolkit';
import { ComicState } from '../../types';

const initialState: ComicState = {
  comics: [],
}

export const comicSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {
    addData: (state, data: any) => {
      state.comics = data.payload;
    },
    filterData: (state, data: any) => {
      
    },
    clearFilter: (state) => {
      state.comics = []
    },
  },
})

export const { addData, filterData, clearFilter } = comicSlice.actions;

export default comicSlice.reducer;