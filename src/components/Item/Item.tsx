import React from 'react';
import styles from './Item.module.css';
import { ResultItem } from '@/types';
import { useQueryParams } from '@/hooks/useSelectedPage';
import { Link } from 'react-router-dom';

interface ItemProps {
    item: ResultItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
    const itemId = (item.url.match(/\/(\d+)\//) as string[])[1] as string;
    const { getSelectedPage } = useQueryParams();

    return (
        <div className={styles.item}>
            <button>
                <Link to={`${location.pathname}?page=${getSelectedPage()}&details=${itemId}`}>
                    {item.name}
                </Link>
            </button>
        </div>
    );
};

export default Item;
