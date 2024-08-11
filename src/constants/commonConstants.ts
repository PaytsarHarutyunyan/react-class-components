import { Tab } from '@/types';

export const BASE_URL = 'https://swapi.dev/api';
export const ITEMS_PER_PAGE_COUNT = 10;
export const TABS: Tab[] = [
    { name: 'People', url: '/people' },
    { name: 'Planets', url: '/planets' },
    { name: 'Species', url: '/species' },
    { name: 'Starships', url: '/starships' },
    { name: 'Vehicles', url: '/vehicles' },
];
