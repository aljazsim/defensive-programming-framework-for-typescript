import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { is, isEqualTo, isNull, isOneOf, isSubTypeOf, isTypeOf } from "../../source/objects/object-is-extensions";
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

    describe("isEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should be equal", () => expect(isEqualTo(null, null)).to.equal(true));
            it("should be equal", () => expect(isEqualTo(undefined, undefined)).to.equal(true));
            it("should be equal", () => expect(isEqualTo(undefined, null)).to.equal(true));
            it("should be equal", () => expect(isEqualTo(null, undefined)).to.equal(true));

            it("should be equal", () => expect(isEqualTo(null, 1)).to.equal(false));
            it("should be equal", () => expect(isEqualTo(1, 2)).to.equal(false));
            it("should be equal", () => expect(isEqualTo(undefined, 1)).to.equal(false));
            it("should be equal", () => expect(isEqualTo(1, 2)).to.equal(false));
            it("should be equal", () => expect(isEqualTo("a", "b")).to.equal(false));
            it("should be equal", () => expect(isEqualTo(1, 1)).to.equal(true));
            it("should be equal", () => expect(isEqualTo("a", "a")).to.equal(true));
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
            it("should be one of", () => expect(isOneOf(0, [1])).to.equal(false));
            it("should be one of", () => expect(isOneOf("a", ["b"])).to.equal(false));
            it("should not be one of", () => expect(isOneOf({ "a": 3 }, [{ "a": 4 }, { "a": 5 }])).to.eql(false));
            it("should not be one of", () => expect(isOneOf(1, [0, 1, 2, 3])).to.equal(true));
            it("should not be one of", () => expect(isOneOf("a", ["a", "b", "c"])).to.equal(true));
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

});
