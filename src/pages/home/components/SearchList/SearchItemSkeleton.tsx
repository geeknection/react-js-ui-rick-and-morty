import React from 'react';
import styles from './styles.module.scss';
import Skeleton from 'react-loading-skeleton';

function SearchItemSkeleton() {
    return (
        <div className="col-md-4 col-sm-6" data-testid="SearchItemSkeleton">
            <div className={styles.SearchItem}>
                <a href={'#'} target='_blank' rel="noreferrer">
                    <div className={styles.ItemImage}>
                        <Skeleton width={300} height={300} />
                    </div>
                    <div className={styles.ItemCaption}>
                        <Skeleton />
                    </div>
                </a>
                <div className={styles.ItemInfo}>
                    <div className="row">
                        <div className="col-md-12">
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SearchItemSkeleton;
