import { configureStore } from '@reduxjs/toolkit';
import pageReducer from '../features/page/pageSlice';
import searchTermReducer from '../features/searchTerm/searchTermSlice';
import { nytArticlesSearchApi } from '../services/nytimes-articles-search';

export const store = configureStore({
  reducer: {
    page: pageReducer,
    searchTerm: searchTermReducer,
    [nytArticlesSearchApi.reducerPath]: nytArticlesSearchApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(nytArticlesSearchApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
