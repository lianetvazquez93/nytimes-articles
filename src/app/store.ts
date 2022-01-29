import { configureStore } from "@reduxjs/toolkit";
import pageReducer from '../features/page/pageSlice';
import searchTermReducer from "../features/searchTerm/searchTermSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    searchTerm: searchTermReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
