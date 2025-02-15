/**
 * Parses {@link T_String} to into {@link null} literal
 * 
 * @description
 * 
 * 'null' => null
 */
export type StringAsNull<T_String extends string> = 
(
    T_String extends `${infer T_Value extends null}`
        ? T_Value
        : never
);
