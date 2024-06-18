import { Overload } from "./overload";
import { OverloadedDelegate } from "./overloaded-delegate";

export type Delegate<T_Parameters extends any[] = [], T_Result = void> = 
    OverloadedDelegate<[Overload<T_Parameters, T_Result>]>;
