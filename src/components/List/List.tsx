import React from 'react';
import Item from '../Item/Item';
import styles from './List.module.css';
import { Result } from '@/types';

interface ListProps {
    loading: boolean;
    data: Result['data'];
}

const List: React.FC<ListProps> = ({ loading, data }) => {
    if (loading) return <span>Loading...</span>;
    if (!data || data.length === 0) return <span>No data available</span>;

    return (
        <div className={styles.container}>
            {data.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </div>
    );
};

export default List;
