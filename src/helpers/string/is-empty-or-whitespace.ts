import { isEmpty } from "guards/is-empty";
import { Emptyable } from "types/emptyable";

export function isEmptyOrWhitespace(value: Emptyable<string>): boolean
{
    return isEmpty(value) || !value.length || /^[\s\t]+$/.test(value);
}
