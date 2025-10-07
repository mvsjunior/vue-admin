import type { Pagination } from "@/types/types";

export type paginatedDummyJson = {
    total: number,
    skip: number,
    limit: number
}

export function dummyPaginationMapper(paginatedResult: paginatedDummyJson, perPage = 30): Pagination
{
        const { total, skip, limit} = paginatedResult;

        const currentPage = Math.floor(skip / limit) + 1;
        const lastPage = Math.round(total / limit);

        const nextPageUrl = currentPage < lastPage ? currentPage + 1 : null;

        const previousPageUrl = currentPage > 1 ? currentPage - 1 : null;

        return {
            currentPage: currentPage,
            perPage: perPage,
            total: total,
            lastPage: lastPage,
            nextPageUrl: `${nextPageUrl}`,
            previousPageUrl: `${previousPageUrl}`
        }
}