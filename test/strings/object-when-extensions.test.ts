import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { whenIsEmpty, whenIsMatch, whenIsNullOrEmpty, whenIsNullOrWhiteSpace } from "../../source/strings/string-when-extensions";
import { expect } from "chai";

describe("object can extensions", () =>
{
    describe("whenIsEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should return true", () => expect(whenIsEmpty("", "1")).to.equal("1"));
            it("should return false", () => expect(whenIsEmpty("a", "1")).to.equal("a"));
            it("should return false", () => expect(whenIsEmpty("ab", "1")).to.equal("ab"));
            it("should return false", () => expect(whenIsEmpty("abc", "1")).to.equal("abc"));
        });
    });

    describe("whenIsNullOrEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should be valid", () => expect(whenIsNullOrEmpty(null, "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNullOrEmpty(undefined, "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNullOrEmpty("", "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNullOrEmpty("a", "9")).to.equal("a"));
            it("should be valid", () => expect(whenIsNullOrEmpty("aa", "9")).to.equal("aa"));
            it("should be valid", () => expect(whenIsNullOrEmpty("aaa", "9")).to.equal("aaa"));
        });
    });

    describe("mustIsNullOrWhiteSpace()", () =>
    {
        describe("success", () =>
        {
            it("should be valid", () => expect(whenIsNullOrWhiteSpace(null, "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNullOrWhiteSpace(undefined, "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNullOrWhiteSpace("", "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNullOrWhiteSpace("\t", "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNullOrWhiteSpace("     \t ", "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNullOrWhiteSpace("   ", "9")).to.equal("9"));
            it("should be valid", () => expect(whenIsNullOrWhiteSpace("a", "9")).to.equal("a"));
            it("should be valid", () => expect(whenIsNullOrWhiteSpace("aa", "9")).to.equal("aa"));
            it("should be valid", () => expect(whenIsNullOrWhiteSpace("aaa", "9")).to.equal("aaa"));
            it("should be valid", () => expect(whenIsNullOrWhiteSpace(" a a a ", "9")).to.equal(" a a a "));
        });
    });

    describe("whenDoesMatch()", () =>
    {
        describe("success", () =>
        {
            it("should match", () => expect(whenIsMatch(null, /a/, "9")).to.equal(null));
            it("should match", () => expect(whenIsMatch(undefined, /a/, "9")).to.equal(undefined));
            it("should match", () => expect(whenIsMatch("a", /\\./, "9")).to.equal("a"));
            it("should match", () => expect(whenIsMatch("a", /b/, "9")).to.equal("a"));
            it("should match", () => expect(whenIsMatch("b", /a/, "9")).to.equal("b"));
            it("should match", () => expect(whenIsMatch("a tree and a rock", /^[a-z]+$/, "9")).to.equal("a tree and a rock"));
            it("should match", () => expect(whenIsMatch("d64af57b5bbb5c65", /^[0-9]+$/, "9")).to.equal("d64af57b5bbb5c65"));
            it("should match", () => expect(whenIsMatch("353644353i345345", /^[0-9]+$/, "9")).to.equal("353644353i345345"));
            it("should match", () => expect(whenIsMatch("13", /^[0-9]+$/, "9")).to.equal("9"));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => whenIsMatch("a", null, "9")).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsMatch("a", undefined, "9")).to.throw(ArgumentError, "Value cannot be null."));
        });
    });
});
