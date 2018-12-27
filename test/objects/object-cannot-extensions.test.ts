import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { cannotBe, cannotBeBetween, cannotBeEqualTo, cannotBeGreaterThan, cannotBeGreaterThanOrEqualTo, cannotBeLessThan, cannotBeLessThanOrEqualTo, cannotBeNull, cannotBeOneOf, cannotBeSubTypeOf, cannotBeTypeOf, cannotMatch } from "../../source/objects/object-cannot-extensions";
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

    describe("cannotBeBetween()", () =>
    {
        describe("success", () =>
        {
            it("should return null", () => expect(cannotBeBetween(null, 1, 1, true)).to.equal(null));
            it("should return undefined", () => expect(cannotBeBetween(undefined, 1, 1, true)).to.equal(undefined));

            it("should not be between", () => expect(cannotBeBetween(0, 1, 1, true)).to.equal(0));
            it("should not be between", () => expect(cannotBeBetween(2, 1, 1, true)).to.equal(2));
            it("should not be between", () => expect(cannotBeBetween(1, 1, 1, false)).to.equal(1));
            it("should not be between", () => expect(cannotBeBetween(0, 1, 3, true)).to.equal(0));
            it("should not be between", () => expect(cannotBeBetween(1, 1, 3, false)).to.equal(1));
            it("should not be between", () => expect(cannotBeBetween(3, 1, 3, false)).to.equal(3));
            it("should not be between", () => expect(cannotBeBetween(4, 1, 3, true)).to.equal(4));
            it("should not be between", () => expect(cannotBeBetween(4, 1, 3, false)).to.equal(4));
            it("should not be between", () => expect(cannotBeBetween(4, 1, 3, false)).to.equal(4));
            it("should not be between", () => expect(cannotBeBetween("", "a", "a", true)).to.equal(""));
            it("should not be between", () => expect(cannotBeBetween("b", "a", "a", true)).to.equal("b"));
            it("should not be between", () => expect(cannotBeBetween("a", "a", "a", false)).to.equal("a"));
            it("should not be between", () => expect(cannotBeBetween("a", "b", "c", true)).to.equal("a"));
            it("should not be between", () => expect(cannotBeBetween("a", "a", "c", false)).to.equal("a"));
            it("should not be between", () => expect(cannotBeBetween("c", "a", "c", false)).to.equal("c"));
            it("should not be between", () => expect(cannotBeBetween("d", "a", "c", true)).to.equal("d"));
            it("should not be between", () => expect(cannotBeBetween("d", "a", "c", false)).to.equal("d"));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => cannotBeBetween(0, null, 1, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => cannotBeBetween(0, undefined, 1, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => cannotBeBetween(0, 1, null, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => cannotBeBetween(0, 1, undefined, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => cannotBeBetween(0, null, null, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => cannotBeBetween(0, undefined, undefined, true)).to.throw(ArgumentError, "Value cannot be null."));

            it("should fail when between", () => expect(() => cannotBeBetween(1, 1, 1, true)).to.throw(ArgumentError, "Value cannot be between 1 and 1 inclusive."));
            it("should fail when between", () => expect(() => cannotBeBetween(1, 1, 3, true)).to.throw(ArgumentError, "Value cannot be between 1 and 3 inclusive."));
            it("should fail when between", () => expect(() => cannotBeBetween(2, 1, 3, true)).to.throw(ArgumentError, "Value cannot be between 1 and 3 inclusive."));
            it("should fail when between", () => expect(() => cannotBeBetween(3, 1, 3, true)).to.throw(ArgumentError, "Value cannot be between 1 and 3 inclusive."));
            it("should fail when between", () => expect(() => cannotBeBetween(2, 1, 3, false)).to.throw(ArgumentError, "Value cannot be between 1 and 3."));
            it("should fail when between", () => expect(() => cannotBeBetween("a", "a", "a", true)).to.throw(ArgumentError, "Value cannot be between a and a inclusive."));
            it("should fail when between", () => expect(() => cannotBeBetween("a", "a", "c", true)).to.throw(ArgumentError, "Value cannot be between a and c inclusive."));
            it("should fail when between", () => expect(() => cannotBeBetween("b", "a", "c", true)).to.throw(ArgumentError, "Value cannot be between a and c inclusive."));
            it("should fail when between", () => expect(() => cannotBeBetween("c", "a", "c", true)).to.throw(ArgumentError, "Value cannot be between a and c inclusive."));
            it("should fail when between", () => expect(() => cannotBeBetween("b", "a", "c", false)).to.throw(ArgumentError, "Value cannot be between a and c."));
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

    describe("cannotBeGreaterThan()", () =>
    {
        describe("success", () =>
        {
            it("should not be greater than", () => expect(cannotBeGreaterThan(null, 1)).to.equal(null));
            it("should not be greater than", () => expect(cannotBeGreaterThan(undefined, 1)).to.equal(undefined));
            it("should not be greater than", () => expect(cannotBeGreaterThan("a", "a")).to.equal("a"));
            it("should not be greater than", () => expect(cannotBeGreaterThan("a", "b")).to.equal("a"));
            it("should not be greater than", () => expect(cannotBeGreaterThan(1, 1)).to.equal(1));
            it("should not be greater than", () => expect(cannotBeGreaterThan(1, 2)).to.equal(1));
        });

        describe("failure", () =>
        {
            it("should fail when greater than", () => expect(() => cannotBeGreaterThan(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => cannotBeGreaterThan(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => cannotBeGreaterThan(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => cannotBeGreaterThan(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => cannotBeGreaterThan(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => cannotBeGreaterThan(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => cannotBeGreaterThan("b", "a")).to.throw(ArgumentError, "Value cannot be greater than a."));
            it("should fail when greater than", () => expect(() => cannotBeGreaterThan("a", "A")).to.throw(ArgumentError, "Value cannot be greater than A."));
            it("should fail when greater than", () => expect(() => cannotBeGreaterThan(1, 0)).to.throw(ArgumentError, "Value cannot be greater than 0."));
            it("should fail when greater than", () => expect(() => cannotBeGreaterThan(1, -1)).to.throw(ArgumentError, "Value cannot be greater than -1."));
        });
    });

    describe("cannotBeGreaterThanOrEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should not be greater than or equal to", () => expect(cannotBeGreaterThanOrEqualTo(null, 1)).to.equal(null));
            it("should not be greater than or equal to", () => expect(cannotBeGreaterThanOrEqualTo(undefined, 1)).to.equal(undefined));
            it("should not be greater than or equal to", () => expect(cannotBeGreaterThanOrEqualTo("a", "b")).to.equal("a"));
            it("should not be greater than or equal to", () => expect(cannotBeGreaterThanOrEqualTo("a", "c")).to.equal("a"));
            it("should not be greater than or equal to", () => expect(cannotBeGreaterThanOrEqualTo(1, 2)).to.equal(1));
            it("should not be greater than or equal to", () => expect(cannotBeGreaterThanOrEqualTo(1, 3)).to.equal(1));
        });

        describe("failure", () =>
        {
            it("should fail when greater than or equal to", () => expect(() => cannotBeGreaterThanOrEqualTo(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => cannotBeGreaterThanOrEqualTo(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => cannotBeGreaterThanOrEqualTo(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => cannotBeGreaterThanOrEqualTo(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => cannotBeGreaterThanOrEqualTo(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => cannotBeGreaterThanOrEqualTo(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => cannotBeGreaterThanOrEqualTo("b", "a")).to.throw(ArgumentError, "Value cannot be greater than or equal to a."));
            it("should fail when greater than or equal to", () => expect(() => cannotBeGreaterThanOrEqualTo("a", "A")).to.throw(ArgumentError, "Value cannot be greater than or equal to A."));
            it("should fail when greater than or equal to", () => expect(() => cannotBeGreaterThanOrEqualTo(1, 0)).to.throw(ArgumentError, "Value cannot be greater than or equal to 0."));
            it("should fail when greater than or equal to", () => expect(() => cannotBeGreaterThanOrEqualTo(1, -1)).to.throw(ArgumentError, "Value cannot be greater than or equal to -1."));
        });
    });

    describe("cannotBeLessThan()", () =>
    {
        describe("success", () =>
        {
            it("should not be less than", () => expect(cannotBeLessThan(null, 1)).to.equal(null));
            it("should not be less than", () => expect(cannotBeLessThan(undefined, 1)).to.equal(undefined));
            it("should not be less than", () => expect(cannotBeLessThan("a", "a")).to.equal("a"));
            it("should not be less than", () => expect(cannotBeLessThan("b", "a")).to.equal("b"));
            it("should not be less than", () => expect(cannotBeLessThan(1, 1)).to.equal(1));
            it("should not be less than", () => expect(cannotBeLessThan(2, 1)).to.equal(2));
        });

        describe("failure", () =>
        {
            it("should fail when less than", () => expect(() => cannotBeLessThan(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => cannotBeLessThan(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => cannotBeLessThan(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => cannotBeLessThan(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => cannotBeLessThan(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => cannotBeLessThan(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => cannotBeLessThan("a", "b")).to.throw(ArgumentError, "Value cannot be less than b."));
            it("should fail when less than", () => expect(() => cannotBeLessThan("A", "a")).to.throw(ArgumentError, "Value cannot be less than a."));
            it("should fail when less than", () => expect(() => cannotBeLessThan(0, 1)).to.throw(ArgumentError, "Value cannot be less than 1."));
            it("should fail when less than", () => expect(() => cannotBeLessThan(-1, 1)).to.throw(ArgumentError, "Value cannot be less than 1."));
        });
    });

    describe("cannotBeGreaterThanOrEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should not be less than or equal to", () => expect(cannotBeLessThanOrEqualTo(null, 1)).to.equal(null));
            it("should not be less than or equal to", () => expect(cannotBeLessThanOrEqualTo(undefined, 1)).to.equal(undefined));
            it("should not be less than or equal to", () => expect(cannotBeLessThanOrEqualTo("b", "a")).to.equal("b"));
            it("should not be less than or equal to", () => expect(cannotBeLessThanOrEqualTo("c", "a")).to.equal("c"));
            it("should not be less than or equal to", () => expect(cannotBeLessThanOrEqualTo(2, 1)).to.equal(2));
            it("should not be less than or equal to", () => expect(cannotBeLessThanOrEqualTo(3, 1)).to.equal(3));
        });

        describe("failure", () =>
        {
            it("should fail when null", () => expect(() => cannotBeLessThanOrEqualTo(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => cannotBeLessThanOrEqualTo(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => cannotBeLessThanOrEqualTo(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => cannotBeLessThanOrEqualTo(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => cannotBeLessThanOrEqualTo(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => cannotBeLessThanOrEqualTo(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => cannotBeLessThanOrEqualTo("a", "b")).to.throw(ArgumentError, "Value cannot be less than or equal to b."));
            it("should fail when null", () => expect(() => cannotBeLessThanOrEqualTo("A", "a")).to.throw(ArgumentError, "Value cannot be less than or equal to a."));
            it("should fail when less than or equal to", () => expect(() => cannotBeLessThanOrEqualTo(0, 1)).to.throw(ArgumentError, "Value cannot be less than or equal to 1."));
            it("should fail when less than or equal to", () => expect(() => cannotBeLessThanOrEqualTo(-1, 1)).to.throw(ArgumentError, "Value cannot be less than or equal to 1."));
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
            it("should not be one of", () => expect(cannotBeOneOf(null, 1)).to.equal(null));
            it("should not be one of", () => expect(cannotBeOneOf(undefined, 1)).to.equal(undefined));
            it("should not be one of", () => expect(cannotBeOneOf(0, 1)).to.equal(0));
            it("should not be one of", () => expect(cannotBeOneOf("a", "b")).to.equal("a"));
            it("should not be one of", () => expect(cannotBeOneOf({ "a": 3 }, { "b": 3 })).to.eql({ "a": 3 }));
        });

        describe("failure", () =>
        {
            it("should fail for subtype of", () => expect(() => cannotBeOneOf(1, 0, 1, 2, 3)).to.throw(ArgumentError, "Value cannot be one of [0, 1, 2, 3]."));
            it("should fail for subtype of", () => expect(() => cannotBeOneOf("a", "a", "b", "c")).to.throw(ArgumentError, "Value cannot be one of [a, b, c]."));
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

    describe("cannotMatch()", () =>
    {
        describe("success", () =>
        {
            it("should not match", () => expect(cannotMatch(null, /a/)).to.equal(null));
            it("should not match", () => expect(cannotMatch(undefined, /a/)).to.equal(undefined));
            it("should not match", () => expect(cannotMatch("a", /\\./)).to.equal("a"));
            it("should not match", () => expect(cannotMatch("a", /b/)).to.equal("a"));
            it("should not match", () => expect(cannotMatch("b", /a/)).to.equal("b"));
            it("should not match", () => expect(cannotMatch("a tree and a rock", /^[a-z]+$/)).to.equal("a tree and a rock"));
            it("should not match", () => expect(cannotMatch("d64af57b5bbb5c65", /^[0-9]+$/)).to.equal("d64af57b5bbb5c65"));
            it("should not match", () => expect(cannotMatch("353644353i345345", /^[0-9]+$/)).to.equal("353644353i345345"));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => cannotMatch("a", null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => cannotMatch("a", undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => cannotMatch("123", /^[0-9]+$/)).to.throw(ArgumentError, "Value cannot match /^[0-9]+$/."));
        });
    });
});
