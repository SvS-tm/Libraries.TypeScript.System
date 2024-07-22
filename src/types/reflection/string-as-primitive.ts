import { StringAsBigInt } from "types/reflection/string-as-bigint";
import { StringAsBoolean } from "types/reflection/string-as-boolean";
import { StringAsNull } from "types/reflection/string-as-null";
import { StringAsNumber } from "types/reflection/string-as-number";
import { StringAsUndefined } from "types/reflection/string-as-undefined";

/**
 * Parses {@link T_String} to into possible primitive types
 * ({@link T_String} | {@link null} | {@link undefined} | {@link number} | {@link boolean} | {@link bigint})
 * 
 * @description
 * 
 * Literals parsed into primitive literals
 * 
 * '1' => 1 | 1n | '1'
 * 
 * 'true' => true | 'true'
 * 
 * 'null' => null | 'null'
 * 
 * 'undefined' => undefined | 'undefined'
 */
export type StringAsPrimitive<T_String extends string> = 
(
    T_String
        |
    StringAsNull<T_String>
        |
    StringAsUndefined<T_String>
        |
    StringAsBigInt<T_String>
        |
    StringAsBoolean<T_String>
        |
    StringAsNumber<T_String>
);
