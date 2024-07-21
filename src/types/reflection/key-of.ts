export type KeyOf<T_Type, T_Key extends keyof T_Type> = 
    keyof T_Type & T_Key;
