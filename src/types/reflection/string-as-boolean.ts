/**
 * Parses {@link T_String} to into {@link boolean} literal
 * 
 * @description
 * 
 * 'true' => true
 * 
 * 'false' => false
 */
export type StringAsBoolean<T_String extends string> = 
(
    T_String extends `${infer T_Value extends boolean}`
        ? T_Value
        : never
);
