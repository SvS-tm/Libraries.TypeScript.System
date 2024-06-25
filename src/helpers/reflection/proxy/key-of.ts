import { isEmpty } from "guards/is-empty";
import { Nullable } from "types/nullable";
import { KeyOfInvalidOperationError } from "types/reflection/proxy/key-of-invalid-operation-error";
import { Selector } from "types/reflection/selector";
import { createSafeProxyHandler } from "./create-safe-proxy-handler";
import { Key } from "types/reflection/key";

export function keyOf<T_Target, T_Member = any>(selector: Selector<T_Target, T_Member>): Key
{
    let result: Nullable<Key> = null;

    const nameProxy: T_Target = new Proxy
    (
        {}, 
        createSafeProxyHandler
        (
            {
                get: (target, key) => 
                {
                    result = key;
    
                    return nameProxy as T_Target;
                }
            }
        )
    ) as T_Target;

    selector(nameProxy);

    if (isEmpty(result))
        throw new KeyOfInvalidOperationError("nameOf must reference any memeber inside selector");

    return result;
}
