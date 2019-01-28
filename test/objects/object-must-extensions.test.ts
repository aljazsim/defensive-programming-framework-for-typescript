import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { mustBe, mustBeEqualTo, mustBeInstanceOf, mustBeNull, mustBeOneOf, mustBeTypeOf } from "../../source/objects/object-must-extensions";
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
            it("should be instance of", () => expect(mustBeOneOf(1, [0, 1, 2, 3])).to.equal(1));
            it("should be instance of", () => expect(mustBeOneOf("a", ["a", "b", "c"])).to.equal("a"));
        });

        describe("failure", () =>
        {
            it("should not be one of", () => expect(() => mustBeOneOf(null, [1])).to.throw(ArgumentError, "Value must be one of [1]"));
            it("should not be one of", () => expect(() => mustBeOneOf(undefined, [1])).to.throw(ArgumentError, "Value must be one of [1]"));
            it("should not be one of", () => expect(() => mustBeOneOf(0, [1])).to.throw(ArgumentError, "Value must be one of [1]"));
            it("should not be one of", () => expect(() => mustBeOneOf("a", ["b"])).to.throw(ArgumentError, "Value must be one of [b]"));
            it("should not be one of", () => expect(() => mustBeOneOf({ "a": 3 }, [{ "a": 4 }])).to.throw(ArgumentError, "Value must be one of [[object Object]]"));
        });
    });

    describe("mustBeInstanceOf()", () =>
    {
        describe("success", () =>
        {
            const temp = new ArgumentError("test");

            it("should be of instance", () => expect(mustBeInstanceOf(temp, Error)).to.equal(temp));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => mustBeInstanceOf(new ArgumentError("test"), null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => mustBeInstanceOf(new ArgumentError("test"), undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should not be instance of", () => expect(() => mustBeInstanceOf(1, Error)).to.throw(ArgumentError, "Value must be instance of type Error"));
            it("should not be instance of", () => expect(() => mustBeInstanceOf("a", Error)).to.throw(ArgumentError, "Value must be instance of type Error"));
        });
    });

});
