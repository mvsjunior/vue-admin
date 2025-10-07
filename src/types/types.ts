export type MetaRoute = {
    title: string;
    url?: string;
}


export type Pagination = {
        currentPage: number;
        perPage: number;
        total: number;
        lastPage: number;
        nextPageUrl: string | null;
        previousPageUrl: string | null;
}