import { useSearchParams } from 'next/navigation';

export const useQueryParams = () => {
    const searchParams = useSearchParams();

    const getSelectedPage = () => {
        return Number(searchParams.get('page')) ?? 1;
    };

    return {
        getSelectedPage,
    };
};
