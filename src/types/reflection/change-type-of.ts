import { SafeOmit } from "types/safe-omit";

export type ChangeTypeOf<T_Type, T_Path, T_NewType> = 
(
    T_Path extends `${infer TKey}..${infer TRest}`
        ? never
        : "" extends T_Path
            ? T_NewType
            : T_Path extends `${infer T_Key}.${infer T_Rest}`
                ? T_Key extends keyof T_Type
                    ? ChangeTypeOf<T_Type[T_Key], T_Rest, T_NewType> extends never
                        ? never
                        : SafeOmit<T_Type, T_Key> & { [Key in T_Key]: ChangeTypeOf<T_Type[T_Key], T_Rest, T_NewType>; }
                    : "" extends T_Key
                        ? T_Rest extends keyof T_Type
                            ? SafeOmit<T_Type, T_Rest> & { [Key in T_Rest]: T_NewType; }
                            : ChangeTypeOf<T_Type, T_Rest, T_NewType> extends never
                                ? never
                                : ChangeTypeOf<T_Type, T_Rest, T_NewType>
                        : never
                : T_Path extends keyof T_Type
                    ? SafeOmit<T_Type, T_Path> & { [Key in T_Path]: T_NewType; }
                    : T_Path extends `.${infer T_CleanKey}`
                        ? T_CleanKey extends keyof T_Type
                            ? SafeOmit<T_Type, T_CleanKey> & { [Key in T_CleanKey]: T_NewType; }
                            : never
                        : never
);
