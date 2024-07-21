import { describe, expect, test } from "@jest/globals";
import { keyOf } from "helpers/reflection/proxy/key-of";
import { Delegate } from "types/functions/delegate";
import { KeyOfInvalidOperationError } from "types/reflection/proxy/key-of-invalid-operation-error";
import { ProxyOperationNotSupportedError } from "types/reflection/proxy/proxy-operation-not-supported-error";

describe
(
    "keyOf", 
    () =>
    {
        test
        (
            "Returns name of member",
            () =>
            {
                const name = "test name";

                const instance = 
                {
                    [name]: true
                };

                expect(keyOf<typeof instance>((instance) => instance[name])).toBe(name);
            }
        );

        test
        (
            "Returns name of nested member", 
            () =>
            {
                const name1 = "test name 1";
                const name2 = "test name 2";
                const name3 = "test name 3";

                const instance = 
                {
                    [name1]: 
                    {
                        [name2]: 
                        {
                            [name3]: true
                        }
                    }
                };

                expect(keyOf<typeof instance>((instance) => instance[name1][name2][name3])).toBe(name3);
            }
        );

        test
        (
            "Action without any of property accesses must throw KeyOfInvalidOperationError", 
            () =>
            {
                expect(() => keyOf<object>((instance) => {})).toThrowError(KeyOfInvalidOperationError);
            }
        );

        test
        (
            "Apply must throw TypeError", 
            () =>
            {
                expect(() => keyOf<Delegate>((instance) => instance())).toThrowError(TypeError);
            }
        );

        test
        (
            "Construct must throw TypeError", 
            () =>
            {
                expect(() => keyOf<typeof String>((instance) => new instance)).toThrowError(TypeError);
            }
        );

        test
        (
            "Define property throw ProxyOperationNotSupportedError", 
            () =>
            {
                expect
                (
                    () => keyOf<object>
                    (
                        (instance) => Object.defineProperty(instance, "property", {})
                    )
                )
                    .toThrowError(ProxyOperationNotSupportedError);
            }
        );

        test
        (
            "Delete property must throw ProxyOperationNotSupportedError", 
            () =>
            {
                expect(() => keyOf<{ field?: string }>((instance) => delete instance.field)).toThrowError(ProxyOperationNotSupportedError);
            }
        );

        test
        (
            "Method Object.getOwnPropertyDescriptor must throw ProxyOperationNotSupportedError", 
            () =>
            {
                expect(() => keyOf<object>((instance) => Object.getOwnPropertyDescriptor(instance, "field"))).toThrowError(ProxyOperationNotSupportedError);
            }
        );

        test
        (
            "Method Object.getPrototypeOf must throw ProxyOperationNotSupportedError", 
            () =>
            {
                expect(() => keyOf<object>((instance) => Object.getPrototypeOf(instance))).toThrowError(ProxyOperationNotSupportedError);
            }
        );

        test
        (
            "Operator 'in' must throw ProxyOperationNotSupportedError", 
            () =>
            {
                expect(() => keyOf<object>((instance) => "field1" in instance)).toThrowError(ProxyOperationNotSupportedError);
            }
        );

        test
        (
            "Method Object.isExtensible must throw ProxyOperationNotSupportedError", 
            () =>
            {
                expect(() => keyOf<object>((instance) => Object.isExtensible(instance))).toThrowError(ProxyOperationNotSupportedError);
            }
        );

        test
        (
            "Method Reflect.ownKeys must throw ProxyOperationNotSupportedError", 
            () =>
            {
                expect(() => keyOf<object>((instance) => Reflect.ownKeys(instance))).toThrowError(ProxyOperationNotSupportedError);
            }
        );

        test
        (
            "Method Object.preventExtensions must throw ProxyOperationNotSupportedError", 
            () =>
            {
                expect(() => keyOf<object>((instance) => Object.preventExtensions(instance))).toThrowError(ProxyOperationNotSupportedError);
            }
        );

        test
        (
            "Operator Set must throw ProxyOperationNotSupportedError", 
            () =>
            {
                expect(() => keyOf<{ field?: string }>((instance) => instance.field = "test")).toThrowError(ProxyOperationNotSupportedError);
            }
        );

        test
        (
            "Method Object.setPrototypeOf must throw ProxyOperationNotSupportedError", 
            () =>
            {
                expect(() => keyOf<object>((instance) => Object.setPrototypeOf(instance, Object))).toThrowError(ProxyOperationNotSupportedError);
            }
        );

    }
);
