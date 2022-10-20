import { configureStore, combineReducers } from '@reduxjs/toolkit';
import charactersStore from '#/reducers/stores/characters';
import Reducers from './interfaces';

export const storesCombined = {
    charactersStore
};

const reducers = combineReducers(storesCombined);

const rootReducer = configureStore({
    reducer: reducers,
});

export default rootReducer;

export const setStoreValue = ({ reducer, type, value }: Reducers.setStoreValue) => ({ reducer, type, value });