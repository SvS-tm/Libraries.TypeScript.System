import { Constructor } from "types/functions/constructor";

export type Constructable<T_Type> = 
(
    T_Type extends Constructor<any[], any>
        ? T_Type
        : never
);
