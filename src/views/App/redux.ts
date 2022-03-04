import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

type ShowSheetBuilder = {
  [key: string]: boolean | null
  income: boolean | null,
  resources: boolean | null,
}

export interface AppState {
  showSheetBuilder: ShowSheetBuilder,
}

const initialState: AppState = {
  showSheetBuilder: { income: null, resources: null },
};

export const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setShowSheetBuilder: (state, action: PayloadAction<ShowSheetBuilder>) => {
      state.showSheetBuilder = action.payload;
    },
  },
});

export const { setShowSheetBuilder } = counterSlice.actions;

export const selectShowSheetBuilder = (state: RootState) => state.app.showSheetBuilder;

export default counterSlice.reducer;
