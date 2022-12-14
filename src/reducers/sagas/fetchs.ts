import { call, put } from 'redux-saga/effects';
import ReducerConsts from '#/reducers/consts';
import axios from 'axios';
import Reducers from '../interfaces';
import { dispatchCharacters, dispatchCharactersLoad } from '../slices/characters';

export function* fetchCharacters(action: Reducers.Action) {
    try {
        const getCharacters = () => axios.get(action.payload).then((resp) => resp.data);
        const response: Reducers.InitialCharactersState = yield call(getCharacters);
        if (response) {
            yield put(dispatchCharacters(response));
        }
        yield put(dispatchCharactersLoad(false));
    } catch (error) {
        yield put(dispatchCharactersLoad(false));
        yield put({
            type: ReducerConsts.saga.types.FETCH_CHARACTERS_FAILED,
            message: error instanceof Error ? error.message : 'Fail when try fetch characters'
        });
    }
}