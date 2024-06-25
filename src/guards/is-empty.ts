import { Empty } from "types/empty";
import { Emptyable } from "types/emptyable";

export function isEmpty<T_Value>(value: Emptyable<T_Value>): value is Empty
{
    return value === undefined || value === null;
}
