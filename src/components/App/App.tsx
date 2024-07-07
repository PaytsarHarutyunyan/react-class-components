import React, { Component } from 'react';
import HeaderButtons from '../HeaderButtons/HeaderButtons';
import List from '../List/List';
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import styles from '../App/App.module.css';
import { getData } from '../../api/index';
import { BASE_URL } from '../../constants/index';

interface Tab {
    name: string;
    url: string;
}

interface Result {
    count: number;
    data: { name: string }[];
}

interface AppState {
    loading: boolean;
    result: Result;
    selectedPage: number;
    perPageCount: number;
    selectedTab: Tab;
    tabs: Tab[];
    singleResult: boolean | { [key: string]: string };
    searchTerm: string;
}

export default class App extends Component<{}, AppState> {
    state: AppState = {
        loading: false,
        result: { count: 0, data: [] },
        selectedPage: 1,
        perPageCount: 10,
        selectedTab: { name: 'People', url: '/people' },
        tabs: [
            { name: 'People', url: '/people' },
            { name: 'Planets', url: '/planets' },
            { name: 'Species', url: '/species' },
            { name: 'Starships', url: '/starships' },
            { name: 'Vehicles', url: '/vehicles' },
        ],
        singleResult: false,
        searchTerm: localStorage.getItem('searchTerm') || '',
    };

    async componentDidMount() {
        // const savedSearchTerm = localStorage.getItem('searchTerm') || '';
        // this.setState({ searchTerm: savedSearchTerm });
        await this.fetchData(this.state.selectedTab.url, { searchTerm: this.state.searchTerm });
    }

    async fetchData(
        url: string,
        { searchTerm, page }: { searchTerm?: string; page?: number } = {},
    ) {
        this.setState({ loading: true });
        const queryParams =
            searchTerm || page
                ? {
                      ...(searchTerm && { search: searchTerm }),
                      ...(page && { page: String(page) }),
                  }
                : undefined;

        const searchParams = new URLSearchParams(queryParams);
        const result = await getData(`${BASE_URL}${url}?${searchParams.toString()}`);
        this.setState({ loading: false, result: { data: result.results, count: result.count } });
    }

    async headerBtnAction(tabName: string) {
        const selectedTab =
            this.state.tabs.find((tab) => tab.name === tabName) || this.state.selectedTab;
        await this.fetchData(selectedTab.url, { searchTerm: this.state.searchTerm });
        this.setState({ selectedTab });
    }

    async onClickItem(id: string) {
        const result = await this.fetchData(`${this.state.selectedTab.url}/${id}`);
        this.setState({ singleResult: result });
    }

    async onClickPagination(page: number) {
        await this.fetchData(`${this.state.selectedTab.url}`, {
            searchTerm: this.state.searchTerm,
            page,
        });
        this.setState({ selectedPage: page });
    }

    handleSearch = async (searchTerm: string) => {
        localStorage.setItem('searchTerm', searchTerm);
        await this.fetchData(this.state.selectedTab.url, { searchTerm });
    };

    drawSingleResult() {
        const singleResult = this.state.singleResult as { [key: string]: string };
        return Object.keys(singleResult).map((key) => (
            <span key={key}>
                <h4 className={styles.key}>{key}:</h4>
                <span>{singleResult[key]}</span>
            </span>
        ));
    }

    render() {
        return (
            <ErrorBoundary>
                <div className={styles.hero}>
                    <Search searchTerm={this.state.searchTerm} onSearch={this.handleSearch} />
                    <div className={styles.container}>
                        <div className={styles.content}>
                            {!this.state.singleResult ? (
                                <>
                                    <HeaderButtons
                                        tabs={this.state.tabs}
                                        selectedTabName={this.state.selectedTab.name}
                                        action={this.headerBtnAction.bind(this)}
                                    />
                                    <List
                                        data={this.state.result.data}
                                        loading={this.state.loading}
                                        selectedPage={this.state.selectedPage}
                                        itemAction={this.onClickItem.bind(this)}
                                    />
                                    <Pagination
                                        pageCount={Math.ceil(
                                            this.state.result.count / this.state.perPageCount,
                                        )}
                                        selectedPage={this.state.selectedPage}
                                        action={this.onClickPagination.bind(this)}
                                    />
                                </>
                            ) : (
                                this.drawSingleResult()
                            )}
                        </div>
                    </div>
                </div>
            </ErrorBoundary>
        );
    }
}
