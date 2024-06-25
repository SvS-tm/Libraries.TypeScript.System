import { Overload } from "./overload";
import { OverloadedConstructor } from "./overloaded-constructor";

export type Constructor<T_Parameters extends any[] = [], T_Result = void> = 
    OverloadedConstructor<[Overload<T_Parameters, T_Result>]>;
