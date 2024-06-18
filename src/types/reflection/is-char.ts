export type IsChar<T_Template extends string> = 
(
    T_Template extends `${infer T_First}${infer T_Rest}`
        ? "" extends T_Rest
            ? "" extends T_First
                ? false
                : true
            : "" extends T_First
                ? true
                : false
        : false
);
