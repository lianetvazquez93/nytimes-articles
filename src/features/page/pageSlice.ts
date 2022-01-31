import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface PageState {
  value: number;
}

const initialState: PageState = {
  value: 1,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;

export const selectPage = (state: RootState) => state.page.value;

export default pageSlice.reducer;
