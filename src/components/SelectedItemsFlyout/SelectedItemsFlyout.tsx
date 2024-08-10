import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { unselectAllItems } from '@/store/selectedItemsSlice';
import { saveAs } from 'file-saver';
import { ResultItem } from '@/types';
import styles from '../../styles/SelectedItemsFlyout.module.css';

const getItemCategory = (url: string) => {
    const pattern = /https:\/\/swapi\.dev\/api\/([^/]+)\/\d+\//;
    const itemsCategory = url.match(pattern)?.[1];

    return itemsCategory || 'items';
};

const SelectedItemsFlyout: React.FC = () => {
    const dispatch = useDispatch();
    const selectedItems = useSelector((state: RootState) => state.selectedItems.items);

    if (selectedItems.length === 0) return null;

    const handleUnselectAll = () => {
        dispatch(unselectAllItems());
    };

    const handleDownload = () => {
        const csvContent =
            'data:text/csv;charset=utf-8,' +
            selectedItems
                .map((item: ResultItem) =>
                    Object.values(item)
                        .map((value) => `"${value}"`)
                        .join(','),
                )
                .join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, `${selectedItems.length}_${getItemCategory(selectedItems[0].url)}.csv`);
    };

    return (
        <div className={styles.flyout}>
            <span>{selectedItems.length} items are selected</span>
            <button onClick={handleUnselectAll}>Unselect all</button>
            <button onClick={handleDownload}>Download</button>
        </div>
    );
};

export default SelectedItemsFlyout;
