import React, { memo } from 'react';
import SearchItemSkeleton from './SearchItemSkeleton';
function SearchListSkeleton() {
    return (
        <React.Fragment>
            <SearchItemSkeleton />
            <SearchItemSkeleton />
            <SearchItemSkeleton />
        </React.Fragment>
    );
}
export default memo(SearchListSkeleton);
