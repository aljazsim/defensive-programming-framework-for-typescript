import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { contains, containsDuplicates, containsNull, containsOnlyNull, isEmptyArray, isEqualToArray, isNullOrEmptyArray, isOneOfArrays } from "../../source/collections/collection-is-extensions";
import { expect } from "chai";

describe("collections cannot extensions", () =>
{
    describe("contains()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(contains(null, x => x !== null && x !== undefined && x > 3)).to.equal(false));
            it("should return false", () => expect(contains(undefined, x => x !== null && x !== undefined && x > 3)).to.equal(false));
            it("should return false", () => expect(contains([], x => x !== null && x !== undefined && x > 3)).to.equal(false));
            it("should return true", () => expect(contains([null], x => x === null)).to.equal(true));
            it("should return true", () => expect(contains([undefined], x => x === undefined)).to.equal(true));

            it("should return false", () => expect(contains(["aaa"], x => x === null)).to.equal(false));
            it("should return false", () => expect(contains(["aaa", "bb", "c"], x => x === null)).to.equal(false));
            it("should return true", () => expect(contains([null, "aaa", "bb", "c"], x => x === null)).to.equal(true));
            it("should return true", () => expect(contains(["aaa", null, "bb", "c"], x => x === null)).to.equal(true));
            it("should return true", () => expect(contains(["aaa", "bb", null, "c"], x => x === null)).to.equal(true));
            it("should return true", () => expect(contains(["aaa", "bb", null, "c", null], x => x === null)).to.equal(true));
            it("should return true", () => expect(contains([null, null, null, null], x => x === null)).to.equal(true));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => contains([], null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for undefined", () => expect(() => contains([], undefined)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("containsDuplicates()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(containsDuplicates(null)).to.equal(false));
            it("should return false", () => expect(containsDuplicates(undefined)).to.equal(false));
            it("should return false", () => expect(containsDuplicates([])).to.equal(false));
            it("should return false", () => expect(containsDuplicates([1, 2, 3])).to.equal(false));
            it("should return false", () => expect(containsDuplicates(["a", "aa", "aaa"])).to.equal(false));
            it("should return true", () => expect(containsDuplicates([1, 4, 5, 2, 4, 8, 0])).to.equal(true));
            it("should return true", () => expect(containsDuplicates(["a", "b", "c", "b", "e"])).to.equal(true));
        });
    });

    describe("containsNull()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(containsNull(null)).to.equal(false));
            it("should return false", () => expect(containsNull(undefined)).to.equal(false));
            it("should return false", () => expect(containsNull([])).to.equal(false));
            it("should return false", () => expect(containsNull([1, 2, 3])).to.equal(false));
            it("should return false", () => expect(containsNull(["a", "aa", "aaa"])).to.equal(false));
            it("should return true", () => expect(containsNull([null, "aaa", "bb", "c"])).to.equal(true));
            it("should return true", () => expect(containsNull(["aaa", null, "bb", "c"])).to.equal(true));
            it("should return true", () => expect(containsNull(["aaa", "bb", null, "c"])).to.equal(true));
            it("should return true", () => expect(containsNull(["aaa", "bb", null, "c", null])).to.equal(true));
            it("should return true", () => expect(containsNull([null, null, null, null])).to.equal(true));
        });
    });

    describe("containsOnlyNull()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(containsOnlyNull(null)).to.equal(false));
            it("should return false", () => expect(containsOnlyNull(undefined)).to.equal(false));
            it("should return false", () => expect(containsOnlyNull([])).to.equal(false));
            it("should return false", () => expect(containsOnlyNull([1, 2, 3])).to.equal(false));
            it("should return false", () => expect(containsOnlyNull([1, 2, null, 3])).to.equal(false));
            it("should return false", () => expect(containsOnlyNull([null, 2, null, null])).to.equal(false));
            it("should return false", () => expect(containsOnlyNull([undefined, 2, undefined, null])).to.equal(false));
            it("should return false", () => expect(containsOnlyNull(["a", "aa", "aaa"])).to.equal(false));
            it("should return true", () => expect(containsOnlyNull([null])).to.equal(true));
            it("should return true", () => expect(containsOnlyNull([null, null])).to.equal(true));
            it("should return true", () => expect(containsOnlyNull([null, null, null])).to.equal(true));
            it("should return true", () => expect(containsOnlyNull([undefined])).to.equal(true));
            it("should return true", () => expect(containsOnlyNull([undefined, undefined])).to.equal(true));
            it("should return true", () => expect(containsOnlyNull([undefined, undefined, undefined])).to.equal(true));
            it("should return true", () => expect(containsOnlyNull([null, undefined, null, undefined])).to.equal(true));
        });
    });

    describe("isEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(isEmptyArray(null)).to.equal(false));
            it("should return false", () => expect(isEmptyArray(undefined)).to.equal(false));
            it("should return true", () => expect(isEmptyArray([])).to.equal(true));
            it("should return false", () => expect(isEmptyArray([1])).to.equal(false));
            it("should return false", () => expect(isEmptyArray([1, 2])).to.equal(false));
            it("should return false", () => expect(isEmptyArray([1, null])).to.equal(false));
            it("should return false", () => expect(isEmptyArray([null, null])).to.equal(false));
            it("should return false", () => expect(isEmptyArray([undefined])).to.equal(false));
            it("should return false", () => expect(isEmptyArray([undefined, undefined])).to.equal(false));
            it("should return false", () => expect(isEmptyArray([null, undefined, null, undefined])).to.equal(false));
        });
    });

    describe("isEqual2()", () =>
    {
        describe("success", () =>
        {
            it("should return true", () => expect(isEqualToArray(null, null)).to.equal(true));
            it("should return true", () => expect(isEqualToArray(undefined, undefined)).to.equal(true));
            it("should return false", () => expect(isEqualToArray(null, [0])).to.equal(false));
            it("should return false", () => expect(isEqualToArray([0], null)).to.equal(false));
            it("should return false", () => expect(isEqualToArray(undefined, [0])).to.equal(false));
            it("should return false", () => expect(isEqualToArray([0], undefined)).to.equal(false));
            it("should return true", () => expect(isEqualToArray([1, 2, 3], [1, 2, 3])).to.equal(true));
            it("should return false", () => expect(isEqualToArray([1, 2, 3], [3, 2, 1])).to.equal(false));
            it("should return true", () => expect(isEqualToArray([1, 2, 3], [3, 2, 1], true)).to.equal(true));
            it("should return true", () => expect(isEqualToArray(["a", "b", "c"], ["a", "b", "c"])).to.equal(true));

            it("should return true", () => expect(isEqualToArray(["a", "b", "c"], ["a", "b", "d"])).to.equal(false));
            it("should return true", () => expect(isEqualToArray([1, 2, 3], [3, 4, 5], true)).to.equal(false));

        });
    });

    describe("isNullOrEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should true", () => expect(isNullOrEmptyArray(null)).to.equal(true));
            it("should true", () => expect(isNullOrEmptyArray(undefined)).to.equal(true));
            it("should true", () => expect(isNullOrEmptyArray([])).to.equal(true));
            it("should false", () => expect(isNullOrEmptyArray([1])).to.equal(false));
            it("should false", () => expect(isNullOrEmptyArray([1, 2])).to.equal(false));
            it("should false", () => expect(isNullOrEmptyArray(["a"])).to.equal(false));
            it("should false", () => expect(isNullOrEmptyArray(["a", "b"])).to.equal(false));
        });
    });

    describe("isOneOf()", () =>
    {
        describe("success", () =>
        {
            let tmp: (string | null | undefined)[] = [null, undefined];

            it("should return false", () => expect(isOneOfArrays(null, [1, 2, 3])).to.equal(false));
            it("should return false", () => expect(isOneOfArrays(undefined, [1, 2, 3])).to.equal(false));
            it("should return false", () => expect(isOneOfArrays(1, [0, 2, 3])).to.equal(false));
            it("should return false", () => expect(isOneOfArrays("aaa", ["a", "aa", "aaaa"])).to.equal(false));
            it("should return false", () => expect(isOneOfArrays("x", tmp)).to.equal(false));
            it("should return true", () => expect(isOneOfArrays(1, [0, 1, 2, 3, 4])).to.equal(true));
            it("should return true", () => expect(isOneOfArrays(3, [0, 1, 2, 3, 4])).to.equal(true));
            it("should return true", () => expect(isOneOfArrays(3, [0, 3, 3, 3, 1, 2, 3, 4])).to.equal(true));
            it("should return true", () => expect(isOneOfArrays("x", [null, undefined, 1, 6, "a", "x", -1, "CCC"])).to.equal(true));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => isOneOfArrays(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for undefined", () => expect(() => isOneOfArrays(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });
});
