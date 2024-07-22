import { Overload } from "types/functions/overload";
import { OverloadedDelegate } from "types/functions/overloaded-delegate";

export type Delegate<T_Parameters extends any[] = [], T_Result = void> = 
    OverloadedDelegate<[Overload<T_Parameters, T_Result>]>;
