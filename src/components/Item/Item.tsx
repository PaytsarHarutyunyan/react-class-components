import styles from './Item.module.css';
import React, { Component } from 'react';

interface ItemProps {
    item: { name: string };
    action: () => void;
}

export default class Item extends Component<ItemProps> {
    render() {
        return (
            <div className={styles.item}>
                <button onClick={this.props.action}>{this.props.item.name}</button>
            </div>
        );
    }
}
