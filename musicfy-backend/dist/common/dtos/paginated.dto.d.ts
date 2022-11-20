export declare class PaginatedDto<TData> {
    total: number;
    limit?: number;
    offset?: number;
    data: TData[];
}
export declare class PaginateParams {
    limit: number;
    page: number;
    isFuelOrder: boolean;
}
