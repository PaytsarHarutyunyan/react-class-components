import { useLocation } from 'react-router-dom';

export const useQueryParams = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const getSelectedPage = () => (searchParams.get('page') ? Number(searchParams.get('page')) : 1);
    const getItemIdForDetailsPage = () =>
        searchParams.get('details') ? Number(searchParams.get('details')) : undefined;

    return {
        getSelectedPage,
        getItemIdForDetailsPage,
    };
};
