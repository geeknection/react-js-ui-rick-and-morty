const ReducerConsts = {
    store: {
        characters: 'store.characters'
    },
    saga: {
        types: {
            FETCH_CHARACTERS_REQUESTED: 'saga.types.FETCH_CHARACTERS_REQUESTED',
            FETCH_CHARACTERS_SUCCEEDED: 'saga.types.FETCH_CHARACTERS_SUCCEEDED',
            FETCH_CHARACTERS_FAILED: 'saga.types.FETCH_CHARACTERS_FAILED'
        }
    }
};
export default ReducerConsts;
