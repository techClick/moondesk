import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import viewsReducer from 'views/redux';
import navigationReducer from 'views/App/Navigation/redux';
import appReducer from 'views/App/redux';
import importColsReducer from 'views/App/ImportCols/redux';

export interface AppState {
  loggedIn: boolean,
  PDFFileSrc: any,
}

const initialState: AppState = {
  loggedIn: false,
  PDFFileSrc: null,
};

export const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
    setPDFFileSrc: (state, action: PayloadAction<any>) => {
      state.PDFFileSrc = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedIn, setPDFFileSrc } = counterSlice.actions;

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  reducer: {
    public: counterSlice.reducer,
    views: viewsReducer,
    navigation: navigationReducer,
    app: appReducer,
    importCols: importColsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const selectIsLoggedIn = (state: RootState) => state.public.loggedIn;

export const selectPDFFileSrc = (state: RootState) => state.public.PDFFileSrc;
