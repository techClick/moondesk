import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { ShowPopup } from 'types/types';

export interface AppState {
  showPopup: ShowPopup,
}

const initialState: AppState = {
  showPopup: { income: null, resources: null },
};

export const counterSlice = createSlice({
  name: 'sheetBuilder',
  initialState,
  reducers: {
    setShowPopup: (state, action: PayloadAction<ShowPopup>) => {
      state.showPopup = action.payload;
    },
  },
});

export const { setShowPopup } = counterSlice.actions;

export const selectShowPopup = (state: RootState) => state.sheetBuilder.showPopup;

export default counterSlice.reducer;
