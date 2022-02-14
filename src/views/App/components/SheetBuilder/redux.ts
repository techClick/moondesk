import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

type ShowUploadPage = {
  [key: string]: boolean | null
  income: boolean | null,
  resources: boolean | null,
}
export interface AppState {
  showUploadPage: ShowUploadPage,
}

const initialState: AppState = {
  showUploadPage: { income: null, resources: null },
};

export const counterSlice = createSlice({
  name: 'sheetBuilder',
  initialState,
  reducers: {
    setShowUploadPage: (state, action: PayloadAction<ShowUploadPage>) => {
      state.showUploadPage = action.payload;
    },
  },
});

export const { setShowUploadPage } = counterSlice.actions;

export const selectShowUploadPage = (state: RootState) => state.sheetBuilder.showUploadPage;

export default counterSlice.reducer;
