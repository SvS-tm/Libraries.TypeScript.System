import { Delegate } from "types/functions/delegate";

export type Functional<T_Type> = 
(
    T_Type extends Delegate<any[], any>
        ? T_Type
        : never
);
