import { describe, expect, jest, test } from "@jest/globals";
import { isEmptyOrWhitespace } from "helpers/string/is-empty-or-whitespace";

describe
(
    "isEmptyOrWhiteSpace", 
    () =>
    {
        test
        (
            "Returns true for null", 
            () =>
            {
                expect(isEmptyOrWhitespace(null)).toBe(true);
            }
        );

        test
        (
            "Returns true for undefined", 
            () =>
            {
                expect(isEmptyOrWhitespace(undefined)).toBe(true);
            }
        );

        test
        (
            "Returns true for empty string", 
            () =>
            {
                expect(isEmptyOrWhitespace("")).toBe(true);
            }
        );

        test
        (
            "Returns true for spaces string", 
            () =>
            {
                expect(isEmptyOrWhitespace("   ")).toBe(true);
            }
        );

        test
        (
            "Returns true for tabs string", 
            () =>
            {
                expect(isEmptyOrWhitespace("\t\t\t")).toBe(true);
            }
        );

        test
        (
            "Returns true for tabs and spaces string", 
            () =>
            {
                expect(isEmptyOrWhitespace("  \t  \t\t  ")).toBe(true);
            }
        );

        test
        (
            "Returns false for non space or tabs string", 
            () =>
            {
                expect(isEmptyOrWhitespace("  \t  s\t\t  ")).toBe(false);
            }
        );
    }
);
