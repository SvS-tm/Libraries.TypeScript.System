import { isEmpty } from "guards/is-empty";
import { ItemOf } from "types/collections/item-of";
import { Emptyable } from "types/emptyable";
import { SafeOmit } from "types/safe-omit";

export function omit
<
    T_Object extends Emptyable<object>, 
    T_Keys extends Array<keyof T_Object>
>
(
    value: T_Object,
    ...keys: T_Keys
)
    : SafeOmit<T_Object, ItemOf<T_Keys>>
{
    if (isEmpty(value))
        return value;

    const result: any = {};

    const convertedKeys = keys.map
    (
        (key) => typeof key === "symbol"
            ? key satisfies symbol
            : String(key)
    );

    (Object.keys(value) as Array<string | symbol>)
        .concat(Object.getOwnPropertySymbols(value))
        .filter((key) => !convertedKeys.includes(key))
        .forEach((key) => result[key] = (value as any)[key]);

    return result as SafeOmit<T_Object, ItemOf<T_Keys>>;
}
