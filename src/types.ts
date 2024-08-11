export interface Tab {
    name: string;
    url: string;
}

export interface ResultItem {
    name: string;
    url: string;
}
export interface Result {
    count: number;
    results: ResultItem[];
    next?: string;
    previous?: string;
}

export type Theme = 'light' | 'dark';
