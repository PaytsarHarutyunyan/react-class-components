import { createSlice } from '@reduxjs/toolkit';

interface CountriesState {
    list: string[];
}

const initialState: CountriesState = {
    list: ['USA', 'Canada', 'Australia', 'India'],
};

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
});

export default countriesSlice.reducer;
