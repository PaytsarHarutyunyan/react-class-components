export interface Tab {
    name: string;
    url: string;
}

export interface Result {
    count: number;
    data: { name: string }[];
}
