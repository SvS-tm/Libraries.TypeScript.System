export type SafeOmit<T_Type, T_Member extends keyof T_Type> = 
    Pick<T_Type, Exclude<keyof T_Type, T_Member>>;
