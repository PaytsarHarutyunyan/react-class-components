import React from 'react';
import { usePathname } from 'next/navigation';
import styles from '../../styles/Item.module.css';
import { ResultItem } from '@/types';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { selectItem, unselectItem } from '@/store/selectedItemsSlice';
import Link from 'next/link';

interface ItemProps {
    item: ResultItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
    const itemId = (item.url.match(/\/(\d+)\//) as string[])[1] as string;
    const { getSelectedPage } = useQueryParams();
    const dispatch = useDispatch();
    const selectedItems = useSelector((state: RootState) => state.selectedItems.items);
    const isSelected = selectedItems.some((selectedItem) => selectedItem.url === item.url);

    const handleSelect = () => {
        if (isSelected) {
            dispatch(unselectItem(Number(itemId)));
        } else {
            dispatch(selectItem(item));
        }
    };

    const pathname = usePathname();

    return (
        <div>
            <div className={styles.item}>
                <input
                    className={styles.checkbox}
                    type='checkbox'
                    checked={isSelected}
                    onChange={handleSelect}
                />
                <Link
                    href={`${pathname}?page=${getSelectedPage()}&details=${itemId}`}
                    className={styles.link}
                >
                    {item.name}
                </Link>
            </div>
        </div>
    );
};

export default Item;
