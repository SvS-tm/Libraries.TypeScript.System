// Two conditional types 'T1 extends U1 ? X1 : Y1' and 'T2 extends U2 ? X2 : Y2' are related if
// one of T1 and T2 is related to the other, U1 and U2 are identical types, X1 is related to X2,
// and Y1 is related to Y2.

// It relies on conditional types being deferred when T is not known. 
// Assignability of deferred conditional types relies on an internal isTypeIdenticalTo check, 
// which is only true for two conditional types if:
// 1) Both conditional types have the same constraint
// 2) The true and false branches of both conditions are the same type

export type IsEqual<T_Left, T_Right, T_True = true, T_False = false> = 
(
    T_Left extends T_Right 
        ? 
        (
            <T_Unknown>() => T_Unknown extends T_Left 
                ? 1 
                : 2
        ) extends 
        (
            <T_Unknown>() => T_Unknown extends T_Right 
                ? 1 
                : 2
        ) 
            ? T_True
            : T_False
        : T_False
);
