import { IsChar } from "types/reflection/is-char";

export type CharSetOf<T_Value extends string> = 
(
    T_Value extends `${infer T_Left}${infer T_Right}`
        ? 
        (
            (
                IsChar<T_Left> extends true 
                    ? T_Left 
                    : CharSetOf<T_Left>
            ) 
                | 
            (
                IsChar<T_Right> extends true 
                    ? T_Right 
                    : CharSetOf<T_Right>
            )
        )
        : T_Value
);
