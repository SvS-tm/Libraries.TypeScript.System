import { StringAsBigInt } from "./string-as-bigint";
import { StringAsBoolean } from "./string-as-boolean";
import { StringAsNull } from "./string-as-null";
import { StringAsNumber } from "./string-as-number";
import { StringAsUndefined } from "./string-as-undefined";

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
