import React from 'react';
import styles from './Item.module.css';

interface ItemProps {
    item: { name: string };
    action: () => void;
}

const Item: React.FC<ItemProps> = ({ item, action }) => (
    <div className={styles.item}>
        <button onClick={action}>{item.name}</button>
    </div>
);

export default Item;
