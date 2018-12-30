import "mocha";
import { isNullOrEmpty } from "../../source";
import { ArgumentError } from "../../source/argument-error";
import { doesMatch, is, isBetween, isEqualTo, isGreaterThan, isGreaterThanOrEqualTo, isInteger, isLessThan, isLessThanOrEqualTo, isNull, isNullOrWhiteSpace, isOneOf, isSubTypeOf, isTypeOf } from "../../source/objects/object-is-extensions";
import { expect } from "chai";

describe("object can extensions", () =>
{
    describe("is()", () =>
    {
        describe("success", () =>
        {
            it("should return \"aaa\"", () => expect(is("aaa", x => true)).to.equal(true));
            it("should return 1", () => expect(is(1, x => true)).to.equal(true));
            it("should return \"aaa\"", () => expect(is("aaa", x => false)).to.equal(false));
            it("should return 1", () => expect(is(1, x => false)).to.equal(false));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => is("aaa", null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for undefined", () => expect(() => is("aaa", undefined)).to.throw(ArgumentError, "Value cannot be null."));
        });

    });

    describe("isBetween()", () =>
    {
        describe("success", () =>
        {
            it("should return null", () => expect(isBetween(null, 1, 1, true)).to.equal(false));
            it("should return undefined", () => expect(isBetween(undefined, 1, 1, true)).to.equal(false));
            it("should return null", () => expect(isBetween(1, 1, 1, false)).to.equal(false));
            it("should return null", () => expect(isBetween(1, 1, 1, false)).to.equal(false));

            it("should be between", () => expect(isBetween(0, 1, 1, true)).to.equal(false));
            it("should be between", () => expect(isBetween(2, 1, 1, true)).to.equal(false));
            it("should be between", () => expect(isBetween(1, 1, 1, false)).to.equal(false));
            it("should be between", () => expect(isBetween(0, 1, 3, true)).to.equal(false));
            it("should be between", () => expect(isBetween(1, 1, 3, false)).to.equal(false));
            it("should be between", () => expect(isBetween(3, 1, 3, false)).to.equal(false));
            it("should be between", () => expect(isBetween(4, 1, 3, true)).to.equal(false));
            it("should be between", () => expect(isBetween(4, 1, 3, false)).to.equal(false));
            it("should be between", () => expect(isBetween(4, 1, 3, false)).to.equal(false));
            it("should be between", () => expect(isBetween("", "a", "a", true)).to.equal(false));
            it("should be between", () => expect(isBetween("b", "a", "a", true)).to.equal(false));
            it("should be between", () => expect(isBetween("a", "a", "a", false)).to.equal(false));
            it("should be between", () => expect(isBetween("a", "b", "c", true)).to.equal(false));
            it("should be between", () => expect(isBetween("a", "a", "c", false)).to.equal(false));
            it("should be between", () => expect(isBetween("c", "a", "c", false)).to.equal(false));
            it("should be between", () => expect(isBetween("d", "a", "c", true)).to.equal(false));
            it("should be between", () => expect(isBetween("d", "a", "c", false)).to.equal(false));

            it("should not be between", () => expect(isBetween(1, 1, 1, true)).to.equal(true));
            it("should not be between", () => expect(isBetween(1, 1, 3, true)).to.equal(true));
            it("should not be between", () => expect(isBetween(2, 1, 3, true)).to.equal(true));
            it("should not be between", () => expect(isBetween(3, 1, 3, true)).to.equal(true));
            it("should not be between", () => expect(isBetween(2, 1, 3, false)).to.equal(true));
            it("should not be between", () => expect(isBetween("a", "a", "a", true)).to.equal(true));
            it("should not be between", () => expect(isBetween("a", "a", "c", true)).to.equal(true));
            it("should not be between", () => expect(isBetween("b", "a", "c", true)).to.equal(true));
            it("should not be between", () => expect(isBetween("c", "a", "c", true)).to.equal(true));
            it("should not be between", () => expect(isBetween("b", "a", "c", false)).to.equal(true));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => isBetween(0, null, 1, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => isBetween(0, undefined, 1, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => isBetween(0, 1, null, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => isBetween(0, 1, undefined, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => isBetween(0, null, null, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => isBetween(0, undefined, undefined, true)).to.throw(ArgumentError, "Value cannot be null."));

        });
    });

    describe("isEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should be equal", () => expect(isEqualTo(null, null)).to.equal(true));
            it("should be equal", () => expect(isEqualTo(undefined, undefined)).to.equal(true));
            it("should be equal", () => expect(isEqualTo(undefined, null)).to.equal(true));
            it("should be equal", () => expect(isEqualTo(null, undefined)).to.equal(true));

            it("should be equal", () => expect(isEqualTo(<number>null, 1)).to.equal(false));
            it("should be equal", () => expect(isEqualTo(1, 2)).to.equal(false));
            it("should be equal", () => expect(isEqualTo(<number>undefined, 1)).to.equal(false));
            it("should be equal", () => expect(isEqualTo(1, 2)).to.equal(false));
            it("should be equal", () => expect(isEqualTo("a", "b")).to.equal(false));
            it("should be equal", () => expect(isEqualTo(1, 1)).to.equal(true));
            it("should be equal", () => expect(isEqualTo("a", "a")).to.equal(true));
        });
    });

    describe("isGreaterThan()", () =>
    {
        describe("success", () =>
        {
            it("should be greater than", () => expect(isGreaterThan(<number>null, 1)).to.equal(false));
            it("should be greater than", () => expect(isGreaterThan(<number>undefined, 1)).to.equal(false));
            it("should be greater than", () => expect(isGreaterThan(0, 1)).to.equal(false));
            it("should be greater than", () => expect(isGreaterThan(0, 1)).to.equal(false));
            it("should be greater than", () => expect(isGreaterThan("a", "a")).to.equal(false));
            it("should be greater than", () => expect(isGreaterThan("a", "b")).to.equal(false));
            it("should be greater than", () => expect(isGreaterThan(1, 1)).to.equal(false));
            it("should be greater than", () => expect(isGreaterThan(1, 2)).to.equal(false));

            it("should fail when greater than", () => expect(isGreaterThan("b", "a")).to.equal(true));
            it("should fail when greater than", () => expect(isGreaterThan("a", "A")).to.equal(true));
            it("should fail when greater than", () => expect(isGreaterThan(1, 0)).to.equal(true));
            it("should fail when greater than", () => expect(isGreaterThan(1, -1)).to.equal(true));
        });

        describe("failure", () =>
        {
            it("should fail when greater than", () => expect(() => isGreaterThan(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => isGreaterThan(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => isGreaterThan(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => isGreaterThan(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => isGreaterThan(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => isGreaterThan(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("isGreaterThanOrEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should not be greater than or equal to", () => expect(isGreaterThanOrEqualTo(<number>null, 1)).to.equal(false));
            it("should not be greater than or equal to", () => expect(isGreaterThanOrEqualTo(<number>undefined, 1)).to.equal(false));
            it("should not be greater than or equal to", () => expect(isGreaterThanOrEqualTo(0, 1)).to.equal(false));
            it("should not be greater than or equal to", () => expect(isGreaterThanOrEqualTo(0, 1)).to.equal(false));
            it("should not be greater than or equal to", () => expect(isGreaterThanOrEqualTo("a", "b")).to.equal(false));
            it("should not be greater than or equal to", () => expect(isGreaterThanOrEqualTo("a", "c")).to.equal(false));
            it("should not be greater than or equal to", () => expect(isGreaterThanOrEqualTo(1, 2)).to.equal(false));
            it("should not be greater than or equal to", () => expect(isGreaterThanOrEqualTo(1, 3)).to.equal(false));

            it("should be greater than or equal to", () => expect(isGreaterThanOrEqualTo("a", "a")).to.equal(true));
            it("should be greater than or equal to", () => expect(isGreaterThanOrEqualTo("b", "a")).to.equal(true));
            it("should be greater than or equal to", () => expect(isGreaterThanOrEqualTo("b", "b")).to.equal(true));
            it("should be greater than or equal to", () => expect(isGreaterThanOrEqualTo("a", "A")).to.equal(true));
            it("should be greater than or equal to", () => expect(isGreaterThanOrEqualTo("A", "A")).to.equal(true));
            it("should be greater than or equal to", () => expect(isGreaterThanOrEqualTo(0, 0)).to.equal(true));
            it("should be greater than or equal to", () => expect(isGreaterThanOrEqualTo(1, 0)).to.equal(true));
            it("should be greater than or equal to", () => expect(isGreaterThanOrEqualTo(1, 1)).to.equal(true));
            it("should be greater than or equal to", () => expect(isGreaterThanOrEqualTo(1, -1)).to.equal(true));
            it("should be greater than or equal to", () => expect(isGreaterThanOrEqualTo(-1, -1)).to.equal(true));
        });

        describe("failure", () =>
        {
            it("should fail when greater than or equal to", () => expect(() => isGreaterThanOrEqualTo(1, <number>null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => isGreaterThanOrEqualTo(1, <number>undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => isGreaterThanOrEqualTo(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => isGreaterThanOrEqualTo(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => isGreaterThanOrEqualTo(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => isGreaterThanOrEqualTo(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("isLessThan()", () =>
    {
        describe("success", () =>
        {
            it("should be less than", () => expect(isLessThan(<number>null, 1)).to.equal(false));
            it("should be less than", () => expect(isLessThan(<number>undefined, 1)).to.equal(false));
            it("should be less than", () => expect(isLessThan(2, 1)).to.equal(false));
            it("should be less than", () => expect(isLessThan(2, 1)).to.equal(false));
            it("should be less than", () => expect(isLessThan("a", "a")).to.equal(false));
            it("should be less than", () => expect(isLessThan("b", "a")).to.equal(false));
            it("should be less than", () => expect(isLessThan(1, 1)).to.equal(false));
            it("should be less than", () => expect(isLessThan(2, 1)).to.equal(false));
            it("should be less than", () => expect(isLessThan("a", "b")).to.equal(true));
            it("should be less than", () => expect(isLessThan("A", "a")).to.equal(true));
            it("should be less than", () => expect(isLessThan(0, 1)).to.equal(true));
            it("should be less than", () => expect(isLessThan(-1, 1)).to.equal(true));
        });

        describe("failure", () =>
        {
            it("should fail when less than", () => expect(() => isLessThan(1, <number>null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => isLessThan(1, <number>undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => isLessThan(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => isLessThan(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => isLessThan(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => isLessThan(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));

        });
    });

    describe("isGreaterThanOrEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo(<number>null, 1)).to.equal(false));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo(<number>undefined, 1)).to.equal(false));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo("b", "a")).to.equal(false));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo("c", "a")).to.equal(false));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo(2, 1)).to.equal(false));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo(3, 1)).to.equal(false));

            it("should be less than or equal to", () => expect(isLessThanOrEqualTo("a", "a")).to.equal(true));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo("a", "b")).to.equal(true));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo("b", "b")).to.equal(true));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo("A", "a")).to.equal(true));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo("A", "A")).to.equal(true));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo(0, 0)).to.equal(true));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo(0, 1)).to.equal(true));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo(1, 1)).to.equal(true));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo(-1, 1)).to.equal(true));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo(-1, -1)).to.equal(true));
        });

        describe("failure", () =>
        {
            it("should fail when null", () => expect(() => isLessThanOrEqualTo(1, <number>null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => isLessThanOrEqualTo(1, <number>undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => isLessThanOrEqualTo(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => isLessThanOrEqualTo(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => isLessThanOrEqualTo(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => isLessThanOrEqualTo(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("isInteger()", () =>
    {
        describe("success", () =>
        {
            it("should not be integer", () => expect(isInteger(null)).to.equal(false));
            it("should not be integer", () => expect(isInteger(undefined)).to.equal(false));

            it("should not be integer", () => expect(isInteger(3.1)).to.equal(false));
            it("should not be integer", () => expect(isInteger(3.14)).to.equal(false));
            it("should not be integer", () => expect(isInteger(3.14159265359)).to.equal(false));

            it("should be integer", () => expect(isInteger(-100)).to.equal(true));
            it("should be integer", () => expect(isInteger(-1)).to.equal(true));
            it("should be integer", () => expect(isInteger(0)).to.equal(true));
            it("should be integer", () => expect(isInteger(2)).to.equal(true));
            it("should be integer", () => expect(isInteger(200)).to.equal(true));
        });
    });

    describe("isNull()", () =>
    {
        describe("success", () =>
        {
            it("should not be null", () => expect(isNull(0)).to.equal(false));
            it("should not be null", () => expect(isNull(1)).to.equal(false));
            it("should not be null", () => expect(isNull("aaa")).to.equal(false));
            it("should be null", () => expect(isNull(null)).to.equal(true));
            it("should be null", () => expect(isNull(undefined)).to.equal(true));
        });
    });

    describe("isNullOrEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should be null", () => expect(isNullOrEmpty(null)).to.equal(true));
            it("should be null", () => expect(isNullOrEmpty(undefined)).to.equal(true));
            it("should be null", () => expect(isNullOrEmpty("")).to.equal(true));
            it("should not be null", () => expect(isNullOrEmpty("a")).to.equal(false));
            it("should not be null", () => expect(isNullOrEmpty("aa")).to.equal(false));
            it("should not be null", () => expect(isNullOrEmpty("aaa")).to.equal(false));
        });
    });

    describe("isNullOrWhiteSpace()", () =>
    {
        describe("success", () =>
        {
            it("should be null", () => expect(isNullOrWhiteSpace(null)).to.equal(true));
            it("should be null", () => expect(isNullOrWhiteSpace(undefined)).to.equal(true));
            it("should be null", () => expect(isNullOrWhiteSpace("")).to.equal(true));
            it("should be null", () => expect(isNullOrWhiteSpace("\t")).to.equal(true));
            it("should be null", () => expect(isNullOrWhiteSpace("      ")).to.equal(true));
            it("should be null", () => expect(isNullOrWhiteSpace("    \t  ")).to.equal(true));
            it("should not be null", () => expect(isNullOrWhiteSpace("a")).to.equal(false));
            it("should not be null", () => expect(isNullOrWhiteSpace("aa")).to.equal(false));
            it("should not be null", () => expect(isNullOrWhiteSpace("aaa")).to.equal(false));
            it("should not be null", () => expect(isNullOrWhiteSpace(" a a a ")).to.equal(false));
        });
    });

    describe("isOfType()", () =>
    {
        describe("success", () =>
        {
            it("should be of type", () => expect(isTypeOf(null, "string")).to.equal(false));
            it("should be of type", () => expect(isTypeOf(undefined, "string")).to.equal(false));
            it("should be of type", () => expect(isTypeOf(0, "string")).to.equal(false));
            it("should be of type", () => expect(isTypeOf("a", "number")).to.equal(false));
            it("should be of type", () => expect(isTypeOf({ "a": 3 }, "number")).to.eql(false));

            it("should be of type", () => expect(isTypeOf("a", "string")).to.equal(true));
            it("should be of type", () => expect(isTypeOf(1, "number")).to.equal(true));
            it("should be of type", () => expect(isTypeOf({ "a": 3 }, "object")).to.eql(true));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => isTypeOf(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => isTypeOf(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("isOneOf()", () =>
    {
        describe("success", () =>
        {
            it("should be one of", () => expect(isOneOf(null, [1])).to.equal(false));
            it("should be one of", () => expect(isOneOf(undefined, [1])).to.equal(false));
            it("should be one of", () => expect(isOneOf(0, 1)).to.equal(false));
            it("should be one of", () => expect(isOneOf("a", "b")).to.equal(false));
            it("should not be one of", () => expect(isOneOf({ "a": 3 }, { "b": 3 }, { "c": 3 })).to.eql(false));
            it("should not be one of", () => expect(isOneOf(1, 0, 1, 2, 3)).to.equal(true));
            it("should not be one of", () => expect(isOneOf("a", "a", "b", "c")).to.equal(true));
        });
    });

    describe("isSubTypeOf()", () =>
    {
        describe("success", () =>
        {
            it("should be subtype of", () => expect(isSubTypeOf(1, Error)).to.equal(false));
            it("should be subtype of", () => expect(isSubTypeOf("a", Error)).to.equal(false));
            it("should bes subtype of", () => expect(isSubTypeOf(new ArgumentError("test"), Error)).to.equals(true));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => isSubTypeOf(new ArgumentError("test"), null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => isSubTypeOf(new ArgumentError("test"), undefined)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("whenDoesMatch()", () =>
    {
        describe("success", () =>
        {
            it("should match", () => expect(doesMatch(null, /a/)).to.equal(false));
            it("should match", () => expect(doesMatch(undefined, /a/)).to.equal(false));
            it("should match", () => expect(doesMatch("a", /\\./)).to.equal(false));
            it("should match", () => expect(doesMatch("a", /b/)).to.equal(false));
            it("should match", () => expect(doesMatch("b", /a/)).to.equal(false));
            it("should match", () => expect(doesMatch("a tree and a rock", /^[a-z]+$/)).to.equal(false));
            it("should match", () => expect(doesMatch("3536443532345345", /^[0-9]+$/)).to.equal(true));
            it("should match", () => expect(doesMatch("d64af57b5bbb5c65", /^[a-z0-9]+$/)).to.equal(true));
            it("should match", () => expect(doesMatch("123", /^[0-9]+$/)).to.equal(true));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => doesMatch("a", null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => doesMatch("a", undefined)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });
});
