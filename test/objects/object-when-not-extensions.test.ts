import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { whenIsNot, whenIsNotEqualTo, whenIsNotInstanceOf, whenIsNotNull, whenIsNotOneOf, whenIsNotTypeOf } from "../../source/objects/object-when-not-extensions";
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

    describe("whenIsNotEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should not be equal", () => expect(whenIsNotEqualTo(<number | null | undefined>null, 1, 9)).to.equal(9));
            it("should not be equal", () => expect(whenIsNotEqualTo(<number | null | undefined>1, 2, null)).to.equal(null));
            it("should not be equal", () => expect(whenIsNotEqualTo(<number | null | undefined>undefined, 1, 9)).to.equal(9));
            it("should not be equal", () => expect(whenIsNotEqualTo(<number | null | undefined>1, 2, undefined)).to.equal(undefined));
            it("should not be equal", () => expect(whenIsNotEqualTo(1, 2, 9)).to.equal(9));
            it("should not be equal", () => expect(whenIsNotEqualTo("a", "b", "9")).to.equal("9"));
            it("should be equal", () => expect(whenIsNotEqualTo(1, 1, 9)).to.equal(1));
            it("should be equal", () => expect(whenIsNotEqualTo("a", "a", "9")).to.equal("a"));
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
            it("should not be one of", () => expect(whenIsNotOneOf({ "a": 3 }, [{ "a": 4 }], { "a": 5 })).to.eql({ "a": 5 }));
            it("should be one of", () => expect(whenIsNotOneOf(1, [0, 1, 2, 3], 9)).to.equal(1));
            it("should be one of", () => expect(whenIsNotOneOf("a", ["a", "b", "c"], "9")).to.equal("a"));
        });
    });

    describe("whenIsNotInstanceOf()", () =>
    {
        describe("success", () =>
        {
            const temp = new ArgumentError("test");

            it("should not be instance of", () => expect(whenIsNotInstanceOf(1, Error, 2)).to.eql(2));
            it("should not be instance of", () => expect(whenIsNotInstanceOf("a", Error, "b")).to.eql("b"));
            it("should bes instance of", () => expect(whenIsNotInstanceOf(temp, Error, null)).to.equals(temp));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => whenIsNotInstanceOf(new ArgumentError("test"), null, new Error("test"))).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsNotInstanceOf(new ArgumentError("test"), undefined, new Error("test"))).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

});
