import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface PageState {
    value: number;
}

const initialState: PageState = {
    value: 0,
};

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        increment: (state: any) => {
            state.value += 1
        },
        decrement: (state: any) => {
            state.value -= 1
        }
    }
});

export const {increment, decrement} = pageSlice.actions;

export const selectPage = (state: RootState) => state.page.value;

export default pageSlice.reducer;
