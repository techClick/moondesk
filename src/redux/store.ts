import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import viewsReducer from '../views/redux';

export interface AppState {
  loggedIn: boolean,
}

const initialState: AppState = {
  loggedIn: false,
};

export const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    loggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loggedIn } = counterSlice.actions;

export const store = configureStore({
  reducer: {
    app: counterSlice.reducer,
    views: viewsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const selectIsLoggedIn = (state: RootState) => state.app.loggedIn;
