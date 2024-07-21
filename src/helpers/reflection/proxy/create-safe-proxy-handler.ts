import { throwFor } from "helpers/errors/throw-for";
import { ProxyOperation } from "types/reflection/proxy/proxy-operation";
import { ProxyOperationNotSupportedError } from "types/reflection/proxy/proxy-operation-not-supported-error";

export function createSafeProxyHandler<T_Target extends object>(handler: ProxyHandler<T_Target>): ProxyHandler<T_Target>
{
    return {
        apply: handler.apply ?? 
        (
            (target, ...parameters) => 
                throwFor(new ProxyOperationNotSupportedError(ProxyOperation.APPLY, parameters))
        ),
        construct: handler.construct ??
        (
            (target, ...parameters) => 
                throwFor(new ProxyOperationNotSupportedError(ProxyOperation.CONSTRUCT, parameters))
        ),
        defineProperty: handler.defineProperty ?? 
        (
            (target, ...parameters) => 
                throwFor(new ProxyOperationNotSupportedError(ProxyOperation.DEFINE_PROPERTY, parameters))
        ),
        deleteProperty: handler.deleteProperty ?? 
        (
            (target, ...parameters) => 
                throwFor(new ProxyOperationNotSupportedError(ProxyOperation.DELETE_PROPERTY, parameters))
        ),
        getOwnPropertyDescriptor: handler.getOwnPropertyDescriptor ??
        ( 
            (target, ...parameters) => 
                throwFor(new ProxyOperationNotSupportedError(ProxyOperation.GET_OWN_PROPERTY_DESCRIPTOR, parameters))
        ),
        getPrototypeOf: handler.getPrototypeOf ?? 
        (
            (target, ...parameters) => 
                throwFor(new ProxyOperationNotSupportedError(ProxyOperation.GET_PROTOTYPE_OF, parameters))
        ),
        has: handler.has ??
        (
            (target, ...parameters) => 
                throwFor(new ProxyOperationNotSupportedError(ProxyOperation.HAS, parameters))
        ),
        isExtensible: handler.isExtensible ?? 
        (
            (target, ...parameters) => 
                throwFor(new ProxyOperationNotSupportedError(ProxyOperation.IS_EXTENSIBLE, parameters))
        ),
        ownKeys: handler.ownKeys ?? 
        (
            (target, ...parameters) => 
                throwFor(new ProxyOperationNotSupportedError(ProxyOperation.OWN_KEYS, parameters))
        ),
        preventExtensions: handler.preventExtensions ?? 
        (
            (target, ...parameters) => 
                throwFor(new ProxyOperationNotSupportedError(ProxyOperation.PREVENT_EXTENSIONS, parameters))
        ),
        set: handler.set ?? 
        (
            (target, ...parameters) => 
                throwFor(new ProxyOperationNotSupportedError(ProxyOperation.SET, parameters))
        ),
        setPrototypeOf: handler.setPrototypeOf ?? 
        (
            (target, ...parameters) => 
                throwFor(new ProxyOperationNotSupportedError(ProxyOperation.GET_PROTOTYPE_OF, parameters))
        ),
        get: handler.get ?? 
        (
            (target, ...parameters) => 
                throwFor(new ProxyOperationNotSupportedError(ProxyOperation.GET, parameters))
        )
    };
}
