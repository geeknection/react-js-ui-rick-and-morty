import ReducerConsts from '../consts';
import Reducers from '../interfaces';

interface action {
    reducer: string,
    type: string,
    value: unknown
}
const initialState: Reducers.Character[] = [];

/**
 * Define um novo valor para todos os campos do state
 * @returns object
 */
const setAll = (state: Reducers.Character[], data: any): Reducers.Character[] => {
    const result = Object.assign({}, state);
    Object.keys(data).forEach((item) => (state.hasOwnProperty(item)) && (result[item as any] = data[item]));
    return result;

};
const charactersStore = (state: Reducers.Character[] = initialState, action: action): Reducers.Character[] => {
    if (action.reducer === ReducerConsts.store.characters) {
        if (action.type === 'all') return setAll(state, action.value);
        if (state.hasOwnProperty(action.type)) return { ...state, [action.type]: action.value };
    }

    return state;
};
export default charactersStore;