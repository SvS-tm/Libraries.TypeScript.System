import { describe, expect, test } from "@jest/globals";
import { omit } from "helpers/reflection/omit";

describe
(
    "omit", 
    () =>
    {
        test
        (
            "Returns null for null",
            () =>
            {
                expect(omit(null)).toBe(null);
            }
        );

        test
        (
            "Returns undefined for undefined",
            () =>
            {
                expect(omit(undefined)).toBe(undefined);
            }
        );

        test
        (
            "Removes specified regular fields",
            () =>
            {
                const field5 = Symbol("field5");

                const original = 
                {
                    field1: 1,
                    field2: "2",
                    field3: true,
                    field4: {},
                    [field5]: []
                };

                expect(omit(original, "field1", "field3"))
                    .toStrictEqual
                    (
                        {
                            field2: original.field2,
                            field4: original.field4,
                            [field5]: original[field5]
                        }
                    );
            }
        );

        test
        (
            "Removes specified number fields",
            () =>
            {
                const field5 = Symbol("field5");

                const original = 
                {
                    0: 1,
                    field2: "2",
                    1: true,
                    field4: {},
                    [field5]: []
                };

                expect(omit(original, 0, 1))
                    .toStrictEqual
                    (
                        {
                            field2: original.field2,
                            field4: original.field4,
                            [field5]: original[field5]
                        }
                    );
            }
        );

        test
        (
            "Removes specified symbol fields",
            () =>
            {
                const field1 = Symbol("field1");
                const field3 = Symbol("field3");
                const field5 = Symbol("field5");

                const original = 
                {
                    [field1]: 1,
                    field2: "2",
                    [field3]: true,
                    field4: {},
                    [field5]: []
                };

                expect(omit(original, field1, field3))
                    .toStrictEqual
                    (
                        {
                            field2: original.field2,
                            field4: original.field4,
                            [field5]: original[field5]
                        }
                    );
            }
        );
    }
);
