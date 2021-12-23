import { createSlice } from '@reduxjs/toolkit';
import { ComicState } from '../../types';

const initialState: ComicState = {
  comics: [],
  isLoading: false,
}

export const comicSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {
    addData: (state, data: any) => {
      state.comics = data.payload;
    },
    setLoading: (state, data: any) => {
      state.isLoading = data.payload
    }
  },
})

export const { addData, setLoading } = comicSlice.actions;

export default comicSlice.reducer;