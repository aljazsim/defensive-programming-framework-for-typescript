import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { cannotBeEmpty, cannotBeNullOrEmpty, cannotBeNullOrWhiteSpace, cannotMatch } from "../../source/strings/string-cannot-extensions";
import { expect } from "chai";

describe("object cannot extensions", () =>
{
    describe("cannotBeEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should return null", () => expect(cannotBeEmpty(null)).to.equal(null));
            it("should return undefined", () => expect(cannotBeEmpty(undefined)).to.equal(undefined));
            it("should return \"a\"", () => expect(cannotBeEmpty("a")).to.equal("a"));
            it("should return \"ab\"", () => expect(cannotBeEmpty("ab")).to.equal("ab"));
            it("should return \"abc\"", () => expect(cannotBeEmpty("abc")).to.equal("abc"));
        });

        describe("failure", () =>
        {
            it("should fail for empty string", () => expect(() => cannotBeEmpty("")).to.throw(ArgumentError, "Value cannot be empty."));
        });

    });

    describe("cannotBeNullOrEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should be valid", () => expect(cannotBeNullOrEmpty("a")).to.equal("a"));
            it("should be valid", () => expect(cannotBeNullOrEmpty("aa")).to.equal("aa"));
            it("should be valid", () => expect(cannotBeNullOrEmpty("aaa")).to.equal("aaa"));
        });

        describe("failure", () =>
        {
            it("should be null or empty", () => expect(() => cannotBeNullOrEmpty(null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should be null or empty", () => expect(() => cannotBeNullOrEmpty(undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should be null or empty", () => expect(() => cannotBeNullOrEmpty("")).to.throw(ArgumentError, "Value cannot be empty."));
        });
    });

    describe("cannotBeNullOrWhiteSpace()", () =>
    {
        describe("success", () =>
        {
            it("should be valid", () => expect(cannotBeNullOrWhiteSpace("a")).to.equal("a"));
            it("should be valid", () => expect(cannotBeNullOrWhiteSpace("aa")).to.equal("aa"));
            it("should be valid", () => expect(cannotBeNullOrWhiteSpace("aaa")).to.equal("aaa"));
            it("should be valid", () => expect(cannotBeNullOrWhiteSpace(" a a a ")).to.equal(" a a a "));
        });

        describe("failure", () =>
        {
            it("should be null", () => expect(() => cannotBeNullOrWhiteSpace(null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should be null", () => expect(() => cannotBeNullOrWhiteSpace(undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should be null", () => expect(() => cannotBeNullOrWhiteSpace("")).to.throw(ArgumentError, "Value cannot be empty."));
            it("should be null", () => expect(() => cannotBeNullOrWhiteSpace("\t")).to.throw(ArgumentError, "Value cannot be white space."));
            it("should be null", () => expect(() => cannotBeNullOrWhiteSpace("    \t        ")).to.throw(ArgumentError, "Value cannot be white space."));
            it("should be null", () => expect(() => cannotBeNullOrWhiteSpace("    ")).to.throw(ArgumentError, "Value cannot be white space."));
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
