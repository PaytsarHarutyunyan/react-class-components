import React, { Component } from 'react';
import Item from '../Item';
import styles from './List.module.css';

interface ListProps {
    loading: boolean;
    data: { name: string }[];
    itemAction: (id: string | number) => void;
    selectedPage: number;
}

export default class List extends Component<ListProps> {
    render() {
        if (this.props.loading) return <span>Loading...</span>;
        if (!this.props.data || this.props.data.length === 0) return <span>No data available</span>;

        return (
            <div className={styles.container}>
                {this.props.data.map((item, index) => (
                    <Item
                        key={index}
                        item={item}
                        action={() =>
                            this.props.itemAction(
                                this.props.selectedPage > 1
                                    ? `${this.props.selectedPage - 1}${index + 1}`
                                    : index + 1,
                            )
                        }
                    />
                ))}
            </div>
        );
    }
}
