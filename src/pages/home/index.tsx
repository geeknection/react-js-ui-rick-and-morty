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
        //apenas para conseguir visualizar o efeito de skeleton. Queria que fosse visualizado essa tratativa
        setTimeout(() => {
            dispatch({
                type: ReducerConsts.saga.types.FETCH_CHARACTERS_REQUESTED,
                payload: characters.info.next
            });
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    return (
        <div data-testid='homePageID'>
            <SearchSection />
            <SearchList
                loading={characters.loading}
                characters={characters.results}
            />
        </div>
    );
}
export default HomePage;
