export type UnionToIntersection<T_Union> = 
(
    (
        T_Union extends any 
            ? (parameter: T_Union) => void 
            : never
    ) extends (parameter: infer T_Type) => void
        ? T_Type 
        : never
);
