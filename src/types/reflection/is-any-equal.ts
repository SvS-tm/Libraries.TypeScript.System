import { IsEqual } from "types/reflection/is-equal";

export type AnyIsEqual<T_Left, T_Right, T_True = true, T_False = false> = 
(
    T_Left extends T_Right 
        ? IsEqual<T_Left, T_Right> extends true 
            ? T_True
            : T_False
        : T_False
);
