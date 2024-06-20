export type StringAsBigInt<T_String extends string> = 
(
    T_String extends `${infer T_Value extends bigint}`
        ? T_Value
        : never
);
