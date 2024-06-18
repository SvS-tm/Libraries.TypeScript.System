import { IsChar } from "./is-char";

export type CharSetOf<TValue extends string> = 
(
    TValue extends `${infer TLeft}${infer TRight}`
        ? 
        (
            (
                IsChar<TLeft> extends true 
                    ? TLeft 
                    : CharSetOf<TLeft>
            ) 
                | 
            (
                IsChar<TRight> extends true 
                    ? TRight 
                    : CharSetOf<TRight>
            )
        )
        : TValue
);
