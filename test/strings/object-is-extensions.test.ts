import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { isEmpty, isMatch, isNullOrEmpty, isNullOrWhiteSpace } from "../../source/strings/string-is-extensions";
import { expect } from "chai";

describe("object can extensions", () =>
{
    describe("isEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(isEmpty(null)).to.equal(false));
            it("should return false", () => expect(isEmpty(undefined)).to.equal(false));
            it("should return true", () => expect(isEmpty("")).to.equal(true));
            it("should return false", () => expect(isEmpty("a")).to.equal(false));
            it("should return false", () => expect(isEmpty("ab")).to.equal(false));
            it("should return false", () => expect(isEmpty("abc")).to.equal(false));
        });
    });

    describe("isNullOrEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should be null", () => expect(isNullOrEmpty(null)).to.equal(true));
            it("should be null", () => expect(isNullOrEmpty(undefined)).to.equal(true));
            it("should be null", () => expect(isNullOrEmpty("")).to.equal(true));
            it("should not be null", () => expect(isNullOrEmpty("a")).to.equal(false));
            it("should not be null", () => expect(isNullOrEmpty("aa")).to.equal(false));
            it("should not be null", () => expect(isNullOrEmpty("aaa")).to.equal(false));
        });
    });

    describe("isNullOrWhiteSpace()", () =>
    {
        describe("success", () =>
        {
            it("should be null", () => expect(isNullOrWhiteSpace(null)).to.equal(true));
            it("should be null", () => expect(isNullOrWhiteSpace(undefined)).to.equal(true));
            it("should be null", () => expect(isNullOrWhiteSpace("")).to.equal(true));
            it("should be null", () => expect(isNullOrWhiteSpace("\t")).to.equal(true));
            it("should be null", () => expect(isNullOrWhiteSpace("      ")).to.equal(true));
            it("should be null", () => expect(isNullOrWhiteSpace("    \t  ")).to.equal(true));
            it("should not be null", () => expect(isNullOrWhiteSpace("a")).to.equal(false));
            it("should not be null", () => expect(isNullOrWhiteSpace("aa")).to.equal(false));
            it("should not be null", () => expect(isNullOrWhiteSpace("aaa")).to.equal(false));
            it("should not be null", () => expect(isNullOrWhiteSpace(" a a a ")).to.equal(false));
        });
    });

    describe("doesMatch()", () =>
    {
        describe("success", () =>
        {
            it("should match", () => expect(isMatch(null, /a/)).to.equal(false));
            it("should match", () => expect(isMatch(undefined, /a/)).to.equal(false));
            it("should match", () => expect(isMatch("a", /\\./)).to.equal(false));
            it("should match", () => expect(isMatch("a", /b/)).to.equal(false));
            it("should match", () => expect(isMatch("b", /a/)).to.equal(false));
            it("should match", () => expect(isMatch("a tree and a rock", /^[a-z]+$/)).to.equal(false));
            it("should match", () => expect(isMatch("353644353345345", /^[0-9]+$/)).to.equal(true));
            it("should match", () => expect(isMatch("d64af57b5bbb5c65", /^[a-z0-9]+$/)).to.equal(true));
            it("should match", () => expect(isMatch("13", /^[0-9]+$/)).to.equal(true));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => isMatch("a", null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => isMatch("a", undefined)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });
});
