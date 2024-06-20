export type StringAsBoolean<T_String extends string> = 
(
    T_String extends `${infer T_Value extends boolean}`
        ? T_Value
        : never
);
