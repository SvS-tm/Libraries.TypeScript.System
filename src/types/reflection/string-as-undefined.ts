/**
 * Parses {@link T_String} to into {@link undefined} literal
 * 
 * @description
 * 
 * 'undefined' => undefined
 */
export type StringAsUndefined<T_String extends string> = 
(
    T_String extends `${infer T_Value extends undefined}`
        ? T_Value
        : never
);
