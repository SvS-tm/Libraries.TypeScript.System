/**
 * Parses {@link T_String} to into {@link number} literal
 * 
 * @description
 * 
 * '1' => 1
 * 
 * '2' => 2
 */
export type StringAsNumber<T_String extends string> = 
(
    T_String extends `${infer T_Value extends number}`
        ? T_Value
        : never
);
