/**
 * Parses {@link T_String} to into {@link bigint} literal
 * 
 * @description
 * 
 * '1' => 1n
 * 
 * '2' => 2n
 */
export type StringAsBigInt<T_String extends string> = 
(
    T_String extends `${infer T_Value extends bigint}`
        ? T_Value
        : never
);
