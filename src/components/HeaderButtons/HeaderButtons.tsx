import React from 'react';
import classNames from 'classnames';
import styles from '../../styles/HeaderButtons.module.css';
import { TABS } from '@/constants/commonConstants';

interface HeaderButtonsProps {
    selectedTabName: string;
    action: (tabName: string) => void;
}

const HeaderButtons: React.FC<HeaderButtonsProps> = ({ selectedTabName, action }) => {
    const drawButtons = () =>
        TABS.map((tab, index) => (
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
