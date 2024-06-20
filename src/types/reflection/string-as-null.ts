export type StringAsNull<T_String extends string> = 
(
    T_String extends `${infer T_Value extends null}`
        ? T_Value
        : never
);
