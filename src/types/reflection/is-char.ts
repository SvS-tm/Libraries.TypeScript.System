export type IsChar<T_Template extends string, T_True = true, T_False = false> = 
(
    T_Template extends `${infer T_First}${infer T_Rest}`
        ? "" extends T_Rest
            ? "" extends T_First
                ? T_False
                : T_True
            : "" extends T_First
                ? T_True
                : T_False
        : T_False
);
