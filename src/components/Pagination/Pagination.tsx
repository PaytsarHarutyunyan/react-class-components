import classNames from 'classnames';
import styles from './Pagination.module.css';
import { Component } from 'react';

interface PaginationProps {
    selectedPage: number;
    pageCount: number;
    action: (page: number) => Promise<void>;
}

interface PaginationState {
    nextPage: number;
    prevPage: number;
    paginationItems: number[];
}

class Pagination extends Component<PaginationProps, PaginationState> {
    constructor(props: PaginationProps) {
        super(props);
        this.state = this.getUpdatedState(props);
    }

    componentDidUpdate(prevProps: PaginationProps) {
        if (
            prevProps.pageCount !== this.props.pageCount ||
            prevProps.selectedPage !== this.props.selectedPage
        ) {
            this.setState(this.getUpdatedState(this.props));
        }
    }

    getUpdatedState(props: PaginationProps): PaginationState {
        const { selectedPage, pageCount } = props;
        return {
            nextPage: selectedPage === pageCount ? pageCount : selectedPage + 1,
            prevPage: selectedPage === 1 ? selectedPage : selectedPage - 1,
            paginationItems: new Array(pageCount).fill(null).map((_, index) => index + 1),
        };
    }

    drawPaginationItem(action: (page: number) => Promise<void>) {
        return this.state.paginationItems.map((paginationItem) => (
            <button
                className={classNames({
                    [styles.item]: true,
                    [styles.itemSelected]: paginationItem === this.props.selectedPage,
                })}
                key={paginationItem}
                onClick={async () => await action(paginationItem)}
            >
                {paginationItem}
            </button>
        ));
    }

    render() {
        const { action, pageCount } = this.props;

        return (
            <div className={styles.container}>
                <div className={styles.itemContainer}>
                    <button className={styles.item} onClick={async () => await action(1)}>
                        &lt;&lt;
                    </button>
                    <button
                        className={styles.item}
                        onClick={async () => await action(this.state.prevPage)}
                    >
                        &lt;
                    </button>
                    {this.state.paginationItems.length
                        ? this.drawPaginationItem(action)
                        : 'No data available'}
                    <button
                        className={styles.item}
                        onClick={async () => await action(this.state.nextPage)}
                    >
                        &gt;
                    </button>
                    <button className={styles.item} onClick={async () => await action(pageCount)}>
                        &gt;&gt;
                    </button>
                </div>
            </div>
        );
    }
}

export default Pagination;
