import React from 'react';
import classNames from 'classnames';
import styles from './HeaderButtons.module.css';

interface Tab {
    name: string;
    url: string;
}
interface HeaderButtonsProps {
    tabs: Tab[];
    selectedTabName: string;
    action: (tabName: string) => void;
}

const HeaderButtons: React.FC<HeaderButtonsProps> = ({ tabs, selectedTabName, action }) => {
    const drawButtons = () =>
        tabs.map((tab, index) => (
            <button
                className={classNames({
                    [styles.item]: true,
                    [styles.itemSelected]: selectedTabName === tab.name,
                })}
                key={index}
                onClick={() => action(tab.name)}
            >
                {tab.name}
            </button>
        ));

    return <div className={styles.container}>{drawButtons()}</div>;
};

export default HeaderButtons;
