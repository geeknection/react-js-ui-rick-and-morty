import { createSlice } from '@reduxjs/toolkit';
import Reducers from '../interfaces';

const initialState: Reducers.InitialCharactersState = {
    info: {
        count: 0,
        next: 'https://rickandmortyapi.com/api/character',
        pages: 0,
        prev: null,
    },
    results: [],
    loading: true,
};

export const charactersSlice = createSlice({
    name: 'charactersStore',
    initialState,
    reducers: {
        setCharacters: (state, action) => {
            state.info = action.payload.info;
            state.results = action.payload.results;
        },
        setLoad: (state, action) => {
            state.loading = action.payload;
        }
    },
});

const dispatchCharacters = (data: Reducers.InitialCharactersState) => {
    return charactersSlice.actions.setCharacters(data);
};
const dispatchCharactersLoad = (data: boolean) => {
    return charactersSlice.actions.setLoad(data);
};

export default charactersSlice.reducer;
export {
    dispatchCharacters,
    dispatchCharactersLoad
};