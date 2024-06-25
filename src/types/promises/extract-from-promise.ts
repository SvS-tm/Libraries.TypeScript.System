export type ExtractFromPromise<T_Promise> = T_Promise extends Promise<infer T_Result> 
    ? T_Result
    : never;
