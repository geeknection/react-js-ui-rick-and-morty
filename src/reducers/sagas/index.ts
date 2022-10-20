import { takeEvery } from 'redux-saga/effects';
import ReducerConsts from '../consts';
import { fetchCharacters } from './fetchs';

function* sagas() {
    yield takeEvery(ReducerConsts.saga.types.FETCH_CHARACTERS_REQUESTED, fetchCharacters);
}
export default sagas;
