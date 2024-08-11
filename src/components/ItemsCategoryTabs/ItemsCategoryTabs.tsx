import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import styles from '../../styles/ItemsCategoryTabs.module.css';
import { TABS } from '@/constants/commonConstants';
import { usePathname } from 'next/navigation';

const ItemsCategoryTabs: React.FC = () => {
    const pathname = usePathname();

    const drawButtons = () =>
        TABS.map((tab, index) => (
            <button
                className={classNames({
                    [styles.item]: true,
                    [styles.itemSelected]: pathname === tab.url,
                })}
                key={index}
            >
                <Link className={styles.itemLink} href={`${tab.url}?page=1`}>
                    {tab.name}
                </Link>
            </button>
        ));

    return <div className={styles.container}>{drawButtons()}</div>;
};

export default ItemsCategoryTabs;
