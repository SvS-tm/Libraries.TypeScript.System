import { Delegate } from "types/functions/delegate";

export type Selector<T_Target, T_Member = any> = Delegate<[T_Target], T_Member>;
