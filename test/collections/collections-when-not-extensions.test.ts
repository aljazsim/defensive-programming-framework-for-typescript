import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { whenContainsNot, whenContainsNotDuplicates, whenContainsNotNull, whenContainsNotOnlyNull, whenIsNotEmpty, whenIsNotEqualTo2, whenIsNotNullOrEmpty, whenIsNotOneOf2 } from "../../source/collections/collection-when-not-extensions";
import { expect } from "chai";

describe("collections cannot extensions", () =>
{
    describe("whenContainsNot()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(whenContainsNot(null, x => x > 3, [1])).to.eql([1]));
            it("should return false", () => expect(whenContainsNot(undefined, x => x > 3, [1])).to.eql([1]));
            it("should return false", () => expect(whenContainsNot([], x => x > 3, [1])).to.eql([1]));
            it("should return true", () => expect(whenContainsNot([null], x => x === null, [1])).to.eql([null]));
            it("should return true", () => expect(whenContainsNot([undefined], x => x === undefined, [1])).to.eql([undefined]));
            it("should return false", () => expect(whenContainsNot(["aaa"], x => x === null, ["1"])).to.eql(["1"]));
            it("should return false", () => expect(whenContainsNot(["aaa", "bb", "c"], x => x === null, ["1"])).to.eql(["1"]));
            it("should return true", () => expect(whenContainsNot([null, "aaa", "bb", "c"], x => x === null, ["1"])).to.eql([null, "aaa", "bb", "c"]));
            it("should return true", () => expect(whenContainsNot(["aaa", null, "bb", "c"], x => x === null, ["1"])).to.eql(["aaa", null, "bb", "c"]));
            it("should return true", () => expect(whenContainsNot(["aaa", "bb", null, "c"], x => x === null, ["1"])).to.eql(["aaa", "bb", null, "c"]));
            it("should return true", () => expect(whenContainsNot(["aaa", "bb", null, "c", null], x => x === null, ["1"])).to.eql(["aaa", "bb", null, "c", null]));
            it("should return true", () => expect(whenContainsNot([null, null, null, null], x => x === null, ["1"])).to.eql([null, null, null, null]));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => whenContainsNot([], null, [1])).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for undefined", () => expect(() => whenContainsNot([], undefined, [1])).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("whenContainsNotDuplicates()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(whenContainsNotDuplicates(null, [1])).to.eql([1]));
            it("should return false", () => expect(whenContainsNotDuplicates(undefined, [1])).to.eql([1]));
            it("should return false", () => expect(whenContainsNotDuplicates([], [1])).to.eql([1]));
            it("should return false", () => expect(whenContainsNotDuplicates([1, 2, 3], [1])).to.eql([1]));
            it("should return false", () => expect(whenContainsNotDuplicates(["a", "aa", "aaa"], ["1"])).to.eql(["1"]));
            it("should return true", () => expect(whenContainsNotDuplicates([1, 4, 5, 2, 4, 8, 0], [1])).to.eql([1, 4, 5, 2, 4, 8, 0]));
            it("should return true", () => expect(whenContainsNotDuplicates(["a", "b", "c", "b", "e"], ["1"])).to.eql(["a", "b", "c", "b", "e"]));
        });
    });

    describe("whenContainsNotNull()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(whenContainsNotNull(null, [1])).to.eql([1]));
            it("should return false", () => expect(whenContainsNotNull(undefined, [1])).to.eql([1]));
            it("should return false", () => expect(whenContainsNotNull([], [1])).to.eql([1]));
            it("should return false", () => expect(whenContainsNotNull([1, 2, 3], [1])).to.eql([1]));
            it("should return false", () => expect(whenContainsNotNull(["a", "aa", "aaa"], ["1"])).to.eql(["1"]));
            it("should return true", () => expect(whenContainsNotNull([null, "aaa", "bb", "c"], ["1"])).to.eql([null, "aaa", "bb", "c"]));
            it("should return true", () => expect(whenContainsNotNull(["aaa", null, "bb", "c"], ["1"])).to.eql(["aaa", null, "bb", "c"]));
            it("should return true", () => expect(whenContainsNotNull(["aaa", "bb", null, "c"], ["1"])).to.eql(["aaa", "bb", null, "c"]));
            it("should return true", () => expect(whenContainsNotNull(["aaa", "bb", null, "c", null], ["1"])).to.eql(["aaa", "bb", null, "c", null]));
            it("should return true", () => expect(whenContainsNotNull([null, null, null, null], ["1"])).to.eql([null, null, null, null]));
        });
    });

    describe("whenContainsNotOnlyNull()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(whenContainsNotOnlyNull(null, [1])).to.eql([1]));
            it("should return false", () => expect(whenContainsNotOnlyNull(undefined, [1])).to.eql([1]));
            it("should return false", () => expect(whenContainsNotOnlyNull([], [1])).to.eql([1]));
            it("should return false", () => expect(whenContainsNotOnlyNull([1, 2, 3], [1])).to.eql([1]));
            it("should return false", () => expect(whenContainsNotOnlyNull([1, 2, null, 3], [1])).to.eql([1]));
            it("should return false", () => expect(whenContainsNotOnlyNull([null, 2, null, null], [1])).to.eql([1]));
            it("should return false", () => expect(whenContainsNotOnlyNull([undefined, 2, undefined, null], [1])).to.eql([1]));
            it("should return false", () => expect(whenContainsNotOnlyNull(["a", "aa", "aaa"], ["1"])).to.eql(["1"]));
            it("should return true", () => expect(whenContainsNotOnlyNull([null], [1])).to.eql([null]));
            it("should return true", () => expect(whenContainsNotOnlyNull([null, null], [1])).to.eql([null, null]));
            it("should return true", () => expect(whenContainsNotOnlyNull([null, null, null], [1])).to.eql([null, null, null]));
            it("should return true", () => expect(whenContainsNotOnlyNull([undefined], [1])).to.eql([undefined]));
            it("should return true", () => expect(whenContainsNotOnlyNull([undefined, undefined], [1])).to.eql([undefined, undefined]));
            it("should return true", () => expect(whenContainsNotOnlyNull([undefined, undefined, undefined], [1])).to.eql([undefined, undefined, undefined]));
            it("should return true", () => expect(whenContainsNotOnlyNull([null, undefined, null, undefined], [1])).to.eql([null, undefined, null, undefined]));
        });
    });

    describe("whenIsNotEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(whenIsNotEmpty(null, [1])).to.eql([1]));
            it("should return false", () => expect(whenIsNotEmpty(undefined, [1])).to.eql([1]));
            it("should return true", () => expect(whenIsNotEmpty("", "1")).to.equal(""));
            it("should return true", () => expect(whenIsNotEmpty([], [1])).to.eql([]));
            it("should return false", () => expect(whenIsNotEmpty("a", "1")).to.equal("1"));
            it("should return false", () => expect(whenIsNotEmpty("ab", "1")).to.equal("1"));
            it("should return false", () => expect(whenIsNotEmpty("abc", "1")).to.equal("1"));
            it("should return false", () => expect(whenIsNotEmpty([1], [2])).to.eql([2]));
            it("should return false", () => expect(whenIsNotEmpty([1, 2], [1])).to.eql([1]));
            it("should return false", () => expect(whenIsNotEmpty([1, null], [1])).to.eql([1]));
            it("should return false", () => expect(whenIsNotEmpty([null, null], [1])).to.eql([1]));
            it("should return false", () => expect(whenIsNotEmpty([undefined], [1])).to.eql([1]));
            it("should return false", () => expect(whenIsNotEmpty([undefined, undefined], [1])).to.eql([1]));
            it("should return false", () => expect(whenIsNotEmpty([null, undefined, null, undefined], [1])).to.eql([1]));
        });
    });

    describe("isEqual2()", () =>
    {
        describe("success", () =>
        {
            it("should return true", () => expect(whenIsNotEqualTo2(null, null, false, [1])).to.eql(null));
            it("should return true", () => expect(whenIsNotEqualTo2(undefined, undefined, false, [1])).to.eql(undefined));
            it("should return false", () => expect(whenIsNotEqualTo2(null, [0], false, [1])).to.eql([1]));
            it("should return false", () => expect(whenIsNotEqualTo2([0], null, false, [1])).to.eql([1]));
            it("should return false", () => expect(whenIsNotEqualTo2(undefined, [0], false, [1])).to.eql([1]));
            it("should return false", () => expect(whenIsNotEqualTo2([0], undefined, false, [1])).to.eql([1]));
            it("should return true", () => expect(whenIsNotEqualTo2([1, 2, 3], [1, 2, 3], false, [1])).to.eql([1, 2, 3]));
            it("should return false", () => expect(whenIsNotEqualTo2([1, 2, 3], [3, 2, 1], false, [1])).to.eql([1]));
            it("should return true", () => expect(whenIsNotEqualTo2([1, 2, 3], [3, 2, 1], true, [1])).to.eql([1, 2, 3]));
            it("should return true", () => expect(whenIsNotEqualTo2(["a", "b", "c"], ["a", "b", "c"], false, ["1"])).to.eql(["a", "b", "c"]));
        });
    });

    describe("whenIsNotNullOrEmpty()", () =>
    {
        describe("success", () =>
        {
            it("should true", () => expect(whenIsNotNullOrEmpty(null, [1])).to.eql(null));
            it("should true", () => expect(whenIsNotNullOrEmpty(undefined, [1])).to.eql(undefined));
            it("should true", () => expect(whenIsNotNullOrEmpty([], [1])).to.eql([]));
            it("should true", () => expect(whenIsNotNullOrEmpty("", "1")).to.equal(""));
            it("should false", () => expect(whenIsNotNullOrEmpty("a", "1")).to.equal("1"));
            it("should false", () => expect(whenIsNotNullOrEmpty("ab", "1")).to.equal("1"));
            it("should false", () => expect(whenIsNotNullOrEmpty([1], [2])).to.eql([2]));
            it("should false", () => expect(whenIsNotNullOrEmpty([1, 2], [1])).to.eql([1]));
            it("should false", () => expect(whenIsNotNullOrEmpty(["a"], ["1"])).to.eql(["1"]));
            it("should false", () => expect(whenIsNotNullOrEmpty(["a", "b"], ["1"])).to.eql(["1"]));
        });
    });

    describe("isOneOf()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(whenIsNotOneOf2(null, [1, 2, 3], 1)).to.equal(1));
            it("should return false", () => expect(whenIsNotOneOf2(undefined, [1, 2, 3], 1)).to.equal(1));
            it("should return false", () => expect(whenIsNotOneOf2(1, [0, 2, 3], 2)).to.equal(2));
            it("should return false", () => expect(whenIsNotOneOf2("aaa", ["a", "aa", "aaaa"], "1")).to.equal("1"));
            it("should return false", () => expect(whenIsNotOneOf2("x", [<string>null, undefined], "a")).to.equal("a"));
            it("should return true", () => expect(whenIsNotOneOf2(1, [0, 1, 2, 3, 4], 9)).to.equal(1));
            it("should return true", () => expect(whenIsNotOneOf2(3, [0, 1, 2, 3, 4], 9)).to.equal(3));
            it("should return true", () => expect(whenIsNotOneOf2(3, [0, 3, 3, 3, 1, 2, 3, 4], 9)).to.equal(3));
            it("should return true", () => expect(whenIsNotOneOf2("x", [null, undefined, 1, 6, "a", "x", -1, "CCC"], "9")).to.equal("x"));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => whenIsNotOneOf2(1, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for undefined", () => expect(() => whenIsNotOneOf2(1, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });
});
