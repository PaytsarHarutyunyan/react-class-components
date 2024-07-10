import React, { Component } from 'react';
import styles from './Search.module.css';

interface SearchProps {
    searchTerm: string;
    onSearch: (term: string) => void;
}

interface SearchState {
    searchTerm: string;
}

export default class Search extends Component<SearchProps, SearchState> {
    state: SearchState = {
        searchTerm: this.props.searchTerm,
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ searchTerm: e.target.value });
    };

    handleSearch = () => {
        this.props.onSearch(this.state.searchTerm);
    };

    render() {
        return (
            <div className={styles.searchContainer}>
                <input
                    type='text'
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    placeholder='Search...'
                />
                <button onClick={this.handleSearch}>Search</button>
            </div>
        );
    }
}
