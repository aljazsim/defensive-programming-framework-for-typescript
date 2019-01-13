import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { cannotBe, cannotBeEqualTo, cannotBeNull, cannotBeOneOf, cannotBeSubTypeOf, cannotBeTypeOf } from "../../source/objects/object-cannot-extensions";
import { expect } from "chai";

describe("object cannot extensions", () =>
{
    describe("cannotBe()", () =>
    {
        describe("success", () =>
        {
            it("should return \"aaa\"", () => expect(cannotBe("aaa", x => false)).to.equal("aaa"));
            it("should return 1", () => expect(cannotBe(1, x => false)).to.equal(1));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => cannotBe("aaa", null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for undefined", () => expect(() => cannotBe("aaa", undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for \"aaa\"", () => expect(() => cannotBe("aaa", x => true)).to.throw(ArgumentError, "Expression cannot be true."));
            it("should fail for 1", () => expect(() => cannotBe(1, x => true)).to.throw(ArgumentError, "Expression cannot be true."));
        });

    });

    describe("cannotBeEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should not be equal", () => expect(cannotBeEqualTo(null, 1)).to.equal(null));
            it("should not be equal", () => expect(cannotBeEqualTo(undefined, 1)).to.equal(undefined));
            it("should not be equal", () => expect(cannotBeEqualTo(1, 2)).to.equal(1));
            it("should not be equal", () => expect(cannotBeEqualTo("a", "b")).to.equal("a"));
        });

        describe("failure", () =>
        {
            it("should fail when equal", () => expect(() => cannotBeEqualTo(null, null)).to.throw(ArgumentError, "Value cannot be equal to null."));
            it("should fail when equal", () => expect(() => cannotBeEqualTo(undefined, undefined)).to.throw(ArgumentError, "Value cannot be equal to undefined."));
            it("should fail when equal", () => expect(() => cannotBeEqualTo(null, undefined)).to.throw(ArgumentError, "Value cannot be equal to undefined."));
            it("should fail when equal", () => expect(() => cannotBeEqualTo(undefined, null)).to.throw(ArgumentError, "Value cannot be equal to null."));
            it("should fail when equal", () => expect(() => cannotBeEqualTo(1, 1)).to.throw(ArgumentError, "Value cannot be equal to 1."));
            it("should fail when equal", () => expect(() => cannotBeEqualTo("a", "a")).to.throw(ArgumentError, "Value cannot be equal to a."));
        });
    });

    describe("cannotBeNull()", () =>
    {
        describe("success", () =>
        {
            it("should return 0", () => expect(cannotBeNull(0)).to.equal(0));
            it("should return 1", () => expect(cannotBeNull(1)).to.equal(1));
            it("should return 'aaa'", () => expect(cannotBeNull("aaa")).to.equal("aaa"));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => cannotBeNull(null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => cannotBeNull(undefined)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("cannotBeOfType()", () =>
    {
        describe("success", () =>
        {
            it("should not be of type", () => expect(cannotBeTypeOf(null, "string")).to.equal(null));
            it("should not be of type", () => expect(cannotBeTypeOf(undefined, "string")).to.equal(undefined));
            it("should not be of type", () => expect(cannotBeTypeOf(0, "string")).to.equal(0));
            it("should not be of type", () => expect(cannotBeTypeOf("a", "number")).to.equal("a"));
            it("should not be of type", () => expect(cannotBeTypeOf({ "a": 3 }, "number")).to.eql({ "a": 3 }));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => cannotBeTypeOf(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => cannotBeTypeOf(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for type of", () => expect(() => cannotBeTypeOf("a", "string")).to.throw(ArgumentError, "Value cannot be of type string."));
            it("should fail for type of", () => expect(() => cannotBeTypeOf(1, "number")).to.throw(ArgumentError, "Value cannot be of type number."));
            it("should fail for type of", () => expect(() => cannotBeTypeOf({ "a": 3 }, "object")).to.throw(ArgumentError, "Value cannot be of type object."));
        });
    });

    describe("cannotBeOneOf()", () =>
    {
        describe("success", () =>
        {
            it("should not be one of", () => expect(cannotBeOneOf(null, [1])).to.equal(null));
            it("should not be one of", () => expect(cannotBeOneOf(undefined, [1])).to.equal(undefined));
            it("should not be one of", () => expect(cannotBeOneOf(0, [1])).to.equal(0));
            it("should not be one of", () => expect(cannotBeOneOf("a", ["b"])).to.equal("a"));
            it("should not be one of", () => expect(cannotBeOneOf({ "a": 3 }, [{ "a": 4 }])).to.eql({ "a": 3 }));
        });

        describe("failure", () =>
        {
            it("should fail for subtype of", () => expect(() => cannotBeOneOf(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for subtype of", () => expect(() => cannotBeOneOf(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for subtype of", () => expect(() => cannotBeOneOf(1, [0, 1, 2, 3])).to.throw(ArgumentError, "Value cannot be one of [0, 1, 2, 3]."));
            it("should fail for subtype of", () => expect(() => cannotBeOneOf("a", ["a", "b", "c"])).to.throw(ArgumentError, "Value cannot be one of [a, b, c]."));
        });
    });

    describe("cannotBeSubTypeOf()", () =>
    {
        describe("success", () =>
        {
            it("should not be subtype of", () => expect(cannotBeSubTypeOf(1, Error)).to.eql(1));
            it("should not be subtype of", () => expect(cannotBeSubTypeOf("a", Error)).to.eql("a"));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => cannotBeSubTypeOf(new ArgumentError("test"), null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => cannotBeSubTypeOf(new ArgumentError("test"), undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for subtype", () => expect(() => cannotBeSubTypeOf(new ArgumentError("test"), Error)).to.throw(ArgumentError, "Value cannot be subtype of type Error."));
        });
    });
});
