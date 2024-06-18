import { Emptyable } from "types/emptyable";
import { NotEmpty } from "types/not-empty";

export function isNotEmpty<T_Value>(value: Emptyable<T_Value>): value is NotEmpty<T_Value>
{
    return value !== undefined && value !== null;
}
