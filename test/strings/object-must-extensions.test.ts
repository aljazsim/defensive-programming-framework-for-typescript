import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { mustBeEmpty, mustBeNullOrEmpty, mustBeNullOrWhiteSpace, mustMatch } from "../../source/strings/string-must-extensions";
import { expect } from "chai";

describe("object must extensions", () =>
{
    describe("mustBeEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should return empty string", () => expect(mustBeEmpty("")).to.equal(""));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => mustBeEmpty(null)).to.throw(ArgumentError, "Value must be empty."));
            it("should fail for undefined", () => expect(() => mustBeEmpty(undefined)).to.throw(ArgumentError, "Value must be empty."));
            it("should fail for \"a\"", () => expect(() => mustBeEmpty("a")).to.throw(ArgumentError, "Value must be empty."));
            it("should fail for \"ab\"", () => expect(() => mustBeEmpty("ab")).to.throw(ArgumentError, "Value must be empty."));
            it("should fail for \"abc\"", () => expect(() => mustBeEmpty("abc")).to.throw(ArgumentError, "Value must be empty."));
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

    describe("mustMatch()", () =>
    {
        describe("success", () =>
        {
            it("should fail for null", () => expect(mustMatch("13", /^[0-9]+$/)).to.equal("13"));
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
