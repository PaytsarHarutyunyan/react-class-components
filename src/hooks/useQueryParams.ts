import { useRouter } from 'next/router';

export const useQueryParams = () => {
    const router = useRouter();
    const { query } = router;

    const getSelectedPage = () => {
        const page = query.page ? Number(query.page) : 1;
        return page;
    };

    return {
        getSelectedPage,
    };
};
