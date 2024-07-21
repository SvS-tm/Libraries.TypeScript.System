import { Empty } from "./empty";

export type NotEmpty<T_Value> = Exclude<T_Value, Empty>;
