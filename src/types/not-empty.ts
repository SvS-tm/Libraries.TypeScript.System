import { Empty } from "types/empty";

export type NotEmpty<T_Value> = Exclude<T_Value, Empty>;
