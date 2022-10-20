import Reducers from '#/reducers/interfaces';
import React from 'react';
import styles from './styles.module.scss';
import Skeleton from 'react-loading-skeleton'

interface _Props {
    data: Reducers.Character
}

function SearchItem(props: _Props) {
    const { data: state } = props;
    return (
        <div className="col-md-4 col-sm-6">
            <div className={styles.SearchItem}>
                <a href={state.url} target='_blank' rel="noreferrer">
                    <div className={styles.ItemImage}>
                        <img src={state.image} className="img-responsive" alt={state.name} />
                    </div>
                    <div className={styles.ItemCaption}>
                        <h4 className={styles.CaptionTitle}>{state.name}</h4>
                    </div>
                </a>
                <div className={styles.ItemInfo}>
                    <div className="row">
                        <div className="col-md-12">
                            <span className={styles.Info}>Gênero: {state.gender}</span>
                            <span className={styles.Info}>Espécie: {state.species}</span>
                            <span className={styles.Info}>Status: {state.status}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SearchItem;
