import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { whenContains, whenContainsDuplicates, whenContainsNull, whenContainsOnlyNull, whenIsEmptyArray, whenIsEqualToArray, whenIsNullOrEmptyArray, whenIsOneOfArray } from "../../source/collections/collection-when-extensions";
import { expect } from "chai";

describe("collections cannot extensions", () =>
{
    describe("whenContains()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(whenContains(null, x => x !== null && x !== undefined && x > 3, [1])).to.eql(null));
            it("should return false", () => expect(whenContains(undefined, x => x !== null && x !== undefined && x > 3, [1])).to.eql(undefined));
            it("should return false", () => expect(whenContains([], x => x !== null && x !== undefined && x > 3, [1])).to.eql([]));
            it("should return true", () => expect(whenContains([null], x => x === null, [1])).to.eql([1]));
            it("should return true", () => expect(whenContains([undefined], x => x === undefined, [1])).to.eql([1]));
            it("should return false", () => expect(whenContains(["aaa"], x => x === null, ["1"])).to.eql(["aaa"]));
            it("should return false", () => expect(whenContains(["aaa", "bb", "c"], x => x === null, ["1"])).to.eql(["aaa", "bb", "c"]));
            it("should return true", () => expect(whenContains([null, "aaa", "bb", "c"], x => x === null, ["1"])).to.eql(["1"]));
            it("should return true", () => expect(whenContains(["aaa", null, "bb", "c"], x => x === null, ["1"])).to.eql(["1"]));
            it("should return true", () => expect(whenContains(["aaa", "bb", null, "c"], x => x === null, ["1"])).to.eql(["1"]));
            it("should return true", () => expect(whenContains(["aaa", "bb", null, "c", null], x => x === null, ["1"])).to.eql(["1"]));
            it("should return true", () => expect(whenContains([null, null, null, null], x => x === null, ["1"])).to.eql(["1"]));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => whenContains([], null, [1])).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for undefined", () => expect(() => whenContains([], undefined, [1])).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("whenContainsDuplicates()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(whenContainsDuplicates(null, [1])).to.equal(null));
            it("should return false", () => expect(whenContainsDuplicates(undefined, [1])).to.equal(undefined));
            it("should return false", () => expect(whenContainsDuplicates([], [1])).to.eql([]));
            it("should return false", () => expect(whenContainsDuplicates([1, 2, 3], [1])).to.eql([1, 2, 3]));
            it("should return false", () => expect(whenContainsDuplicates(["a", "aa", "aaa"], ["1"])).to.eql(["a", "aa", "aaa"]));
            it("should return true", () => expect(whenContainsDuplicates([1, 4, 5, 2, 4, 8, 0], [1])).to.eql([1]));
            it("should return true", () => expect(whenContainsDuplicates(["a", "b", "c", "b", "e"], ["1"])).to.eql(["1"]));
        });
    });

    describe("whenContainsNull()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(whenContainsNull(null, [1])).to.equal(null));
            it("should return false", () => expect(whenContainsNull(undefined, [1])).to.equal(undefined));
            it("should return false", () => expect(whenContainsNull([], [1])).to.eql([]));
            it("should return false", () => expect(whenContainsNull([1, 2, 3], [1])).to.eql([1, 2, 3]));
            it("should return false", () => expect(whenContainsNull(["a", "aa", "aaa"], ["1"])).to.eql(["a", "aa", "aaa"]));
            it("should return true", () => expect(whenContainsNull([null, "aaa", "bb", "c"], ["1"])).to.eql(["1"]));
            it("should return true", () => expect(whenContainsNull(["aaa", null, "bb", "c"], ["1"])).to.eql(["1"]));
            it("should return true", () => expect(whenContainsNull(["aaa", "bb", null, "c"], ["1"])).to.eql(["1"]));
            it("should return true", () => expect(whenContainsNull(["aaa", "bb", null, "c", null], ["1"])).to.eql(["1"]));
            it("should return true", () => expect(whenContainsNull([null, null, null, null], ["1"])).to.eql(["1"]));
        });
    });

    describe("whenContainsOnlyNull()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(whenContainsOnlyNull(null, [1])).to.equal(null));
            it("should return false", () => expect(whenContainsOnlyNull(undefined, [1])).to.equal(undefined));
            it("should return false", () => expect(whenContainsOnlyNull([], [1])).to.eql([]));
            it("should return false", () => expect(whenContainsOnlyNull([1, 2, 3], [1])).to.eql([1, 2, 3]));
            it("should return false", () => expect(whenContainsOnlyNull([1, 2, null, 3], [1])).to.eql([1, 2, null, 3]));
            it("should return false", () => expect(whenContainsOnlyNull([null, 2, null, null], [1])).to.eql([null, 2, null, null]));
            it("should return false", () => expect(whenContainsOnlyNull([undefined, 2, undefined, null], [1])).to.eql([undefined, 2, undefined, null]));
            it("should return false", () => expect(whenContainsOnlyNull(["a", "aa", "aaa"], ["1"])).to.eql(["a", "aa", "aaa"]));
            it("should return true", () => expect(whenContainsOnlyNull([null], [1])).to.eql([1]));
            it("should return true", () => expect(whenContainsOnlyNull([null, null], [1])).to.eql([1]));
            it("should return true", () => expect(whenContainsOnlyNull([null, null, null], [1])).to.eql([1]));
            it("should return true", () => expect(whenContainsOnlyNull([undefined], [1])).to.eql([1]));
            it("should return true", () => expect(whenContainsOnlyNull([undefined, undefined], [1])).to.eql([1]));
            it("should return true", () => expect(whenContainsOnlyNull([undefined, undefined, undefined], [1])).to.eql([1]));
            it("should return true", () => expect(whenContainsOnlyNull(<(number | undefined | null)[]>[null, undefined, null, undefined], [1])).to.eql([1]));
        });
    });

    describe("whenIsEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(whenIsEmptyArray(null, [1])).to.equal(null));
            it("should return false", () => expect(whenIsEmptyArray(undefined, [1])).to.equal(undefined));
            it("should return true", () => expect(whenIsEmptyArray([], [1])).to.eql([1]));
            it("should return false", () => expect(whenIsEmptyArray([1], [2])).to.eql([1]));
            it("should return false", () => expect(whenIsEmptyArray([1, 2], [1])).to.eql([1, 2]));
            it("should return false", () => expect(whenIsEmptyArray([1, null], [1])).to.eql([1, null]));
            it("should return false", () => expect(whenIsEmptyArray([null, null], [1])).to.eql([null, null]));
            it("should return false", () => expect(whenIsEmptyArray([undefined], [1])).to.eql([undefined]));
            it("should return false", () => expect(whenIsEmptyArray([undefined, undefined], [1])).to.eql([undefined, undefined]));
            it("should return false", () => expect(whenIsEmptyArray([null, undefined, null, undefined], <(number | null | undefined)[]>[1])).to.eql([null, undefined, null, undefined]));
        });
    });

    describe("isEqual2()", () =>
    {
        describe("success", () =>
        {
            it("should return true", () => expect(whenIsEqualToArray(null, null, false, [1])).to.eql([1]));
            it("should return true", () => expect(whenIsEqualToArray(undefined, undefined, false, [1])).to.eql([1]));
            it("should return false", () => expect(whenIsEqualToArray(null, [0], false, [1])).to.equal(null));
            it("should return false", () => expect(whenIsEqualToArray([0], null, false, [1])).to.eql([0]));
            it("should return false", () => expect(whenIsEqualToArray(undefined, [0], false, [1])).to.equal(undefined));
            it("should return false", () => expect(whenIsEqualToArray([0], undefined, false, [1])).to.eql([0]));
            it("should return true", () => expect(whenIsEqualToArray([1, 2, 3], [1, 2, 3], false, [1])).to.eql([1]));
            it("should return false", () => expect(whenIsEqualToArray([1, 2, 3], [3, 2, 1], false, [1])).to.eql([1, 2, 3]));
            it("should return true", () => expect(whenIsEqualToArray([1, 2, 3], [3, 2, 1], true, [1])).to.eql([1]));
            it("should return true", () => expect(whenIsEqualToArray(["a", "b", "c"], ["a", "b", "c"], false, ["1"])).to.eql(["1"]));
        });
    });

    describe("whenIsNullOrEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should true", () => expect(whenIsNullOrEmptyArray(null, [1])).to.eql([1]));
            it("should true", () => expect(whenIsNullOrEmptyArray(undefined, [1])).to.eql([1]));
            it("should true", () => expect(whenIsNullOrEmptyArray([], [1])).to.eql([1]));
            it("should false", () => expect(whenIsNullOrEmptyArray([1], [2])).to.eql([1]));
            it("should false", () => expect(whenIsNullOrEmptyArray([1, 2], [1])).to.eql([1, 2]));
            it("should false", () => expect(whenIsNullOrEmptyArray(["a"], ["1"])).to.eql(["a"]));
            it("should false", () => expect(whenIsNullOrEmptyArray(["a", "b"], ["1"])).to.eql(["a", "b"]));
        });
    });

    describe("isOneOf()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(whenIsOneOfArray(null, [1, 2, 3], 1)).to.equal(null));
            it("should return false", () => expect(whenIsOneOfArray(undefined, [1, 2, 3], 1)).to.equal(undefined));
            it("should return false", () => expect(whenIsOneOfArray(1, [0, 2, 3], 1)).to.equal(1));
            it("should return false", () => expect(whenIsOneOfArray("aaa", ["a", "aa", "aaaa"], "1")).to.equal("aaa"));
            it("should return false", () => expect(whenIsOneOfArray("x", <(string | null | undefined)[]>[null, undefined], "a")).to.equal("x"));
            it("should return true", () => expect(whenIsOneOfArray(1, [0, 1, 2, 3, 4], 9)).to.equal(9));
            it("should return true", () => expect(whenIsOneOfArray(3, [0, 1, 2, 3, 4], 9)).to.equal(9));
            it("should return true", () => expect(whenIsOneOfArray(3, [0, 3, 3, 3, 1, 2, 3, 4], 9)).to.equal(9));
            it("should return true", () => expect(whenIsOneOfArray("x", [null, undefined, 1, 6, "a", "x", -1, "CCC"], "9")).to.equal("9"));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => whenIsOneOfArray(1, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for undefined", () => expect(() => whenIsOneOfArray(1, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });
});
