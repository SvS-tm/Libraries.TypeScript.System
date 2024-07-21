import { describe, expect, test } from "@jest/globals";
import { pathOf } from "helpers/reflection/proxy/path-of";
import { Delegate } from "types/functions/delegate";
import { ProxyOperationNotSupportedError } from "types/reflection/proxy/proxy-operation-not-supported-error";

describe
(
    "pathOf", 
    () =>
    {
        test
        (
            "Returns path of member", 
            () =>
            {
                const name = "test name";

                const instance = 
                {
                    [name]: true
                };

                expect(pathOf<typeof instance>((instance) => instance[name])).toStrictEqual([name]);
            }
        );

        test
        (
            "Returns path of nested member", 
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

                expect(pathOf<typeof instance>((instance) => instance[name1][name2][name3])).toStrictEqual([name1, name2, name3]);
            }
        );

        test
        (
            "Action without any of property accesses returns empty path", 
            () =>
            {
                expect(pathOf(() => {})).toStrictEqual([]);
            }
        );

        test
        (
            "Apply must throw TypeError", 
            () =>
            {
                expect(() => pathOf<Delegate>((instance) => instance())).toThrowError(TypeError);
            }
        );

        test
        (
            "Construct must throw TypeError", 
            () =>
            {
                expect(() => pathOf<typeof String>((instance) => new instance)).toThrowError(TypeError);
            }
        );

        test
        (
            "Define property throw ProxyOperationNotSupportedError", 
            () =>
            {
                expect
                (
                    () => pathOf<object>
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
                expect(() => pathOf<{ field?: string }>((instance) => delete instance.field)).toThrowError(ProxyOperationNotSupportedError);
            }
        );

        test
        (
            "Method Object.getOwnPropertyDescriptor must throw ProxyOperationNotSupportedError", 
            () =>
            {
                expect(() => pathOf<object>((instance) => Object.getOwnPropertyDescriptor(instance, "field"))).toThrowError(ProxyOperationNotSupportedError);
            }
        );

        test
        (
            "Method Object.getPrototypeOf must throw ProxyOperationNotSupportedError", 
            () =>
            {
                expect(() => pathOf<object>((instance) => Object.getPrototypeOf(instance))).toThrowError(ProxyOperationNotSupportedError);
            }
        );

        test
        (
            "Operator 'in' must throw ProxyOperationNotSupportedError", 
            () =>
            {
                expect(() => pathOf<object>((instance) => "field1" in instance)).toThrowError(ProxyOperationNotSupportedError);
            }
        );

        test
        (
            "Method Object.isExtensible must throw ProxyOperationNotSupportedError", 
            () =>
            {
                expect(() => pathOf<object>((instance) => Object.isExtensible(instance))).toThrowError(ProxyOperationNotSupportedError);
            }
        );

        test
        (
            "Method Reflect.ownKeys must throw ProxyOperationNotSupportedError", 
            () =>
            {
                expect(() => pathOf<object>((instance) => Reflect.ownKeys(instance))).toThrowError(ProxyOperationNotSupportedError);
            }
        );

        test
        (
            "Method Object.preventExtensions must throw ProxyOperationNotSupportedError", 
            () =>
            {
                expect(() => pathOf<object>((instance) => Object.preventExtensions(instance))).toThrowError(ProxyOperationNotSupportedError);
            }
        );

        test
        (
            "Operator Set must throw ProxyOperationNotSupportedError", 
            () =>
            {
                expect(() => pathOf<{ field?: string }>((instance) => instance.field = "test")).toThrowError(ProxyOperationNotSupportedError);
            }
        );

        test
        (
            "Method Object.setPrototypeOf must throw ProxyOperationNotSupportedError", 
            () =>
            {
                expect(() => pathOf<object>((instance) => Object.setPrototypeOf(instance, Object))).toThrowError(ProxyOperationNotSupportedError);
            }
        );

    }
);
