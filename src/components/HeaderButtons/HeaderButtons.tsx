import classNames from 'classnames';
import styles from './HeaderButtons.module.css';
import React, { Component } from 'react';

interface Tab {
    name: string;
    url: string;
}

interface HeaderButtonsProps {
    tabs: Tab[];
    selectedTabName: string;
    action: (tabName: string) => void;
}

export default class HeaderButtons extends Component<HeaderButtonsProps> {
    drawButtons() {
        return this.props.tabs.map((tab, index) => (
            <button
                className={classNames({
                    [styles.item]: true,
                    [styles.itemSelected]: this.props.selectedTabName === tab.name,
                })}
                key={index}
                onClick={async () => {
                    await this.props.action(tab.name);
                }}
            >
                {tab.name}
            </button>
        ));
    }

    render() {
        return <div className={styles.container}>{this.drawButtons()}</div>;
    }
};
