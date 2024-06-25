import { PathOf } from "./path-of";
import { StringAsPrimitive } from "./string-as-primitive";

type InternalTypeOf<T_Type, T_Path extends string> = 
( 
    T_Path extends `${infer T_Key}..${infer T_Rest}`
        ? never
        : "" extends T_Path
            ? T_Type
            : T_Path extends `${infer T_Key}.${infer T_Rest}`
                ? (StringAsPrimitive<T_Key> & keyof T_Type) extends keyof T_Type 
                    ? InternalTypeOf<T_Type[StringAsPrimitive<T_Key> & keyof T_Type], T_Rest> extends never
                        ? never
                        : InternalTypeOf<T_Type[StringAsPrimitive<T_Key> & keyof T_Type], T_Rest>
                    : "" extends T_Key
                        ? (StringAsPrimitive<T_Rest> & keyof T_Type) extends keyof T_Type
                            ? T_Type[StringAsPrimitive<T_Rest> & keyof T_Type]
                            : InternalTypeOf<T_Type, T_Rest> extends never
                                ? never
                                : InternalTypeOf<T_Type, T_Rest>
                        : never
                : (StringAsPrimitive<T_Path> & keyof T_Type) extends keyof T_Type
                    ? T_Type[StringAsPrimitive<T_Path> & keyof T_Type]
                    : T_Path extends `.${infer T_CleanKey}`
                        ? (StringAsPrimitive<T_CleanKey> & keyof T_Type) extends keyof T_Type
                            ? T_Type[StringAsPrimitive<T_CleanKey> & keyof T_Type]
                            : never
                        : never
);

export type TypeOf<T_Type, T_Path extends PathOf<T_Type>> = 
    InternalTypeOf<T_Type, T_Path>;
