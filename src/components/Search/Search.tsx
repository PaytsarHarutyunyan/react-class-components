import React, { useState } from 'react';
import styles from '../../styles/Search.module.css';

interface SearchProps {
    searchTerm: string;
    onSearch: (term: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchTerm, onSearch }) => {
    const [searchValue, setSearchValue] = useState<string>(searchTerm);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchValue);
    };

    return (
        <div className={styles.searchContainer}>
            <input
                type='text'
                value={searchValue}
                onChange={handleChange}
                placeholder='Search...'
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Search;
