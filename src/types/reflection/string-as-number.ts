export type StringAsNumber<T_String extends string> = 
(
    T_String extends `${infer T_Value extends number}`
        ? T_Value
        : never
);
