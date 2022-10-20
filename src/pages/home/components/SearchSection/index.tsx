import ReducerConsts from '#/reducers/consts';
import { dispatchCharactersLoad } from '#/reducers/slices/characters';
import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';

function SearchSection() {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(dispatchCharactersLoad(true));
        //apenas para conseguir visualizar o efeito de skeleton. Queria que fosse visualizado essa tratativa
        setTimeout(() => {
            dispatch({
                type: ReducerConsts.saga.types.FETCH_CHARACTERS_REQUESTED,
                payload: `https://rickandmortyapi.com/api/character/?name=${searchValue}`
            });
        }, 1000);
    };
    const onChangeSearchValue = (e: React.FormEvent<HTMLInputElement>) => setSearchValue(e.currentTarget.value);
    return (
        <section className={styles.SearchSection} style={{
            backgroundImage: `url(${require('#/assets/bg-rick-morty.jpg')})`
        }}>
            <div className='container'>
                <div className={styles.SearchCaption}>
                    <div className='col-md-12 col-sm-12'>
                        <h1 className={styles.SearchTitle}>UI API Rick & Morty</h1>
                        <p className={styles.SearchSubtitle}>Pesquise por algum personagem</p>
                        <form className={`${styles.SearchForm} row`} onSubmit={onSubmit}>
                            <div className='col-md-10 col-sm-10 p-0'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Digite algo...'
                                    value={searchValue}
                                    onChange={onChangeSearchValue}
                                />
                            </div>
                            <div className='col-md-2 col-sm-2 p-0'>
                                <button type='submit' className='btn btn-default'>Pesquisar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default memo(SearchSection);
