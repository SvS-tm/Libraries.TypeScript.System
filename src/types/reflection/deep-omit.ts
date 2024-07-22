import { PathOf } from "types/reflection/path-of";
import { SafeOmit } from "types/reflection/safe-omit";
import { StringAsPrimitive } from "types/reflection/string-as-primitive";

type InternalDeepOmit<T_Type, T_Path extends string> = 
( 
    T_Path extends `${infer T_Key}..${infer T_Rest}`
        ? never
        : "" extends T_Path
            ? T_Type
            : T_Path extends `${infer T_Key}.${infer T_Rest}`
                ? (StringAsPrimitive<T_Key> & keyof T_Type) extends keyof T_Type 
                    ? InternalDeepOmit<T_Type[StringAsPrimitive<T_Key> & keyof T_Type], T_Rest> extends never
                        ? never
                        : 
                        (
                            { 
                                [T_ExistingKey in keyof T_Type]: 
                                (
                                    (StringAsPrimitive<T_Key> & keyof T_Type) extends T_ExistingKey
                                        ? InternalDeepOmit<T_Type[T_ExistingKey], T_Rest>
                                        : T_Type[T_ExistingKey]
                                );
                            }
                        )
                    : "" extends T_Key
                        ? (StringAsPrimitive<T_Rest> & keyof T_Type) extends keyof T_Type
                            ? SafeOmit<T_Type, (StringAsPrimitive<T_Rest> & keyof T_Type)>
                            : InternalDeepOmit<T_Type, T_Rest> extends never
                                ? never
                                : InternalDeepOmit<T_Type, T_Rest>
                        : never
                : (StringAsPrimitive<T_Path> & keyof T_Type) extends keyof T_Type
                    ? SafeOmit<T_Type, (StringAsPrimitive<T_Path> & keyof T_Type)>
                    : T_Path extends `.${infer T_CleanKey}`
                        ? (StringAsPrimitive<T_CleanKey> & keyof T_Type) extends keyof T_Type
                            ? SafeOmit<T_Type, (StringAsPrimitive<T_CleanKey> & keyof T_Type)>
                            : never
                        : never
);

export type DeepOmit<T_Type, T_Path extends PathOf<T_Type>> =
    InternalDeepOmit<T_Type, T_Path>;
