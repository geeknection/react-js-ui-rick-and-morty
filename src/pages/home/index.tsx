import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReducerConsts from '#/reducers/consts';
import Reducers from '#/reducers/interfaces';
import SearchSection from './components/SearchSection';
import SearchList from './components/SearchList';

function HomePage() {
    const characters = useSelector((state: any) => state.charactersStore as Reducers.InitialCharactersState);
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch({
                type: ReducerConsts.saga.types.FETCH_CHARACTERS_REQUESTED,
                payload: characters.info.next
            });
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    return (
        <React.Fragment>
            <SearchSection />
            <SearchList
                loading={characters.loading}
                characters={characters.results}
            />
        </React.Fragment>
    );
}
export default HomePage;
