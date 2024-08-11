import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResultItem } from '@/types';

interface SelectedItemsState {
    items: ResultItem[];
}

const initialState: SelectedItemsState = {
    items: [],
};

const selectedItemsSlice = createSlice({
    name: 'selectedItems',
    initialState,
    reducers: {
        selectItem(state, action: PayloadAction<ResultItem>) {
            state.items.push(action.payload);
        },
        unselectItem(state, action: PayloadAction<number>) {
            state.items = state.items.filter((item) => {
                const itemId = (item.url.match(/\/(\d+)\//) as string[])[1] as string;

                return Number(itemId) !== action.payload;
            });
        },
        unselectAllItems(state) {
            state.items = [];
        },
    },
});

export const { selectItem, unselectItem, unselectAllItems } = selectedItemsSlice.actions;
export default selectedItemsSlice.reducer;
