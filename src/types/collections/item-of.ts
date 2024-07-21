export type ItemOf<T_Collection> = T_Collection extends Iterable<infer T_Item> 
    ? T_Item
    : never;
