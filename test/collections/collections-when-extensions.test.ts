import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { whenContains, whenContainsDuplicates, whenContainsNull, whenContainsOnlyNull, whenIsEmpty, whenIsEqualTo2, whenIsNullOrEmpty, whenIsOneOf2 } from "../../source/collections/collection-when-extensions";
import { expect } from "chai";

describe("collections cannot extensions", () =>
{
    describe("whenContains()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(whenContains(null, x => x > 3, [1])).to.eql(null));
            it("should return false", () => expect(whenContains(undefined, x => x > 3, [1])).to.eql(undefined));
            it("should return false", () => expect(whenContains([], x => x > 3, [1])).to.eql([]));
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
            it("should return true", () => expect(whenContainsOnlyNull([null, undefined, null, undefined], [1])).to.eql([1]));
        });
    });

    describe("whenIsEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(whenIsEmpty(null, [1])).to.equal(null));
            it("should return false", () => expect(whenIsEmpty(undefined, [1])).to.equal(undefined));
            it("should return true", () => expect(whenIsEmpty("", "1")).to.equal("1"));
            it("should return true", () => expect(whenIsEmpty([], [1])).to.eql([1]));
            it("should return false", () => expect(whenIsEmpty("a", "1")).to.equal("a"));
            it("should return false", () => expect(whenIsEmpty("ab", "1")).to.equal("ab"));
            it("should return false", () => expect(whenIsEmpty("abc", "1")).to.equal("abc"));
            it("should return false", () => expect(whenIsEmpty([1], [2])).to.eql([1]));
            it("should return false", () => expect(whenIsEmpty([1, 2], [1])).to.eql([1, 2]));
            it("should return false", () => expect(whenIsEmpty([1, null], [1])).to.eql([1, null]));
            it("should return false", () => expect(whenIsEmpty([null, null], [1])).to.eql([null, null]));
            it("should return false", () => expect(whenIsEmpty([undefined], [1])).to.eql([undefined]));
            it("should return false", () => expect(whenIsEmpty([undefined, undefined], [1])).to.eql([undefined, undefined]));
            it("should return false", () => expect(whenIsEmpty([null, undefined, null, undefined], [1])).to.eql([null, undefined, null, undefined]));
        });
    });

    describe("isEqual2()", () =>
    {
        describe("success", () =>
        {
            it("should return true", () => expect(whenIsEqualTo2(null, null, false, [1])).to.eql([1]));
            it("should return true", () => expect(whenIsEqualTo2(undefined, undefined, false, [1])).to.eql([1]));
            it("should return false", () => expect(whenIsEqualTo2(null, [0], false, [1])).to.equal(null));
            it("should return false", () => expect(whenIsEqualTo2([0], null, false, [1])).to.eql([0]));
            it("should return false", () => expect(whenIsEqualTo2(undefined, [0], false, [1])).to.equal(undefined));
            it("should return false", () => expect(whenIsEqualTo2([0], undefined, false, [1])).to.eql([0]));
            it("should return true", () => expect(whenIsEqualTo2([1, 2, 3], [1, 2, 3], false, [1])).to.eql([1]));
            it("should return false", () => expect(whenIsEqualTo2([1, 2, 3], [3, 2, 1], false, [1])).to.eql([1, 2, 3]));
            it("should return true", () => expect(whenIsEqualTo2([1, 2, 3], [3, 2, 1], true, [1])).to.eql([1]));
            it("should return true", () => expect(whenIsEqualTo2(["a", "b", "c"], ["a", "b", "c"], false, ["1"])).to.eql(["1"]));
        });
    });

    describe("whenIsNullOrEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should true", () => expect(whenIsNullOrEmpty(null, [1])).to.eql([1]));
            it("should true", () => expect(whenIsNullOrEmpty(undefined, [1])).to.eql([1]));
            it("should true", () => expect(whenIsNullOrEmpty([], [1])).to.eql([1]));
            it("should true", () => expect(whenIsNullOrEmpty("", "1")).to.equal("1"));
            it("should false", () => expect(whenIsNullOrEmpty("a", "1")).to.equal("a"));
            it("should false", () => expect(whenIsNullOrEmpty("ab", "1")).to.equal("ab"));
            it("should false", () => expect(whenIsNullOrEmpty([1], [2])).to.eql([1]));
            it("should false", () => expect(whenIsNullOrEmpty([1, 2], [1])).to.eql([1, 2]));
            it("should false", () => expect(whenIsNullOrEmpty(["a"], ["1"])).to.eql(["a"]));
            it("should false", () => expect(whenIsNullOrEmpty(["a", "b"], ["1"])).to.eql(["a", "b"]));
        });
    });

    describe("isOneOf()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(whenIsOneOf2(null, [1, 2, 3], 1)).to.equal(null));
            it("should return false", () => expect(whenIsOneOf2(undefined, [1, 2, 3], 1)).to.equal(undefined));
            it("should return false", () => expect(whenIsOneOf2(1, [0, 2, 3], 1)).to.equal(1));
            it("should return false", () => expect(whenIsOneOf2("aaa", ["a", "aa", "aaaa"], "1")).to.equal("aaa"));
            it("should return false", () => expect(whenIsOneOf2("x", [<string>null, undefined], "a")).to.equal("x"));
            it("should return true", () => expect(whenIsOneOf2(1, [0, 1, 2, 3, 4], 9)).to.equal(9));
            it("should return true", () => expect(whenIsOneOf2(3, [0, 1, 2, 3, 4], 9)).to.equal(9));
            it("should return true", () => expect(whenIsOneOf2(3, [0, 3, 3, 3, 1, 2, 3, 4], 9)).to.equal(9));
            it("should return true", () => expect(whenIsOneOf2("x", [null, undefined, 1, 6, "a", "x", -1, "CCC"], "9")).to.equal("9"));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => whenIsOneOf2(1, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for undefined", () => expect(() => whenIsOneOf2(1, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });
});
