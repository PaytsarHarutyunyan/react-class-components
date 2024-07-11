import { useLocation } from 'react-router-dom';

export const useSelectedPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const getSelectedPage = () => (searchParams.get('page') ? Number(searchParams.get('page')) : 1);

    const setSelectedPage = (page: number) => {
        searchParams.set('page', String(page));
    };

    return {
        getSelectedPage,
        setSelectedPage,
    };
};
