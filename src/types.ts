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
    data: ResultItem[];
}
