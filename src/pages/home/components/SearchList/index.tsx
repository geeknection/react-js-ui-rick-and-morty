import Reducers from '#/reducers/interfaces';
import React, { memo } from 'react';
import SearchItem from './SearchItem';
import SearchListSkeleton from './SearchListSkeleton';
import styles from './styles.module.scss';

interface _Props {
    characters: Reducers.Character[];
    loading: boolean;
}

function SearchList(props: _Props) {
    const { characters } = props;
    return (
        <section className={styles.SearchList}>
            <div className="container">
                <div className={styles.ListHeader}>
                    <h2 className={styles.Title}>Lista de <span>Personagens</span></h2>
                </div>
                <div className="row justify-center d-flex">
                    {props.loading ? (
                        <SearchListSkeleton />
                    ) : (
                        characters.map((item, key) => <SearchItem key={key} data={item} />))}
                </div>
            </div>
        </section>
    );
}
export default memo(SearchList);
