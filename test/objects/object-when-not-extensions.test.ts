import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { whenIsNotNullOrEmpty } from "../../source/collections/collection-when-not-extensions";
import { whenDoesNotMatch, whenIsNot, whenIsNotBetween, whenIsNotEqualTo, whenIsNotGreaterThan, whenIsNotGreaterThanOrEqualTo, whenIsNotInteger, whenIsNotLessThan, whenIsNotLessThanOrEqualTo, whenIsNotNull, whenIsNotNullOrWhiteSpace, whenIsNotOneOf, whenIsNotSubTypeOf, whenIsNotTypeOf } from "../../source/objects/object-when-not-extensions";
import { expect } from "chai";

describe("object cannot extensions", () =>
{
    describe("whenIsNot()", () =>
    {
        describe("success", () =>
        {
            it("should return \"aaa\"", () => expect(whenIsNot("aaa", x => false, "1")).to.equal("1"));
            it("should return 1", () => expect(whenIsNot(1, x => false, 2)).to.equal(2));
            it("should return \"aaa\"", () => expect(whenIsNot("aaa", x => true, "1")).to.equal("aaa"));
            it("should return 1", () => expect(whenIsNot(1, x => true, 2)).to.equal(1));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => whenIsNot("aaa", null, "1")).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for undefined", () => expect(() => whenIsNot("aaa", undefined, "1")).to.throw(ArgumentError, "Value cannot be null."));
        });

    });

    describe("whenIsNotBetween()", () =>
    {
        describe("success", () =>
        {
            it("should return null", () => expect(whenIsNotBetween(null, 1, 1, true, 9)).to.equal(9));
            it("should return undefined", () => expect(whenIsNotBetween(undefined, 1, 1, true, 9)).to.equal(9));
            it("should return null", () => expect(whenIsNotBetween(1, 1, 1, false, null)).to.equal(null));
            it("should return null", () => expect(whenIsNotBetween(1, 1, 1, false, undefined)).to.equal(undefined));

            it("should not be between", () => expect(whenIsNotBetween(0, 1, 1, true, 9)).to.equal(9));
            it("should not be between", () => expect(whenIsNotBetween(2, 1, 1, true, 9)).to.equal(9));
            it("should not be between", () => expect(whenIsNotBetween(1, 1, 1, false, 9)).to.equal(9));
            it("should not be between", () => expect(whenIsNotBetween(0, 1, 3, true, 9)).to.equal(9));
            it("should not be between", () => expect(whenIsNotBetween(1, 1, 3, false, 9)).to.equal(9));
            it("should not be between", () => expect(whenIsNotBetween(3, 1, 3, false, 9)).to.equal(9));
            it("should not be between", () => expect(whenIsNotBetween(4, 1, 3, true, 9)).to.equal(9));
            it("should not be between", () => expect(whenIsNotBetween(4, 1, 3, false, 9)).to.equal(9));
            it("should not be between", () => expect(whenIsNotBetween(4, 1, 3, false, 9)).to.equal(9));
            it("should not be between", () => expect(whenIsNotBetween("", "a", "a", true, "9")).to.equal("9"));
            it("should not be between", () => expect(whenIsNotBetween("b", "a", "a", true, "9")).to.equal("9"));
            it("should not be between", () => expect(whenIsNotBetween("a", "a", "a", false, "9")).to.equal("9"));
            it("should not be between", () => expect(whenIsNotBetween("a", "b", "c", true, "9")).to.equal("9"));
            it("should not be between", () => expect(whenIsNotBetween("a", "a", "c", false, "9")).to.equal("9"));
            it("should not be between", () => expect(whenIsNotBetween("c", "a", "c", false, "9")).to.equal("9"));
            it("should not be between", () => expect(whenIsNotBetween("d", "a", "c", true, "9")).to.equal("9"));
            it("should not be between", () => expect(whenIsNotBetween("d", "a", "c", false, "9")).to.equal("9"));

            it("should fail when between", () => expect(whenIsNotBetween(1, 1, 1, true, 9)).to.equal(1));
            it("should fail when between", () => expect(whenIsNotBetween(1, 1, 3, true, 9)).to.equal(1));
            it("should fail when between", () => expect(whenIsNotBetween(2, 1, 3, true, 9)).to.equal(2));
            it("should fail when between", () => expect(whenIsNotBetween(3, 1, 3, true, 9)).to.equal(3));
            it("should fail when between", () => expect(whenIsNotBetween(2, 1, 3, false, 9)).to.equal(2));
            it("should fail when between", () => expect(whenIsNotBetween("a", "a", "a", true, "9")).to.equal("a"));
            it("should fail when between", () => expect(whenIsNotBetween("a", "a", "c", true, "9")).to.equal("a"));
            it("should fail when between", () => expect(whenIsNotBetween("b", "a", "c", true, "9")).to.equal("b"));
            it("should fail when between", () => expect(whenIsNotBetween("c", "a", "c", true, "9")).to.equal("c"));
            it("should fail when between", () => expect(whenIsNotBetween("b", "a", "c", false, "9")).to.equal("b"));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => whenIsNotBetween(0, null, 1, true, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsNotBetween(0, undefined, 1, true, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsNotBetween(0, 1, null, true, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsNotBetween(0, 1, undefined, true, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsNotBetween(0, null, null, true, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsNotBetween(0, undefined, undefined, true, 9)).to.throw(ArgumentError, "Value cannot be null."));

        });
    });

    describe("whenIsNotEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should not be equal", () => expect(whenIsNotEqualTo(<number>null, 1, 9)).to.equal(9));
            it("should not be equal", () => expect(whenIsNotEqualTo(1, 2, <number>null)).to.equal(null));
            it("should not be equal", () => expect(whenIsNotEqualTo(<number>undefined, 1, 9)).to.equal(9));
            it("should not be equal", () => expect(whenIsNotEqualTo(1, 2, <number>undefined)).to.equal(undefined));
            it("should not be equal", () => expect(whenIsNotEqualTo(1, 2, 9)).to.equal(9));
            it("should not be equal", () => expect(whenIsNotEqualTo("a", "b", "9")).to.equal("9"));
            it("should be equal", () => expect(whenIsNotEqualTo(1, 1, 9)).to.equal(1));
            it("should be equal", () => expect(whenIsNotEqualTo("a", "a", "9")).to.equal("a"));
        });
    });

    describe("whenIsNotGreaterThan()", () =>
    {
        describe("success", () =>
        {
            it("should not be greater than", () => expect(whenIsNotGreaterThan(<number>null, 1, 9)).to.equal(9));
            it("should not be greater than", () => expect(whenIsNotGreaterThan(<number>undefined, 1, 9)).to.equal(9));
            it("should not be greater than", () => expect(whenIsNotGreaterThan(0, 1, <number>null)).to.equal(null));
            it("should not be greater than", () => expect(whenIsNotGreaterThan(0, 1, <number>undefined)).to.equal(undefined));
            it("should not be greater than", () => expect(whenIsNotGreaterThan("a", "a", "9")).to.equal("9"));
            it("should not be greater than", () => expect(whenIsNotGreaterThan("a", "b", "9")).to.equal("9"));
            it("should not be greater than", () => expect(whenIsNotGreaterThan(1, 1, 9)).to.equal(9));
            it("should not be greater than", () => expect(whenIsNotGreaterThan(1, 2, 9)).to.equal(9));

            it("should fail when greater than", () => expect(whenIsNotGreaterThan("b", "a", "9")).to.equal("b"));
            it("should fail when greater than", () => expect(whenIsNotGreaterThan("a", "A", "9")).to.equal("a"));
            it("should fail when greater than", () => expect(whenIsNotGreaterThan(1, 0, 9)).to.equal(1));
            it("should fail when greater than", () => expect(whenIsNotGreaterThan(1, -1, 9)).to.equal(1));
        });

        describe("failure", () =>
        {
            it("should fail when greater than", () => expect(() => whenIsNotGreaterThan(1, null, <number>9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => whenIsNotGreaterThan(1, undefined, <number>9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => whenIsNotGreaterThan(null, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => whenIsNotGreaterThan(null, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => whenIsNotGreaterThan(undefined, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => whenIsNotGreaterThan(undefined, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("whenIsNotGreaterThanOrEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should not be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo(<number>null, 1, 9)).to.equal(9));
            it("should not be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo(<number>undefined, 1, 9)).to.equal(9));
            it("should not be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo(0, 1, <number>null)).to.equal(null));
            it("should not be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo(0, 1, <number>undefined)).to.equal(undefined));
            it("should not be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo("a", "b", "9")).to.equal("9"));
            it("should not be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo("a", "c", "9")).to.equal("9"));
            it("should not be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo(1, 2, 9)).to.equal(9));
            it("should not be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo(1, 3, 9)).to.equal(9));

            it("should be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo("b", "a", "9")).to.equal("b"));
            it("should be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo("a", "A", "9")).to.equal("a"));
            it("should be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo(1, 0, 9)).to.equal(1));
            it("should be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo(1, -1, 9)).to.equal(1));
        });

        describe("failure", () =>
        {
            it("should fail when greater than or equal to", () => expect(() => whenIsNotGreaterThanOrEqualTo(1, <number>null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => whenIsNotGreaterThanOrEqualTo(1, <number>undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => whenIsNotGreaterThanOrEqualTo(null, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => whenIsNotGreaterThanOrEqualTo(null, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => whenIsNotGreaterThanOrEqualTo(undefined, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => whenIsNotGreaterThanOrEqualTo(undefined, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("whenIsNotLessThan()", () =>
    {
        describe("success", () =>
        {
            it("should not be less than", () => expect(whenIsNotLessThan(<number>null, 1, 9)).to.equal(9));
            it("should not be less than", () => expect(whenIsNotLessThan(<number>undefined, 1, 9)).to.equal(9));
            it("should not be less than", () => expect(whenIsNotLessThan(2, 1, <number>null)).to.equal(null));
            it("should not be less than", () => expect(whenIsNotLessThan(2, 1, <number>undefined)).to.equal(undefined));
            it("should not be less than", () => expect(whenIsNotLessThan("a", "a", "9")).to.equal("9"));
            it("should not be less than", () => expect(whenIsNotLessThan("b", "a", "9")).to.equal("9"));
            it("should not be less than", () => expect(whenIsNotLessThan(1, 1, 9)).to.equal(9));
            it("should not be less than", () => expect(whenIsNotLessThan(2, 1, 9)).to.equal(9));
            it("should be less than", () => expect(whenIsNotLessThan("a", "b", "9")).to.equal("a"));
            it("should be less than", () => expect(whenIsNotLessThan("A", "a", "9")).to.equal("A"));
            it("should be less than", () => expect(whenIsNotLessThan(0, 1, 9)).to.equal(0));
            it("should be less than", () => expect(whenIsNotLessThan(-1, 1, 9)).to.equal(-1));
        });

        describe("failure", () =>
        {
            it("should fail when less than", () => expect(() => whenIsNotLessThan(1, <number>null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => whenIsNotLessThan(1, <number>undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => whenIsNotLessThan(null, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => whenIsNotLessThan(null, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => whenIsNotLessThan(undefined, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => whenIsNotLessThan(undefined, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));

        });
    });

    describe("whenIsNotGreaterThanOrEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should not be less than or equal to", () => expect(whenIsNotLessThanOrEqualTo(<number>null, 1, 9)).to.equal(9));
            it("should not be less than or equal to", () => expect(whenIsNotLessThanOrEqualTo(<number>undefined, 1, 9)).to.equal(9));
            it("should not be less than or equal to", () => expect(whenIsNotLessThanOrEqualTo("b", "a", "9")).to.equal("9"));
            it("should not be less than or equal to", () => expect(whenIsNotLessThanOrEqualTo("c", "a", "9")).to.equal("9"));
            it("should not be less than or equal to", () => expect(whenIsNotLessThanOrEqualTo(2, 1, 9)).to.equal(9));
            it("should not be less than or equal to", () => expect(whenIsNotLessThanOrEqualTo(3, 1, 9)).to.equal(9));

            it("should be less than or equal to", () => expect(whenIsNotLessThanOrEqualTo("a", "b", "9")).to.equal("a"));
            it("should be less than or equal to", () => expect(whenIsNotLessThanOrEqualTo("A", "a", "9")).to.equal("A"));
            it("should be less than or equal to", () => expect(whenIsNotLessThanOrEqualTo(0, 1, 9)).to.equal(0));
            it("should be less than or equal to", () => expect(whenIsNotLessThanOrEqualTo(-1, 1, 9)).to.equal(-1));
        });

        describe("failure", () =>
        {
            it("should fail when null", () => expect(() => whenIsNotLessThanOrEqualTo(1, <number>null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => whenIsNotLessThanOrEqualTo(1, <number>undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => whenIsNotLessThanOrEqualTo(null, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => whenIsNotLessThanOrEqualTo(null, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => whenIsNotLessThanOrEqualTo(undefined, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => whenIsNotLessThanOrEqualTo(undefined, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("whenIsNotInteger()", () =>
    {
        describe("success", () =>
        {
            it("should not be integer", () => expect(whenIsNotInteger(null, 9)).to.equal(9));
            it("should not be integer", () => expect(whenIsNotInteger(undefined, 9)).to.equal(9));

            it(", 1should not be integer", () => expect(whenIsNotInteger(3.1, 9)).to.equal(9));
            it("sh, 1ould not be integer", () => expect(whenIsNotInteger(3.14, 9)).to.equal(9));
            it("should not be integer", () => expect(whenIsNotInteger(3.14159265359, 9)).to.equal(9));

            it("should be integer", () => expect(whenIsNotInteger(-100, 9)).to.equal(-100));
            it("should be integer", () => expect(whenIsNotInteger(-1, 9)).to.equal(-1));
            it("should be integer", () => expect(whenIsNotInteger(0, 9)).to.equal(0));
            it("should be integer", () => expect(whenIsNotInteger(2, 9)).to.equal(2));
            it("should be integer", () => expect(whenIsNotInteger(200, 9)).to.equal(200));
        });
    });

    describe("whenIsNotNull()", () =>
    {
        describe("success", () =>
        {
            it("should be not null", () => expect(whenIsNotNull(0, 9)).to.equal(9));
            it("should be not null", () => expect(whenIsNotNull(1, 9)).to.equal(9));
            it("should be not null", () => expect(whenIsNotNull("aaa", "9")).to.equal("9"));
            it("should be null", () => expect(whenIsNotNull(null, 9)).to.equal(null));
            it("should be null", () => expect(whenIsNotNull(undefined, 9)).to.equal(undefined));
        });
    });

    describe("whenIsNotNullOrEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should be valid", () => expect(whenIsNotNullOrEmpty(null, "9")).to.equal(null));
            it("should be valid", () => expect(whenIsNotNullOrEmpty(undefined, "9")).to.equal(undefined));
            it("should be valid", () => expect(whenIsNotNullOrEmpty("", "9")).to.equal(""));
            it("should be valid", () => expect(whenIsNotNullOrEmpty("a", "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNotNullOrEmpty("aa", "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNotNullOrEmpty("aaa", "9")).to.equal("9"));
        });
    });

    describe("mustIsNotNullOrWhiteSpace()", () =>
    {
        describe("success", () =>
        {
            it("should be valid", () => expect(whenIsNotNullOrWhiteSpace(null, "9")).to.equal(null));
            it("should be valid", () => expect(whenIsNotNullOrWhiteSpace(undefined, "9")).to.equal(undefined));
            it("should be valid", () => expect(whenIsNotNullOrWhiteSpace("", "9")).to.equal(""));
            it("should be valid", () => expect(whenIsNotNullOrWhiteSpace("\t", "9")).to.equal("\t"));
            it("should be valid", () => expect(whenIsNotNullOrWhiteSpace("     \t ", "9")).to.equal("     \t "));
            it("should be valid", () => expect(whenIsNotNullOrWhiteSpace("   ", "9")).to.equal("   "));
            it("should be valid", () => expect(whenIsNotNullOrWhiteSpace("a", "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNotNullOrWhiteSpace("aa", "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNotNullOrWhiteSpace("aaa", "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNotNullOrWhiteSpace(" a a a ", "9")).to.equal("9"));
        });
    });

    describe("whenIsNotOfType()", () =>
    {
        describe("success", () =>
        {
            it("should not be of type", () => expect(whenIsNotTypeOf(null, "string", "9")).to.equal("9"));
            it("should not be of type", () => expect(whenIsNotTypeOf(undefined, "string", "9")).to.equal("9"));
            it("should not be of type", () => expect(whenIsNotTypeOf(0, "string", 9)).to.equal(9));
            it("should not be of type", () => expect(whenIsNotTypeOf("a", "number", "9")).to.equal("9"));
            it("should not be of type", () => expect(whenIsNotTypeOf({ "a": 3 }, "number", { "b": 3 })).to.eql({ "b": 3 }));

            it("should be of type", () => expect(whenIsNotTypeOf("a", "string", "9")).to.equal("a"));
            it("should be of type", () => expect(whenIsNotTypeOf(1, "number", 9)).to.equal(1));
            it("should be of type", () => expect(whenIsNotTypeOf({ "a": 3 }, "object", { "b": 3 })).to.eql({ "a": 3 }));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => whenIsNotTypeOf(null, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsNotTypeOf(null, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("whenIsNotOneOf()", () =>
    {
        describe("success", () =>
        {
            it("should not be one of", () => expect(whenIsNotOneOf(null, [1], 9)).to.equal(9));
            it("should not be one of", () => expect(whenIsNotOneOf(undefined, [1], 9)).to.equal(9));
            it("should not be one of", () => expect(whenIsNotOneOf(0, [1], 9)).to.equal(9));
            it("should not be one of", () => expect(whenIsNotOneOf("a", ["b"], "9")).to.equal("9"));
            it("should not be one of", () => expect(whenIsNotOneOf({ "a": 3 }, [{ "b": 3 }], { "c": 3 })).to.eql({ "c": 3 }));
            it("should be one of", () => expect(whenIsNotOneOf(1, [0, 1, 2, 3], 9)).to.equal(1));
            it("should be one of", () => expect(whenIsNotOneOf("a", ["a", "b", "c"], "9")).to.equal("a"));
        });
    });

    describe("whenIsNotSubTypeOf()", () =>
    {
        describe("success", () =>
        {
            const temp = new ArgumentError("test");

            it("should not be subtype of", () => expect(whenIsNotSubTypeOf(1, Error, 2)).to.eql(2));
            it("should not be subtype of", () => expect(whenIsNotSubTypeOf("a", Error, "b")).to.eql("b"));
            it("should bes subtype of", () => expect(whenIsNotSubTypeOf(temp, Error, null)).to.equals(temp));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => whenIsNotSubTypeOf(new ArgumentError("test"), null, new Error("test"))).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsNotSubTypeOf(new ArgumentError("test"), undefined, new Error("test"))).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("whenDoesNotMatch()", () =>
    {
        describe("success", () =>
        {
            it("should not match", () => expect(whenDoesNotMatch(null, /a/, "9")).to.equal("9"));
            it("should not match", () => expect(whenDoesNotMatch(undefined, /a/, "9")).to.equal("9"));
            it("should not match", () => expect(whenDoesNotMatch("a", /\\./, "9")).to.equal("9"));
            it("should not match", () => expect(whenDoesNotMatch("a", /b/, "9")).to.equal("9"));
            it("should not match", () => expect(whenDoesNotMatch("b", /a/, "9")).to.equal("9"));
            it("should not match", () => expect(whenDoesNotMatch("a tree and a rock", /^[a-z]+$/, "9")).to.equal("9"));
            it("should not match", () => expect(whenDoesNotMatch("d64af57b5bbb5c65", /^[0-9]+$/, "9")).to.equal("9"));
            it("should not match", () => expect(whenDoesNotMatch("353644353i345345", /^[0-9]+$/, "9")).to.equal("9"));
            it("should match", () => expect(whenDoesNotMatch("123", /^[0-9]+$/, "9")).to.equal("123"));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => whenDoesNotMatch("a", null, "9")).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenDoesNotMatch("a", undefined, "9")).to.throw(ArgumentError, "Value cannot be null."));
        });
    });
});
