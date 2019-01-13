import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { mustBeEmptyArray, mustBeEqualToArray, mustBeNullOrEmptyArray, mustBeOneOfArray, mustContain, mustContainDuplicates, mustContainNull, mustContainOnlyNull } from "../../source/collections/collection-must-extensions";
import { expect } from "chai";

describe("collections must extensions", () =>
{
    describe("mustBeEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should return empty array", () => expect(mustBeEmptyArray([])).to.eql([]));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => mustBeEmptyArray(null)).to.throw(ArgumentError, "Value must be empty."));
            it("should fail for undefined", () => expect(() => mustBeEmptyArray(undefined)).to.throw(ArgumentError, "Value must be empty."));
            it("should fail for [1]", () => expect(() => mustBeEmptyArray([1])).to.throw(ArgumentError, "Value must be empty."));
            it("should fail for [1, 2]", () => expect(() => mustBeEmptyArray([1, 2])).to.throw(ArgumentError, "Value must be empty."));
        });
    });

    describe("mustBeEqual2()", () =>
    {
        describe("success", () =>
        {
            it("should return null", () => expect(mustBeEqualToArray(null, null)).to.equal(null));
            it("should return undefined", () => expect(mustBeEqualToArray(undefined, undefined)).to.equal(undefined));
            it("should return identical array", () => expect(mustBeEqualToArray([1, 2, 3], [1, 2, 3])).to.eql([1, 2, 3]));
            it("should return identical array", () => expect(mustBeEqualToArray([1, 2, 3], [3, 1, 2], true)).to.eql([1, 2, 3]));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => mustBeEqualToArray(null, [0, 1, 2, 3])).to.throw(ArgumentError, "Value must be equal to [0, 1, 2, 3]."));
            it("should fail for null", () => expect(() => mustBeEqualToArray([0], null)).to.throw(ArgumentError, "Value must be equal to null."));
            it("should fail for undefined", () => expect(() => mustBeEqualToArray(undefined, [0, 1, 2, 3])).to.throw(ArgumentError, "Value must be equal to [0, 1, 2, 3]."));
            it("should fail for undefined", () => expect(() => mustBeEqualToArray([0], undefined)).to.throw(ArgumentError, "Value must be equal to undefined."));
            it("should fail for [1, 2, 3]", () => expect(() => mustBeEqualToArray([1, 2, 3], [0, 1, 2, 3])).to.throw(ArgumentError, "Value must be equal to [0, 1, 2, 3]."));
            it("should fail for [1, 2, 3]", () => expect(() => mustBeEqualToArray([1, 2, 3], [3, 4, 5])).to.throw(ArgumentError, "Value must be equal to [3, 4, 5]."));
            it("should fail for [1, 2, 3]", () => expect(() => mustBeEqualToArray([1, 2, 3], [3, 2, 1])).to.throw(ArgumentError, "Value must be equal to [3, 2, 1]."));
            it("should fail for [\"a\", \"b\", \"c\"]", () => expect(() => mustBeEqualToArray(["a", "b", "c"], ["a", "c", "d"])).to.throw(ArgumentError, "Value must be equal to [a, c, d]."));
        });
    });

    describe("mustBeNullOrEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should return null", () => expect(mustBeNullOrEmptyArray(null)).to.equal(null));
            it("should return undefined", () => expect(mustBeNullOrEmptyArray(undefined)).to.equal(undefined));
            it("should return for empty array", () => expect(mustBeNullOrEmptyArray([])).to.eql([]));
        });

        describe("failure", () =>
        {
            it("should fail for [1]", () => expect(() => mustBeNullOrEmptyArray([1])).to.throw(ArgumentError, "Value must be null or empty."));
            it("should fail for [1, 2]", () => expect(() => mustBeNullOrEmptyArray([1, 2])).to.throw(ArgumentError, "Value must be null or empty."));
            it("should fail for [\"a\"]", () => expect(() => mustBeNullOrEmptyArray(["a"])).to.throw(ArgumentError, "Value must be null or empty."));
            it("should fail for [\"a\", \"b\"]", () => expect(() => mustBeNullOrEmptyArray(["a", "b"])).to.throw(ArgumentError, "Value must be null or empty."));
        });
    });

    describe("mustBeOneOf()", () =>
    {
        describe("success", () =>
        {
            it("should return included value", () => expect(mustBeOneOfArray(1, [0, 1, 2, 3, 4])).to.equal(1));
        });

        describe("failure", () =>
        {
            it("should return null", () => expect(() => mustBeOneOfArray(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should return undefined", () => expect(() => mustBeOneOfArray(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => mustBeOneOfArray(null, [1, 2, 3])).to.throw(ArgumentError, "Value must be one of [1, 2, 3]."));
            it("should fail for undefined", () => expect(() => mustBeOneOfArray(undefined, [1, 2, 3])).to.throw(ArgumentError, "Value must be one of [1, 2, 3]."));
            it("should fail for 1", () => expect(() => mustBeOneOfArray(1, [0, 2, 3])).to.throw(ArgumentError, "Value must be one of [0, 2, 3]."));
            it("should fail for \"aaa\"", () => expect(() => mustBeOneOfArray("aaa", ["a", "aa", "aaaa"])).to.throw(ArgumentError, "Value must be one of [a, aa, aaaa]."));
        });
    });

    describe("mustContain()", () =>
    {
        describe("success", () =>
        {
            it("should return [1]", () => expect(mustContain([1], x => x === 1)).to.eql([1]));
            it("should return [1, 2, 3]", () => expect(mustContain([1, 2, 3], x => x === 1)).to.eql([1, 2, 3]));

            it("should fail for undefined", () => expect(mustContain([1, 2, 3], x => x === 3)).to.eql([1, 2, 3]));
            it("should fail for undefined", () => expect(mustContain(["a", "b", "c"], x => x === "c")).to.eql(["a", "b", "c"]));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => mustContain(null, x => x === null)).to.throw(ArgumentError, "Value must contain the specified expression."));
            it("should fail for null", () => expect(() => mustContain([], null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for undefined", () => expect(() => mustContain(undefined, x => x === undefined)).to.throw(ArgumentError, "Value must contain the specified expression."));
            it("should fail for undefined", () => expect(() => mustContain([], undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for []", () => expect(() => mustContain([], x => x !== null && x !== undefined && x > 3)).to.throw(ArgumentError, "Value must contain the specified expression."));
            it("should fail for [1, 2, 3]", () => expect(() => mustContain([1, 2, 3], x => x !== null && x !== undefined && x > 3)).to.throw(ArgumentError, "Value must contain the specified expression."));
            it("should fail for [\"a\", \"aa\", \"aaa\"]", () => expect(() => mustContain(["a", "aa", "aaa"], x => x !== null && x !== undefined && x.indexOf("b") > 0)).to.throw(ArgumentError, "Value must contain the specified expression."));
        });
    });

    describe("mustContainDuplicates()", () =>
    {
        describe("success", () =>
        {
            it("should return duplicates", () => expect(mustContainDuplicates([1, 4, 5, 2, 4, 8, 0])).to.eql([1, 4, 5, 2, 4, 8, 0]));
            it("should return duplicates", () => expect(mustContainDuplicates(["a", "b", "c", "b", "e"])).to.eql(["a", "b", "c", "b", "e"]));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => mustContainDuplicates(null)).to.throw(ArgumentError, "Value must contain duplicates."));
            it("should fail for undefined", () => expect(() => mustContainDuplicates(undefined)).to.throw(ArgumentError, "Value must contain duplicates."));
            it("should fail for []", () => expect(() => mustContainDuplicates([])).to.throw(ArgumentError, "Value must contain duplicates."));
            it("should fail for [1, 2, 3]", () => expect(() => mustContainDuplicates([1, 2, 3])).to.throw(ArgumentError, "Value must contain duplicates."));
            it("should fail for [\"a\", \"aa\", \"aaa\"]", () => expect(() => mustContainDuplicates(["a", "aa", "aaa"])).to.throw(ArgumentError, "Value must contain duplicates."));
        });
    });

    describe("mustContainNull()", () =>
    {
        describe("success", () =>
        {
            it("should fail for containing null", () => expect(mustContainNull([1, 4, 5, null, 4, 8, 0])).to.eql([1, 4, 5, null, 4, 8, 0]));
            it("should fail for containing undefined", () => expect(mustContainNull([1, 4, 5, undefined, 4, 8, 0])).to.eql([1, 4, 5, undefined, 4, 8, 0]));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => mustContainNull(null)).to.throw(ArgumentError, "Value must contain null."));
            it("should fail for undefined", () => expect(() => mustContainNull(undefined)).to.throw(ArgumentError, "Value must contain null."));
            it("should fail for []", () => expect(() => mustContainNull([])).to.throw(ArgumentError, "Value must contain null."));
            it("should fail for [1, 2, 3]", () => expect(() => mustContainNull([1, 2, 3])).to.throw(ArgumentError, "Value must contain null."));
            it("should fail for [\"a\", \"aa\", \"aaa\"]", () => expect(() => mustContainNull(["a", "aa", "aaa"])).to.throw(ArgumentError, "Value must contain null."));
        });
    });

    describe("mustContainOnlyNull()", () =>
    {
        describe("success", () =>
        {
            it("should return [null]", () => expect(mustContainOnlyNull([null])).to.eql([null]));
            it("should return [null, null]", () => expect(mustContainOnlyNull([null, null])).to.eql([null, null]));
            it("should return [undefined]", () => expect(mustContainOnlyNull([undefined])).to.eql([undefined]));
            it("should return [undefined, undefined]", () => expect(mustContainOnlyNull([undefined, undefined])).to.eql([undefined, undefined]));
            it("should return [null, undefined, undefined, null]", () => expect(mustContainOnlyNull([null, undefined, undefined, null])).to.eql([null, undefined, undefined, null]));

        });

        describe("failure", () =>
        {
            it("should return null", () => expect(() => mustContainOnlyNull(null)).to.throw(ArgumentError, "Value must contain only null."));
            it("should return undefined", () => expect(() => mustContainOnlyNull(undefined)).to.throw(ArgumentError, "Value must contain only null."));
            it("should return []", () => expect(() => mustContainOnlyNull([])).to.throw(ArgumentError, "Value must contain only null."));
            it("should return [1, 2, 3]", () => expect(() => mustContainOnlyNull([1, 2, 3])).to.throw(ArgumentError, "Value must contain only null."));
            it("should return [1, 2, null, 3]", () => expect(() => mustContainOnlyNull([1, 2, null, 3])).to.throw(ArgumentError, "Value must contain only null."));
            it("should return [null, 2, null, null]", () => expect(() => mustContainOnlyNull([null, 2, null, null])).to.throw(ArgumentError, "Value must contain only null."));
            it("should return [undefined, 2, undefined, null]", () => expect(() => mustContainOnlyNull([undefined, 2, undefined, null])).to.throw(ArgumentError, "Value must contain only null."));
            it("should return [\"a\", \"aa\", \"aaa\"]", () => expect(() => mustContainOnlyNull(["a", "aa", "aaa"])).to.throw(ArgumentError, "Value must contain only null."));
        });
    });
});
