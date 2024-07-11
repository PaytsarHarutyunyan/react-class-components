import React from 'react';
import Item from '../Item/Item';
import styles from './List.module.css';

interface ListProps {
    loading: boolean;
    data: { name: string }[];
    itemAction: (id: string | number) => void;
    selectedPage: number;
}

const List: React.FC<ListProps> = ({ loading, data, itemAction, selectedPage }) => {
    if (loading) return <span>Loading...</span>;
    if (!data || data.length === 0) return <span>No data available</span>;

    return (
        <div className={styles.container}>
            {data.map((item, index) => (
                <Item
                    key={index}
                    item={item}
                    action={() =>
                        itemAction(selectedPage > 1 ? `${selectedPage - 1}${index + 1}` : index + 1)
                    }
                />
            ))}
        </div>
    );
};

export default List;
