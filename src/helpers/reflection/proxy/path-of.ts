import { Selector } from "types/reflection/selector";
import { createSafeProxyHandler } from "./create-safe-proxy-handler";
import { Key } from "types/reflection/key";

export function pathOf<T_Target, T_Member = any>(selector: Selector<T_Target, T_Member>): Key[]
{
    const path: Key[] = [];

    const pathProxy: Key[] = new Proxy
    (
        path,
        createSafeProxyHandler
        ( 
            {
                get: (target, key) =>
                {
                    target.push(key);
                    
                    return pathProxy;
                }
            }
        )
    );

    selector(pathProxy as T_Target);

    return path;
}
