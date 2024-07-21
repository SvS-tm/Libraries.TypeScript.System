import { Primitive } from "types/primitive";
import { AnyIsEqual } from "./is-any-equal";
import { IsTuple } from "./is-tuple";
import { TupleKeys } from "./tuple-keys";

type InternalPathBuilder<T_Key extends string | number, T_Type, T_Filter, T_TraversedTypes> = 
(
    T_Type extends T_Filter  
        ? `${T_Key}` 
        : true extends AnyIsEqual<T_TraversedTypes, T_Type> 
            ? `${T_Key}` 
            : `${T_Key}` | `${T_Key}.${InternalPathTraverser<T_Type, T_Filter, T_TraversedTypes | T_Type>}`
);

type InternalPathTraverser<T_Type, T_Filter, T_TraversedTypes = T_Type> = 
(
    T_Type extends readonly (infer T_ItemType)[] 
        ? IsTuple<T_Type> extends true
            ? 
            (
                {
                    [T_Key in TupleKeys<T_Type>]-?: InternalPathBuilder<T_Key & (string | number), T_Type[T_Key], T_Filter, T_TraversedTypes>;
                }[TupleKeys<T_Type>]
            )
            : InternalPathBuilder<number, T_ItemType, T_Filter, T_TraversedTypes> 
        : 
        (
            {
                [T_Key in keyof T_Type]-?: InternalPathBuilder<T_Key & (string | number), T_Type[T_Key], T_Filter, T_TraversedTypes>;
            }[keyof T_Type]
        )
);

export type PathOf<T_Type, T_Filter = Primitive> = 
(
    T_Type extends any 
        ? InternalPathTraverser<T_Type, T_Filter> 
        : never
);
