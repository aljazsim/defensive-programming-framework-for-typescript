import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { whenDoesNotMatch, whenIsNotEmpty, whenIsNotNullOrEmpty, whenIsNotNullOrWhiteSpace } from "../../source/strings/string-when-not-extensions";
import { expect } from "chai";

describe("object cannot extensions", () =>
{
    describe("whenIsNotEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(whenIsNotEmpty(null, "a")).to.eql("a"));
            it("should return false", () => expect(whenIsNotEmpty(undefined, "a")).to.eql("a"));
            it("should return true", () => expect(whenIsNotEmpty("", "1")).to.equal(""));
            it("should return false", () => expect(whenIsNotEmpty("a", "1")).to.equal("1"));
            it("should return false", () => expect(whenIsNotEmpty("ab", "1")).to.equal("1"));
            it("should return false", () => expect(whenIsNotEmpty("abc", "1")).to.equal("1"));
        });
    });

    describe("whenIsNotNullOrEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should be valid", () => expect(whenIsNotNullOrEmpty(null, "9")).to.equal(null));
            it("should be valid", () => expect(whenIsNotNullOrEmpty(undefined, "9")).to.equal(undefined));
            it("should be valid", () => expect(whenIsNotNullOrEmpty("", "9")).to.equal(""));
            it("should be valid", () => expect(whenIsNotNullOrEmpty("a", "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNotNullOrEmpty("aa", "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNotNullOrEmpty("aaa", "9")).to.equal("9"));
        });
    });

    describe("mustIsNotNullOrWhiteSpace()", () =>
    {
        describe("success", () =>
        {
            it("should be valid", () => expect(whenIsNotNullOrWhiteSpace(null, "9")).to.equal(null));
            it("should be valid", () => expect(whenIsNotNullOrWhiteSpace(undefined, "9")).to.equal(undefined));
            it("should be valid", () => expect(whenIsNotNullOrWhiteSpace("", "9")).to.equal(""));
            it("should be valid", () => expect(whenIsNotNullOrWhiteSpace("\t", "9")).to.equal("\t"));
            it("should be valid", () => expect(whenIsNotNullOrWhiteSpace("     \t ", "9")).to.equal("     \t "));
            it("should be valid", () => expect(whenIsNotNullOrWhiteSpace("   ", "9")).to.equal("   "));
            it("should be valid", () => expect(whenIsNotNullOrWhiteSpace("a", "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNotNullOrWhiteSpace("aa", "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNotNullOrWhiteSpace("aaa", "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNotNullOrWhiteSpace(" a a a ", "9")).to.equal("9"));
        });
    });

    describe("whenDoesNotMatch()", () =>
    {
        describe("success", () =>
        {
            it("should not match", () => expect(whenDoesNotMatch(null, /a/, "9")).to.equal("9"));
            it("should not match", () => expect(whenDoesNotMatch(undefined, /a/, "9")).to.equal("9"));
            it("should not match", () => expect(whenDoesNotMatch("a", /\\./, "9")).to.equal("9"));
            it("should not match", () => expect(whenDoesNotMatch("a", /b/, "9")).to.equal("9"));
            it("should not match", () => expect(whenDoesNotMatch("b", /a/, "9")).to.equal("9"));
            it("should not match", () => expect(whenDoesNotMatch("a tree and a rock", /^[a-z]+$/, "9")).to.equal("9"));
            it("should not match", () => expect(whenDoesNotMatch("d64af57b5bbb5c65", /^[0-9]+$/, "9")).to.equal("9"));
            it("should not match", () => expect(whenDoesNotMatch("353644353i345345", /^[0-9]+$/, "9")).to.equal("9"));
            it("should match", () => expect(whenDoesNotMatch("13", /^[0-9]+$/, "9")).to.equal("13"));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => whenDoesNotMatch("a", null, "9")).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenDoesNotMatch("a", undefined, "9")).to.throw(ArgumentError, "Value cannot be null."));
        });
    });
});
