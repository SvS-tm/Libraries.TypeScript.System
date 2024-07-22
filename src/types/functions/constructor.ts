import { Overload } from "types/functions/overload";
import { OverloadedConstructor } from "types/functions/overloaded-constructor";

export type Constructor<T_Parameters extends any[] = [], T_Result = void> = 
    OverloadedConstructor<[Overload<T_Parameters, T_Result>]>;
