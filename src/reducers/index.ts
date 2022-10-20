import { configureStore, combineReducers } from '@reduxjs/toolkit';
import charactersStore from '#/reducers/slices/characters';

export const storesCombined = {
    charactersStore
};

const reducers = combineReducers(storesCombined);

const rootReducer = configureStore({
    reducer: reducers,
});

export default rootReducer;