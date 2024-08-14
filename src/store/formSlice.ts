import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormData } from '@/types';

interface FormState {
    data: FormData[];
    lastSubmittedIndex: number | null;
}

const initialState: FormState = {
    data: [],
    lastSubmittedIndex: null,
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addFormData: (state, action: PayloadAction<FormData>) => {
            state.data.push(action.payload);
            state.lastSubmittedIndex = state.data.length - 1;
        },
        resetLastSubmittedIndex: (state) => {
            state.lastSubmittedIndex = null;
        },
    },
});

export const { addFormData, resetLastSubmittedIndex } = formSlice.actions;
export default formSlice.reducer;
