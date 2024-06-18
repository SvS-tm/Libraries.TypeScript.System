export type Promised<T_Value> = T_Value extends Promise<any>
    ? T_Value
    : Promise<T_Value>;
