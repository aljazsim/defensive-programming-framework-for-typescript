import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { whenIsNullOrEmpty } from "../../source/collections/collection-when-extensions";
import { whenDoesMatch, whenIs, whenIsBetween, whenIsEqualTo, whenIsGreaterThan, whenIsGreaterThanOrEqualTo, whenIsInteger, whenIsLessThan, whenIsLessThanOrEqualTo, whenIsNull, whenIsNullOrWhiteSpace, whenIsOneOf, whenIsSubTypeOf, whenIsTypeOf } from "../../source/objects/object-when-extensions";
import { expect } from "chai";

describe("object can extensions", () =>
{
    describe("whenIs()", () =>
    {
        describe("success", () =>
        {
            it("should return \"aaa\"", () => expect(whenIs("aaa", x => true, "1")).to.equal("1"));
            it("should return 1", () => expect(whenIs(1, x => true, 2)).to.equal(2));
            it("should return \"aaa\"", () => expect(whenIs("aaa", x => false, "1")).to.equal("aaa"));
            it("should return 1", () => expect(whenIs(1, x => false, 2)).to.equal(1));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => whenIs("aaa", null, "1")).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for undefined", () => expect(() => whenIs("aaa", undefined, "1")).to.throw(ArgumentError, "Value cannot be null."));
        });

    });

    describe("whenIsBetween()", () =>
    {
        describe("success", () =>
        {
            it("should return null", () => expect(whenIsBetween(null, 1, 1, true, 9)).to.equal(null));
            it("should return undefined", () => expect(whenIsBetween(undefined, 1, 1, true, 9)).to.equal(undefined));
            it("should return null", () => expect(whenIsBetween(1, 1, 1, false, null)).to.equal(1));
            it("should return null", () => expect(whenIsBetween(1, 1, 1, false, undefined)).to.equal(1));

            it("should be between", () => expect(whenIsBetween(0, 1, 1, true, 9)).to.equal(0));
            it("should be between", () => expect(whenIsBetween(2, 1, 1, true, 9)).to.equal(2));
            it("should be between", () => expect(whenIsBetween(1, 1, 1, false, 9)).to.equal(1));
            it("should be between", () => expect(whenIsBetween(0, 1, 3, true, 9)).to.equal(0));
            it("should be between", () => expect(whenIsBetween(1, 1, 3, false, 9)).to.equal(1));
            it("should be between", () => expect(whenIsBetween(3, 1, 3, false, 9)).to.equal(3));
            it("should be between", () => expect(whenIsBetween(4, 1, 3, true, 9)).to.equal(4));
            it("should be between", () => expect(whenIsBetween(4, 1, 3, false, 9)).to.equal(4));
            it("should be between", () => expect(whenIsBetween(4, 1, 3, false, 9)).to.equal(4));
            it("should be between", () => expect(whenIsBetween("", "a", "a", true, "9")).to.equal(""));
            it("should be between", () => expect(whenIsBetween("b", "a", "a", true, "9")).to.equal("b"));
            it("should be between", () => expect(whenIsBetween("a", "a", "a", false, "9")).to.equal("a"));
            it("should be between", () => expect(whenIsBetween("a", "b", "c", true, "9")).to.equal("a"));
            it("should be between", () => expect(whenIsBetween("a", "a", "c", false, "9")).to.equal("a"));
            it("should be between", () => expect(whenIsBetween("c", "a", "c", false, "9")).to.equal("c"));
            it("should be between", () => expect(whenIsBetween("d", "a", "c", true, "9")).to.equal("d"));
            it("should be between", () => expect(whenIsBetween("d", "a", "c", false, "9")).to.equal("d"));

            it("should fail when between", () => expect(whenIsBetween(1, 1, 1, true, 9)).to.equal(9));
            it("should fail when between", () => expect(whenIsBetween(1, 1, 3, true, 9)).to.equal(9));
            it("should fail when between", () => expect(whenIsBetween(2, 1, 3, true, 9)).to.equal(9));
            it("should fail when between", () => expect(whenIsBetween(3, 1, 3, true, 9)).to.equal(9));
            it("should fail when between", () => expect(whenIsBetween(2, 1, 3, false, 9)).to.equal(9));
            it("should fail when between", () => expect(whenIsBetween("a", "a", "a", true, "9")).to.equal("9"));
            it("should fail when between", () => expect(whenIsBetween("a", "a", "c", true, "9")).to.equal("9"));
            it("should fail when between", () => expect(whenIsBetween("b", "a", "c", true, "9")).to.equal("9"));
            it("should fail when between", () => expect(whenIsBetween("c", "a", "c", true, "9")).to.equal("9"));
            it("should fail when between", () => expect(whenIsBetween("b", "a", "c", false, "9")).to.equal("9"));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => whenIsBetween(0, null, 1, true, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsBetween(0, undefined, 1, true, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsBetween(0, 1, null, true, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsBetween(0, 1, undefined, true, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsBetween(0, null, null, true, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsBetween(0, undefined, undefined, true, 9)).to.throw(ArgumentError, "Value cannot be null."));

        });
    });

    describe("whenIsEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should be equal", () => expect(whenIsEqualTo(<number>null, 1, 9)).to.equal(null));
            it("should be equal", () => expect(whenIsEqualTo(1, 2, <number>null)).to.equal(1));
            it("should be equal", () => expect(whenIsEqualTo(<number>undefined, 1, 9)).to.equal(undefined));
            it("should be equal", () => expect(whenIsEqualTo(1, 2, <number>undefined)).to.equal(1));
            it("should be equal", () => expect(whenIsEqualTo(1, 2, 9)).to.equal(1));
            it("should be equal", () => expect(whenIsEqualTo("a", "b", "9")).to.equal("a"));
            it("should be equal", () => expect(whenIsEqualTo(1, 1, 9)).to.equal(9));
            it("should be equal", () => expect(whenIsEqualTo("a", "a", "9")).to.equal("9"));
        });
    });

    describe("whenIsGreaterThan()", () =>
    {
        describe("success", () =>
        {
            it("should be greater than", () => expect(whenIsGreaterThan(<number>null, 1, 9)).to.equal(null));
            it("should be greater than", () => expect(whenIsGreaterThan(<number>undefined, 1, 9)).to.equal(undefined));
            it("should be greater than", () => expect(whenIsGreaterThan(0, 1, <number>null)).to.equal(0));
            it("should be greater than", () => expect(whenIsGreaterThan(0, 1, <number>undefined)).to.equal(0));
            it("should be greater than", () => expect(whenIsGreaterThan("a", "a", "9")).to.equal("a"));
            it("should be greater than", () => expect(whenIsGreaterThan("a", "b", "9")).to.equal("a"));
            it("should be greater than", () => expect(whenIsGreaterThan(1, 1, 9)).to.equal(1));
            it("should be greater than", () => expect(whenIsGreaterThan(1, 2, 9)).to.equal(1));

            it("should fail when greater than", () => expect(whenIsGreaterThan("b", "a", "9")).to.equal("9"));
            it("should fail when greater than", () => expect(whenIsGreaterThan("a", "A", "9")).to.equal("9"));
            it("should fail when greater than", () => expect(whenIsGreaterThan(1, 0, 9)).to.equal(9));
            it("should fail when greater than", () => expect(whenIsGreaterThan(1, -1, 9)).to.equal(9));
        });

        describe("failure", () =>
        {
            it("should fail when greater than", () => expect(() => whenIsGreaterThan(1, null, <number>9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => whenIsGreaterThan(1, undefined, <number>9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => whenIsGreaterThan(null, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => whenIsGreaterThan(null, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => whenIsGreaterThan(undefined, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => whenIsGreaterThan(undefined, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("whenIsGreaterThanOrEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo(<number>null, 1, 9)).to.equal(null));
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo(<number>undefined, 1, 9)).to.equal(undefined));
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo(0, 1, <number>null)).to.equal(0));
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo(0, 1, <number>undefined)).to.equal(0));
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo("a", "b", "9")).to.equal("a"));
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo("a", "c", "9")).to.equal("a"));
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo(1, 2, 9)).to.equal(1));
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo(1, 3, 9)).to.equal(1));

            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo("b", "a", "9")).to.equal("9"));
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo("a", "A", "9")).to.equal("9"));
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo(1, 0, 9)).to.equal(9));
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo(1, -1, 9)).to.equal(9));
        });

        describe("failure", () =>
        {
            it("should fail when greater than or equal to", () => expect(() => whenIsGreaterThanOrEqualTo(1, <number>null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => whenIsGreaterThanOrEqualTo(1, <number>undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => whenIsGreaterThanOrEqualTo(null, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => whenIsGreaterThanOrEqualTo(null, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => whenIsGreaterThanOrEqualTo(undefined, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => whenIsGreaterThanOrEqualTo(undefined, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("whenIsLessThan()", () =>
    {
        describe("success", () =>
        {
            it("should be less than", () => expect(whenIsLessThan(<number>null, 1, 9)).to.equal(null));
            it("should be less than", () => expect(whenIsLessThan(<number>undefined, 1, 9)).to.equal(undefined));
            it("should be less than", () => expect(whenIsLessThan(2, 1, <number>null)).to.equal(2));
            it("should be less than", () => expect(whenIsLessThan(2, 1, <number>undefined)).to.equal(2));
            it("should be less than", () => expect(whenIsLessThan("a", "a", "9")).to.equal("a"));
            it("should be less than", () => expect(whenIsLessThan("b", "a", "9")).to.equal("b"));
            it("should be less than", () => expect(whenIsLessThan(1, 1, 9)).to.equal(1));
            it("should be less than", () => expect(whenIsLessThan(2, 1, 9)).to.equal(2));
            it("should be less than", () => expect(whenIsLessThan("a", "b", "9")).to.equal("9"));
            it("should be less than", () => expect(whenIsLessThan("A", "a", "9")).to.equal("9"));
            it("should be less than", () => expect(whenIsLessThan(0, 1, 9)).to.equal(9));
            it("should be less than", () => expect(whenIsLessThan(-1, 1, 9)).to.equal(9));
        });

        describe("failure", () =>
        {
            it("should fail when less than", () => expect(() => whenIsLessThan(1, <number>null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => whenIsLessThan(1, <number>undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => whenIsLessThan(null, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => whenIsLessThan(null, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => whenIsLessThan(undefined, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => whenIsLessThan(undefined, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));

        });
    });

    describe("whenIsGreaterThanOrEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should be less than or equal to", () => expect(whenIsLessThanOrEqualTo(<number>null, 1, 9)).to.equal(null));
            it("should be less than or equal to", () => expect(whenIsLessThanOrEqualTo(<number>undefined, 1, 9)).to.equal(undefined));
            it("should be less than or equal to", () => expect(whenIsLessThanOrEqualTo("b", "a", "9")).to.equal("b"));
            it("should be less than or equal to", () => expect(whenIsLessThanOrEqualTo("c", "a", "9")).to.equal("c"));
            it("should be less than or equal to", () => expect(whenIsLessThanOrEqualTo(2, 1, 9)).to.equal(2));
            it("should be less than or equal to", () => expect(whenIsLessThanOrEqualTo(3, 1, 9)).to.equal(3));

            it("should be less than or equal to", () => expect(whenIsLessThanOrEqualTo("a", "b", "9")).to.equal("9"));
            it("should be less than or equal to", () => expect(whenIsLessThanOrEqualTo("A", "a", "9")).to.equal("9"));
            it("should be less than or equal to", () => expect(whenIsLessThanOrEqualTo(0, 1, 9)).to.equal(9));
            it("should be less than or equal to", () => expect(whenIsLessThanOrEqualTo(-1, 1, 9)).to.equal(9));
        });

        describe("failure", () =>
        {
            it("should fail when null", () => expect(() => whenIsLessThanOrEqualTo(1, <number>null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => whenIsLessThanOrEqualTo(1, <number>undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => whenIsLessThanOrEqualTo(null, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => whenIsLessThanOrEqualTo(null, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => whenIsLessThanOrEqualTo(undefined, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => whenIsLessThanOrEqualTo(undefined, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("whenIsInteger()", () =>
    {
        describe("success", () =>
        {
            it("should not be integer", () => expect(whenIsInteger(null, 9)).to.equal(null));
            it("should not be integer", () => expect(whenIsInteger(undefined, 9)).to.equal(undefined));

            it("should not be integer", () => expect(whenIsInteger(3.1, 9)).to.equal(3.1));
            it("should not be integer", () => expect(whenIsInteger(3.14, 9)).to.equal(3.14));
            it("should not be integer", () => expect(whenIsInteger(3.14159265359, 9)).to.equal(3.14159265359));

            it("should be integer", () => expect(whenIsInteger(-100, 9)).to.equal(9));
            it("should be integer", () => expect(whenIsInteger(-1, 9)).to.equal(9));
            it("should be integer", () => expect(whenIsInteger(0, 9)).to.equal(9));
            it("should be integer", () => expect(whenIsInteger(2, 9)).to.equal(9));
            it("should be integer", () => expect(whenIsInteger(200, 9)).to.equal(9));
        });
    });

    describe("whenIsNull()", () =>
    {
        describe("success", () =>
        {
            it("should be null", () => expect(whenIsNull(0, 9)).to.equal(0));
            it("should be null", () => expect(whenIsNull(1, 9)).to.equal(1));
            it("should be null", () => expect(whenIsNull("aaa", "9")).to.equal("aaa"));
            it("should be null", () => expect(whenIsNull(null, 9)).to.equal(9));
            it("should be null", () => expect(whenIsNull(undefined, 9)).to.equal(9));
        });
    });

    describe("whenIsNullOrEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should be valid", () => expect(whenIsNullOrEmpty(null, "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNullOrEmpty(undefined, "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNullOrEmpty("", "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNullOrEmpty("a", "9")).to.equal("a"));
            it("should be valid", () => expect(whenIsNullOrEmpty("aa", "9")).to.equal("aa"));
            it("should be valid", () => expect(whenIsNullOrEmpty("aaa", "9")).to.equal("aaa"));
        });
    });

    describe("mustIsNullOrWhiteSpace()", () =>
    {
        describe("success", () =>
        {
            it("should be valid", () => expect(whenIsNullOrWhiteSpace(null, "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNullOrWhiteSpace(undefined, "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNullOrWhiteSpace("", "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNullOrWhiteSpace("\t", "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNullOrWhiteSpace("     \t ", "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNullOrWhiteSpace("   ", "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNullOrWhiteSpace("a", "9")).to.equal("a"));
            it("should be valid", () => expect(whenIsNullOrWhiteSpace("aa", "9")).to.equal("aa"));
            it("should be valid", () => expect(whenIsNullOrWhiteSpace("aaa", "9")).to.equal("aaa"));
            it("should be valid", () => expect(whenIsNullOrWhiteSpace(" a a a ", "9")).to.equal(" a a a "));
        });
    });

    describe("whenIsOfType()", () =>
    {
        describe("success", () =>
        {
            it("should be of type", () => expect(whenIsTypeOf(null, "string", "9")).to.equal(null));
            it("should be of type", () => expect(whenIsTypeOf(undefined, "string", "9")).to.equal(undefined));
            it("should be of type", () => expect(whenIsTypeOf(0, "string", 9)).to.equal(0));
            it("should be of type", () => expect(whenIsTypeOf("a", "number", "9")).to.equal("a"));
            it("should be of type", () => expect(whenIsTypeOf({ "a": 3 }, "number", { "b": 3 })).to.eql({ "a": 3 }));

            it("should be of type", () => expect(whenIsTypeOf("a", "string", "9")).to.equal("9"));
            it("should be of type", () => expect(whenIsTypeOf(1, "number", 9)).to.equal(9));
            it("should be of type", () => expect(whenIsTypeOf({ "a": 3 }, "object", { "b": 3 })).to.eql({ "b": 3 }));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => whenIsTypeOf(null, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsTypeOf(null, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("whenIsOneOf()", () =>
    {
        describe("success", () =>
        {
            it("should be one of", () => expect(whenIsOneOf(null, [1], 9)).to.equal(null));
            it("should be one of", () => expect(whenIsOneOf(undefined, [1], 9)).to.equal(undefined));
            it("should be one of", () => expect(whenIsOneOf(0, [1], 9)).to.equal(0));
            it("should be one of", () => expect(whenIsOneOf("a", ["b"], "9")).to.equal("a"));
            it("should not be one of", () => expect(whenIsOneOf({ "a": 3 }, [{ "b": 3 }], { "c": 3 })).to.eql({ "a": 3 }));
            it("should not be one of", () => expect(whenIsOneOf(1, [0, 1, 2, 3], 9)).to.equal(9));
            it("should not be one of", () => expect(whenIsOneOf("a", ["a", "b", "c"], "9")).to.equal("9"));
        });
    });

    describe("whenIsSubTypeOf()", () =>
    {
        describe("success", () =>
        {
            it("should be subtype of", () => expect(whenIsSubTypeOf(1, Error, 2)).to.eql(1));
            it("should be subtype of", () => expect(whenIsSubTypeOf("a", Error, "b")).to.eql("a"));
            it("should bes subtype of", () => expect(whenIsSubTypeOf(new ArgumentError("test"), Error, null)).to.equals(null));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => whenIsSubTypeOf(new ArgumentError("test"), null, new Error("test"))).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsSubTypeOf(new ArgumentError("test"), undefined, new Error("test"))).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("whenDoesMatch()", () =>
    {
        describe("success", () =>
        {
            it("should match", () => expect(whenDoesMatch(null, /a/, "9")).to.equal(null));
            it("should match", () => expect(whenDoesMatch(undefined, /a/, "9")).to.equal(undefined));
            it("should match", () => expect(whenDoesMatch("a", /\\./, "9")).to.equal("a"));
            it("should match", () => expect(whenDoesMatch("a", /b/, "9")).to.equal("a"));
            it("should match", () => expect(whenDoesMatch("b", /a/, "9")).to.equal("b"));
            it("should match", () => expect(whenDoesMatch("a tree and a rock", /^[a-z]+$/, "9")).to.equal("a tree and a rock"));
            it("should match", () => expect(whenDoesMatch("d64af57b5bbb5c65", /^[0-9]+$/, "9")).to.equal("d64af57b5bbb5c65"));
            it("should match", () => expect(whenDoesMatch("353644353i345345", /^[0-9]+$/, "9")).to.equal("353644353i345345"));
            it("should match", () => expect(whenDoesMatch("123", /^[0-9]+$/, "9")).to.equal("9"));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => whenDoesMatch("a", null, "9")).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenDoesMatch("a", undefined, "9")).to.throw(ArgumentError, "Value cannot be null."));
        });
    });
});
