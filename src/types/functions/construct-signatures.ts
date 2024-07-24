import { Constructor } from "./constructor";

type InternalConstructSignatures<T_Constructable, T_Aligned> = 
(
    ({ [key in keyof T_Constructable]: T_Constructable[key] } & T_Aligned) extends T_Constructable 
        ? never
        : T_Constructable extends new (...args: infer T_Parameters) => infer T_Result
            ?
            ( 
                Constructor<T_Parameters, T_Result>
                    | 
                InternalConstructSignatures<T_Aligned & T_Constructable, Constructor<T_Parameters, T_Result> & T_Aligned>
            )
            : never
);

export type ConstructSignatures<T_Constructable> = InternalConstructSignatures<T_Constructable, {}>;
