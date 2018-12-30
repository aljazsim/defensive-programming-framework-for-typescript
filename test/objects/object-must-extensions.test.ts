import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { mustBeNullOrEmpty } from "../../source/collections/collection-must-extensions";
import { mustBe, mustBeBetween, mustBeEqualTo, mustBeGreaterThan, mustBeGreaterThanOrEqualTo, mustBeInteger, mustBeLessThan, mustBeLessThanOrEqualTo, mustBeNull, mustBeNullOrWhiteSpace, mustBeOneOf, mustBeSubTypeOf, mustBeTypeOf, mustMatch } from "../../source/objects/object-must-extensions";
import { expect } from "chai";

describe("object must extensions", () =>
{
    describe("mustBe()", () =>
    {
        describe("success", () =>
        {
            it("should return \"aaa\"", () => expect(mustBe("aaa", x => true)).to.equal("aaa"));
            it("should return 1", () => expect(mustBe(1, x => true)).to.equal(1));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => mustBe("aaa", null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for undefined", () => expect(() => mustBe("aaa", undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for \"aaa\"", () => expect(() => mustBe("aaa", x => false)).to.throw(ArgumentError, "Expression must be true."));
            it("should fail for 1", () => expect(() => mustBe(1, x => false)).to.throw(ArgumentError, "Expression must be true."));
        });

    });

    describe("mustBeBetween()", () =>
    {
        describe("success", () =>
        {
            it("should be between", () => expect(mustBeBetween(1, 1, 1, true)).to.equal(1));
            it("should be between", () => expect(mustBeBetween(1, 1, 3, true)).to.equal(1));
            it("should be between", () => expect(mustBeBetween(2, 1, 3, true)).to.equal(2));
            it("should be between", () => expect(mustBeBetween(3, 1, 3, true)).to.equal(3));
            it("should be between", () => expect(mustBeBetween(2, 1, 3, false)).to.equal(2));
            it("should be between", () => expect(mustBeBetween("a", "a", "a", true)).to.equal("a"));
            it("should be between", () => expect(mustBeBetween("a", "a", "c", true)).to.equal("a"));
            it("should be between", () => expect(mustBeBetween("b", "a", "c", true)).to.equal("b"));
            it("should be between", () => expect(mustBeBetween("c", "a", "c", true)).to.equal("c"));
            it("should be between", () => expect(mustBeBetween("b", "a", "c", false)).to.equal("b"));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => mustBeBetween(0, null, 1, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => mustBeBetween(0, undefined, 1, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => mustBeBetween(0, 1, null, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => mustBeBetween(0, 1, undefined, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => mustBeBetween(0, null, null, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => mustBeBetween(0, undefined, undefined, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when not between", () => expect(() => mustBeBetween(null, 1, 1, true)).to.throw(ArgumentError, "Value must be between 1 and 1 inclusive."));
            it("should fail when not between", () => expect(() => mustBeBetween(undefined, 1, 1, true)).to.throw(ArgumentError, "Value must be between 1 and 1 inclusive."));
            it("should fail when not be between", () => expect(() => mustBeBetween(0, 1, 1, true)).to.throw(ArgumentError, "Value must be between 1 and 1 inclusive."));
            it("should fail when not be between", () => expect(() => mustBeBetween(2, 1, 1, true)).to.throw(ArgumentError, "Value must be between 1 and 1 inclusive."));
            it("should fail when not be between", () => expect(() => mustBeBetween(1, 1, 1, false)).to.throw(ArgumentError, "Value must be between 1 and 1."));
            it("should fail when not be between", () => expect(() => mustBeBetween(0, 1, 3, true)).to.throw(ArgumentError, "Value must be between 1 and 3 inclusive."));
            it("should fail when not be between", () => expect(() => mustBeBetween(1, 1, 3, false)).to.throw(ArgumentError, "Value must be between 1 and 3."));
            it("should fail when not be between", () => expect(() => mustBeBetween(3, 1, 3, false)).to.throw(ArgumentError, "Value must be between 1 and 3."));
            it("should fail when not be between", () => expect(() => mustBeBetween(4, 1, 3, true)).to.throw(ArgumentError, "Value must be between 1 and 3 inclusive."));
            it("should fail when not be between", () => expect(() => mustBeBetween(4, 1, 3, false)).to.throw(ArgumentError, "Value must be between 1 and 3."));
            it("should fail when not be between", () => expect(() => mustBeBetween(4, 1, 3, false)).to.throw(ArgumentError, "Value must be between 1 and 3."));
            it("should fail when not be between", () => expect(() => mustBeBetween("", "a", "a", true)).to.throw(ArgumentError, "Value must be between a and a inclusive."));
            it("should fail when not be between", () => expect(() => mustBeBetween("b", "a", "a", true)).to.throw(ArgumentError, "Value must be between a and a inclusive."));
            it("should fail when not be between", () => expect(() => mustBeBetween("a", "a", "a", false)).to.throw(ArgumentError, "Value must be between a and a."));
            it("should fail when not be between", () => expect(() => mustBeBetween("a", "b", "c", true)).to.throw(ArgumentError, "Value must be between b and c inclusive."));
            it("should fail when not be between", () => expect(() => mustBeBetween("a", "a", "c", false)).to.throw(ArgumentError, "Value must be between a and c."));
            it("should fail when not be between", () => expect(() => mustBeBetween("c", "a", "c", false)).to.throw(ArgumentError, "Value must be between a and c."));
            it("should fail when not be between", () => expect(() => mustBeBetween("d", "a", "c", true)).to.throw(ArgumentError, "Value must be between a and c inclusive."));
            it("should fail when not be between", () => expect(() => mustBeBetween("d", "a", "c", false)).to.throw(ArgumentError, "Value must be between a and c."));
        });
    });

    describe("mustBeEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should be equal", () => expect(mustBeEqualTo(null, null)).to.equal(null));
            it("should be equal", () => expect(mustBeEqualTo(undefined, undefined)).to.equal(undefined));
            it("should be equal", () => expect(mustBeEqualTo(null, undefined)).to.equal(null));
            it("should be equal", () => expect(mustBeEqualTo(undefined, null)).to.equal(undefined));
            it("should be equal", () => expect(mustBeEqualTo(1, 1)).to.equal(1));
            it("should be equal", () => expect(mustBeEqualTo("a", "a")).to.equal("a"));
        });

        describe("failure", () =>
        {
            it("should fail when not equal", () => expect(() => mustBeEqualTo(null, 1)).to.throw(ArgumentError, "Value must be equal to 1."));
            it("should fail when not equal", () => expect(() => mustBeEqualTo(undefined, 1)).to.throw(ArgumentError, "Value must be equal to 1."));
            it("should fail when not equal", () => expect(() => mustBeEqualTo(1, 2)).to.throw(ArgumentError, "Value must be equal to 2."));
            it("should fail when not equal", () => expect(() => mustBeEqualTo("a", "b")).to.throw(ArgumentError, "Value must be equal to b."));
        });
    });

    describe("mustBeGreaterThan()", () =>
    {
        describe("success", () =>
        {
            it("should be greater than", () => expect(mustBeGreaterThan("b", "a")).to.equal("b"));
            it("should be greater than", () => expect(mustBeGreaterThan("a", "A")).to.equal("a"));
            it("should be greater than", () => expect(mustBeGreaterThan(1, 0)).to.equal(1));
            it("should be greater than", () => expect(mustBeGreaterThan(1, -1)).to.equal(1));
        });

        describe("failure", () =>
        {
            it("should fail null", () => expect(() => mustBeGreaterThan(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail null", () => expect(() => mustBeGreaterThan(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail null", () => expect(() => mustBeGreaterThan(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail null", () => expect(() => mustBeGreaterThan(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail null", () => expect(() => mustBeGreaterThan(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail null", () => expect(() => mustBeGreaterThan(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when not greater than", () => expect(() => mustBeGreaterThan(null, 1)).to.throw(ArgumentError, "Value must be greater than 1."));
            it("should fail when not greater than", () => expect(() => mustBeGreaterThan(undefined, 1)).to.throw(ArgumentError, "Value must be greater than 1."));
            it("should fail when not greater than", () => expect(() => mustBeGreaterThan("a", "a")).to.throw(ArgumentError, "Value must be greater than a."));
            it("should fail when not greater than", () => expect(() => mustBeGreaterThan("a", "b")).to.throw(ArgumentError, "Value must be greater than b."));
            it("should fail when not greater than", () => expect(() => mustBeGreaterThan(1, 1)).to.throw(ArgumentError, "Value must be greater than 1."));
            it("should fail when not greater than", () => expect(() => mustBeGreaterThan(1, 2)).to.throw(ArgumentError, "Value must be greater than 2."));
        });
    });

    describe("mustBeGreaterThanOrEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should be greater than or equal to", () => expect(mustBeGreaterThanOrEqualTo("b", "a")).to.equal("b"));
            it("should be greater than or equal to", () => expect(mustBeGreaterThanOrEqualTo("a", "A")).to.equal("a"));
            it("should be greater than or equal to", () => expect(mustBeGreaterThanOrEqualTo(1, 0)).to.equal(1));
            it("should be greater than or equal to", () => expect(mustBeGreaterThanOrEqualTo(1, -1)).to.equal(1));
        });

        describe("failure", () =>
        {
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo(null, 1)).to.throw(ArgumentError, "Value must be greater than or equal to 1."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo(undefined, 1)).to.throw(ArgumentError, "Value must be greater than or equal to 1."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo("a", "b")).to.throw(ArgumentError, "Value must be greater than or equal to b."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo("a", "c")).to.throw(ArgumentError, "Value must be greater than or equal to c."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo(1, 2)).to.throw(ArgumentError, "Value must be greater than or equal to 2."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo(1, 3)).to.throw(ArgumentError, "Value must be greater than or equal to 3."));
        });
    });

    describe("mustBeLessThan()", () =>
    {
        describe("success", () =>
        {
            it("should be less than", () => expect(mustBeLessThan("A", "a")).to.equal("A"));
            it("should be less than", () => expect(mustBeLessThan("a", "b")).to.equal("a"));
            it("should be less than", () => expect(mustBeLessThan(0, 1)).to.equal(0));
            it("should be less than", () => expect(mustBeLessThan(-1, 1)).to.equal(-1));
        });

        describe("failure", () =>
        {
            it("should fail when null", () => expect(() => mustBeLessThan(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => mustBeLessThan(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => mustBeLessThan(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => mustBeLessThan(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => mustBeLessThan(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => mustBeLessThan(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => mustBeLessThan(null, 1)).to.throw(ArgumentError, "Value must be less than 1"));
            it("should fail when less than", () => expect(() => mustBeLessThan(undefined, 1)).to.throw(ArgumentError, "Value must be less than 1"));
            it("should fail when less than", () => expect(() => mustBeLessThan("a", "a")).to.throw(ArgumentError, "Value must be less than a"));
            it("should fail when less than", () => expect(() => mustBeLessThan("b", "a")).to.throw(ArgumentError, "Value must be less than a"));
            it("should fail when less than", () => expect(() => mustBeLessThan(1, 1)).to.throw(ArgumentError, "Value must be less than 1"));
            it("should fail when less than", () => expect(() => mustBeLessThan(2, 1)).to.throw(ArgumentError, "Value must be less than 1"));

        });
    });

    describe("mustBeGreaterThanOrEqualTo()", () =>
    {
        describe("success", () =>
        {

            it("should be less than or equal to", () => expect(mustBeLessThanOrEqualTo("a", "b")).to.equal("a"));
            it("should be less than or equal to", () => expect(mustBeLessThanOrEqualTo("A", "a")).to.equal("A"));
            it("should be less than or equal to", () => expect(mustBeLessThanOrEqualTo(0, 1)).to.equal(0));
            it("should be less than or equal to", () => expect(mustBeLessThanOrEqualTo(-1, 1)).to.equal(-1));
        });

        describe("failure", () =>
        {
            it("should fail when null", () => expect(() => mustBeLessThanOrEqualTo(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => mustBeLessThanOrEqualTo(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => mustBeLessThanOrEqualTo(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => mustBeLessThanOrEqualTo(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => mustBeLessThanOrEqualTo(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => mustBeLessThanOrEqualTo(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when not less than or equal to", () => expect(() => mustBeLessThanOrEqualTo(null, 1)).to.throw(ArgumentError, "Value must be less than or equal to 1."));
            it("should fail when not less than or equal to", () => expect(() => mustBeLessThanOrEqualTo(undefined, 1)).to.throw(ArgumentError, "Value must be less than or equal to 1."));
            it("should fail when not less than or equal to", () => expect(() => mustBeLessThanOrEqualTo("b", "a")).to.throw(ArgumentError, "Value must be less than or equal to a."));
            it("should fail when not less than or equal to", () => expect(() => mustBeLessThanOrEqualTo("c", "a")).to.throw(ArgumentError, "Value must be less than or equal to a."));
            it("should fail when not less than or equal to", () => expect(() => mustBeLessThanOrEqualTo(2, 1)).to.throw(ArgumentError, "Value must be less than or equal to 1."));
            it("should fail when not less than or equal to", () => expect(() => mustBeLessThanOrEqualTo(3, 1)).to.throw(ArgumentError, "Value must be less than or equal to 1."));
        });
    });

    describe("mustBeInteger()", () =>
    {
        describe("success", () =>
        {
            it("should be integer", () => expect(mustBeInteger(-100)).to.equal(-100));
            it("should be integer", () => expect(mustBeInteger(-1)).to.equal(-1));
            it("should be integer", () => expect(mustBeInteger(0)).to.equal(0));
            it("should be integer", () => expect(mustBeInteger(2)).to.equal(2));
            it("should be integer", () => expect(mustBeInteger(200)).to.equal(200));
        });

        describe("failure", () =>
        {
            it("should fail for not being an integer", () => expect(() => mustBeInteger(null)).to.to.throw(ArgumentError, "Value must be an integer."));
            it("should fail for not being an integer", () => expect(() => mustBeInteger(undefined)).to.to.throw(ArgumentError, "Value must be an integer."));
            it("should fail for not being an integer", () => expect(() => mustBeInteger(3.1)).to.to.throw(ArgumentError, "Value must be an integer."));
            it("should fail for not being an integer", () => expect(() => mustBeInteger(3.14)).to.to.throw(ArgumentError, "Value must be an integer."));
            it("should fail for not being an integer", () => expect(() => mustBeInteger(3.14159265359)).to.to.throw(ArgumentError, "Value must be an integer."));
        });
    });

    describe("mustBeNull()", () =>
    {
        describe("success", () =>
        {
            it("should be null", () => expect(mustBeNull(null)).to.equal(null));
            it("should be null", () => expect(mustBeNull(undefined)).to.equal(undefined));
        });

        describe("failure", () =>
        {
            it("should fail when not null", () => expect(() => mustBeNull(0)).to.throw(ArgumentError, "Value must be null."));
            it("should fail when not null", () => expect(() => mustBeNull(1)).to.throw(ArgumentError, "Value must be null."));
            it("should fail when not null", () => expect(() => mustBeNull("aaa")).to.throw(ArgumentError, "Value must be null."));
        });
    });

    describe("mustBeNullOrEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should be valid", () => expect(mustBeNullOrEmpty(null)).to.equal(null));
            it("should be valid", () => expect(mustBeNullOrEmpty(undefined)).to.equal(undefined));
            it("should be valid", () => expect(mustBeNullOrEmpty("")).to.equal(""));
        });

        describe("failure", () =>
        {
            it("should be null or empty", () => expect(() => mustBeNullOrEmpty("a")).to.throw(ArgumentError, "Value must be null or empty."));
            it("should be null or empty", () => expect(() => mustBeNullOrEmpty("aa")).to.throw(ArgumentError, "Value must be null or empty."));
            it("should be null or empty", () => expect(() => mustBeNullOrEmpty("aaa")).to.throw(ArgumentError, "Value must be null or empty."));
        });
    });

    describe("mustBeNullOrWhiteSpace()", () =>
    {
        describe("success", () =>
        {
            it("should be valid", () => expect(mustBeNullOrWhiteSpace(null)).to.equal(null));
            it("should be valid", () => expect(mustBeNullOrWhiteSpace(undefined)).to.equal(undefined));
            it("should be valid", () => expect(mustBeNullOrWhiteSpace("")).to.equal(""));
            it("should be valid", () => expect(mustBeNullOrWhiteSpace("\t")).to.equal("\t"));
            it("should be valid", () => expect(mustBeNullOrWhiteSpace("     \t ")).to.equal("     \t "));
        });

        describe("failure", () =>
        {
            it("should be null", () => expect(() => mustBeNullOrWhiteSpace("a")).to.throw(ArgumentError, "Value must be null or whitespace."));
            it("should be null", () => expect(() => mustBeNullOrWhiteSpace("aa")).to.throw(ArgumentError, "Value must be null or whitespace."));
            it("should be null", () => expect(() => mustBeNullOrWhiteSpace("aaa")).to.throw(ArgumentError, "Value must be null or whitespace."));
            it("should be null", () => expect(() => mustBeNullOrWhiteSpace(" a a a ")).to.throw(ArgumentError, "Value must be null or whitespace."));
        });
    });

    describe("mustBeOfType()", () =>
    {
        describe("success", () =>
        {
            it("should be type of", () => expect(mustBeTypeOf("a", "string")).to.equal("a"));
            it("should be type of", () => expect(mustBeTypeOf(1, "number")).to.equal(1));
            it("should be type of", () => expect(mustBeTypeOf({ "a": 3 }, "object")).to.eql({ "a": 3 }));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => mustBeTypeOf(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => mustBeTypeOf(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when not of type", () => expect(() => mustBeTypeOf(undefined, "string")).to.throw(ArgumentError, "Value must be of type string."));
            it("should fail when not of type", () => expect(() => mustBeTypeOf(0, "string")).to.throw(ArgumentError, "Value must be of type string."));
            it("should fail when not of type", () => expect(() => mustBeTypeOf(null, "string")).to.throw(ArgumentError, "Value must be of type string."));
            it("should fail when not of type", () => expect(() => mustBeTypeOf("a", "number")).to.throw(ArgumentError, "Value must be of type number."));
            it("should fail when not of type", () => expect(() => mustBeTypeOf({ "a": 3 }, "number")).to.throw(ArgumentError, "Value must be of type number."));
        });
    });

    describe("mustBeOneOf()", () =>
    {
        describe("success", () =>
        {
            it("should be subtype of", () => expect(mustBeOneOf(1, 0, 1, 2, 3)).to.equal(1));
            it("should be subtype of", () => expect(mustBeOneOf("a", "a", "b", "c")).to.equal("a"));
        });

        describe("failure", () =>
        {
            it("should not be one of", () => expect(() => mustBeOneOf(null, 1)).to.throw(ArgumentError, "Value must be one of [1]"));
            it("should not be one of", () => expect(() => mustBeOneOf(undefined, 1)).to.throw(ArgumentError, "Value must be one of [1]"));
            it("should not be one of", () => expect(() => mustBeOneOf(0, 1)).to.throw(ArgumentError, "Value must be one of [1]"));
            it("should not be one of", () => expect(() => mustBeOneOf("a", "b")).to.throw(ArgumentError, "Value must be one of [b]"));
            it("should not be one of", () => expect(() => mustBeOneOf({ "a": 3 }, { "b": 3 })).to.throw(ArgumentError, "Value must be one of [[object Object]]"));
        });
    });

    describe("mustBeSubTypeOf()", () =>
    {
        describe("success", () =>
        {
            const temp = new ArgumentError("test");

            it("should be of subtype", () => expect(mustBeSubTypeOf(temp, Error)).to.equal(temp));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => mustBeSubTypeOf(new ArgumentError("test"), null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => mustBeSubTypeOf(new ArgumentError("test"), undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should not be subtype of", () => expect(() => mustBeSubTypeOf(1, Error)).to.throw(ArgumentError, "Value must be subtype of type Error"));
            it("should not be subtype of", () => expect(() => mustBeSubTypeOf("a", Error)).to.throw(ArgumentError, "Value must be subtype of type Error"));
        });
    });

    describe("mustMatch()", () =>
    {
        describe("success", () =>
        {
            it("should fail for null", () => expect(mustMatch("123", /^[0-9]+$/)).to.equal("123"));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => mustMatch("a", null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => mustMatch("a", undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when matching", () => expect(() => mustMatch(null, /a/)).to.throw(ArgumentError, "Value must match /a/"));
            it("should fail when matching", () => expect(() => mustMatch(undefined, /a/)).to.throw(ArgumentError, "Value must match /a/"));
            it("should fail when matching", () => expect(() => mustMatch("a", /\\./)).to.throw(ArgumentError, "Value must match /\\\\./"));
            it("should fail when matching", () => expect(() => mustMatch("a", /b/)).to.throw(ArgumentError, "Value must match /b/"));
            it("should fail when matching", () => expect(() => mustMatch("b", /a/)).to.throw(ArgumentError, "Value must match /a/"));
            it("should fail when matching", () => expect(() => mustMatch("a tree and a rock", /^[a-z]+$/)).to.throw(ArgumentError, "Value must match /^[a-z]+$/"));
            it("should fail when matching", () => expect(() => mustMatch("d64af57b5bbb5c65", /^[0-9]+$/)).to.throw(ArgumentError, "Value must match /^[0-9]+$/"));
            it("should fail when matching", () => expect(() => mustMatch("353644353i345345", /^[0-9]+$/)).to.throw(ArgumentError, "Value must match /^[0-9]+$/"));
        });
    });
});
