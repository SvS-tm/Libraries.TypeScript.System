export type TypeOf<T_Type, T_Path> = 
( 
    T_Path extends `${infer T_Key}..${infer T_Rest}`
        ? never
        : "" extends T_Path
            ? T_Type
            : T_Path extends `${infer T_Key}.${infer T_Rest}`
                ? T_Key extends keyof T_Type 
                    ? TypeOf<T_Type[T_Key], T_Rest> extends never
                        ? never
                        : TypeOf<T_Type[T_Key], T_Rest>
                    : "" extends T_Key
                        ? T_Rest extends keyof T_Type
                            ? T_Type[T_Rest]
                            : TypeOf<T_Type, T_Rest> extends never
                                ? never
                                : TypeOf<T_Type, T_Rest>
                        : never
                : T_Path extends keyof T_Type
                    ? T_Type[T_Path]
                    : T_Path extends `.${infer T_CleanKey}`
                        ? T_CleanKey extends keyof T_Type
                            ? T_Type[T_CleanKey]
                            : never
                        : never
);
