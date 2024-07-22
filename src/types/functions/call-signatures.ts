import { Delegate } from "types/functions/delegate";

type InternalCallSignatures<T_Callable, T_Aligned> = 
(
    ({ [key in keyof T_Callable]: T_Callable[key] } & T_Aligned) extends T_Callable 
        ? never
        : T_Callable extends (...args: infer T_Parameters) => infer T_Result
            ?
            ( 
                Delegate<T_Parameters, T_Result>
                    | 
                InternalCallSignatures<T_Aligned & T_Callable, Delegate<T_Parameters, T_Result> & T_Aligned>
            )
            : never
);

export type CallSignatures<T_Callable> = InternalCallSignatures<T_Callable, {}>;
