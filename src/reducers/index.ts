import { configureStore, combineReducers } from '@reduxjs/toolkit';
import charactersStore from '#/reducers/slices/characters';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const storesCombined = {
    charactersStore
};

const reducers = combineReducers(storesCombined);

const rootReducer = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export default rootReducer;