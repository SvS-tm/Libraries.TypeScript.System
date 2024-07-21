import { PathOf } from "./path-of";
import { SafeOmit } from "./safe-omit";
import { StringAsPrimitive } from "./string-as-primitive";

type InternalChangeTypeOf<T_Type, T_Path extends string, T_NewType> = 
( 
    T_Path extends `${infer T_Key}..${infer T_Rest}`
        ? never
        : "" extends T_Path
            ? T_Type
            : T_Path extends `${infer T_Key}.${infer T_Rest}`
                ? (StringAsPrimitive<T_Key> & keyof T_Type) extends keyof T_Type 
                    ? InternalChangeTypeOf<T_Type[StringAsPrimitive<T_Key> & keyof T_Type], T_Rest, T_NewType> extends never
                        ? never
                        : 
                        (
                            { 
                                [T_ExistingKey in keyof T_Type]: 
                                (
                                    (StringAsPrimitive<T_Key> & keyof T_Type) extends T_ExistingKey
                                        ? InternalChangeTypeOf<T_Type[T_ExistingKey], T_Rest, T_NewType>
                                        : T_Type[T_ExistingKey]
                                );
                            }
                        )
                    : "" extends T_Key
                        ? (StringAsPrimitive<T_Rest> & keyof T_Type) extends keyof T_Type
                            ? SafeOmit<T_Type, (StringAsPrimitive<T_Rest> & keyof T_Type)> & { [T_NewKey in (StringAsPrimitive<T_Rest> & keyof T_Type)]: T_NewType }
                            : InternalChangeTypeOf<T_Type, T_Rest, T_NewType> extends never
                                ? never
                                : InternalChangeTypeOf<T_Type, T_Rest, T_NewType>
                        : never
                : (StringAsPrimitive<T_Path> & keyof T_Type) extends keyof T_Type
                    ? SafeOmit<T_Type, (StringAsPrimitive<T_Path> & keyof T_Type)> & { [T_NewKey in (StringAsPrimitive<T_Path> & keyof T_Type)]: T_NewType }
                    : T_Path extends `.${infer T_CleanKey}`
                        ? (StringAsPrimitive<T_CleanKey> & keyof T_Type) extends keyof T_Type
                            ? SafeOmit<T_Type, (StringAsPrimitive<T_CleanKey> & keyof T_Type)> & { [T_NewKey in (StringAsPrimitive<T_CleanKey> & keyof T_Type)]: T_NewType }
                            : never
                        : never
);

export type ChangeTypeOf<T_Type, T_NewType, T_Path extends PathOf<T_Type>> =
    InternalChangeTypeOf<T_Type, T_Path, T_NewType>;
