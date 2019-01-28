import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { whenIs, whenIsEqualTo, whenIsInstanceOf, whenIsNull, whenIsOneOf, whenIsTypeOf } from "../../source/objects/object-when-extensions";
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

    describe("whenIsEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should be equal", () => expect(whenIsEqualTo(<number | null | undefined>null, 1, 9)).to.equal(null));
            it("should be equal", () => expect(whenIsEqualTo(<number | null | undefined>1, 2, null)).to.equal(1));
            it("should be equal", () => expect(whenIsEqualTo(<number | null | undefined>undefined, 1, 9)).to.equal(undefined));
            it("should be equal", () => expect(whenIsEqualTo(<number | null | undefined>1, 2, undefined)).to.equal(1));
            it("should be equal", () => expect(whenIsEqualTo(1, 2, 9)).to.equal(1));
            it("should be equal", () => expect(whenIsEqualTo("a", "b", "9")).to.equal("a"));
            it("should be equal", () => expect(whenIsEqualTo(1, 1, 9)).to.equal(9));
            it("should be equal", () => expect(whenIsEqualTo("a", "a", "9")).to.equal("9"));
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
            it("should not be one of", () => expect(whenIsOneOf({ "a": 3 }, [{ "a": 4 }], { "a": 5 })).to.eql({ "a": 3 }));
            it("should not be one of", () => expect(whenIsOneOf(1, [0, 1, 2, 3], 9)).to.equal(9));
            it("should not be one of", () => expect(whenIsOneOf("a", ["a", "b", "c"], "9")).to.equal("9"));
        });
    });

    describe("whenIsInstanceOf()", () =>
    {
        describe("success", () =>
        {
            it("should be instance of", () => expect(whenIsInstanceOf(1, Error, 2)).to.eql(1));
            it("should be instance of", () => expect(whenIsInstanceOf("a", Error, "b")).to.eql("a"));
            it("should bes instance of", () => expect(whenIsInstanceOf(new ArgumentError("test"), Error, null)).to.equals(null));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => whenIsInstanceOf(new ArgumentError("test"), null, new Error("test"))).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsInstanceOf(new ArgumentError("test"), undefined, new Error("test"))).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

});
