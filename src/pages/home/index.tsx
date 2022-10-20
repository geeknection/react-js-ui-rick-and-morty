import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReducerConsts from '#/reducers/consts';
import Reducers from '#/reducers/interfaces';

function HomePage() {
    const characters = useSelector((state: any) => state.charactersStore as Reducers.InitialCharactersState);
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch({
            type: ReducerConsts.saga.types.FETCH_CHARACTERS_REQUESTED,
            payload: characters.info.next
        });
    };
    return (
        <>
            total: {characters.results.length}
            <button onClick={onClick} type='button' className='btn btn-primary'>Buscar</button>
        </>
    );
}
export default HomePage;
