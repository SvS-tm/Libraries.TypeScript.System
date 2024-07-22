import { KeyOf } from "types/reflection/key-of";

export type IsTuple
<
    T_Tuple extends readonly any[], 
    T_True = true, 
    T_False = false
> = 
(
    number extends T_Tuple[KeyOf<any[], 'length'>]
        ? T_False
        : T_True
);
