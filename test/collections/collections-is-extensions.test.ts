import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { contains, containsDuplicates, containsNull, containsOnlyNull, isEmpty } from "../../source/collections/collection-is-extensions";
import { expect } from "chai";

describe("collections cannot extensions", () =>
{
    describe("contains()", () =>
    {
        describe("success", () =>
        {
            it("should return false", () => expect(contains(null, x => x > 3)).to.equal(false));
            it("should return false", () => expect(contains(undefined, x => x > 3)).to.equal(false));
            it("should return false", () => expect(contains([], x => x > 3)).to.equal(false));
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
            it("should return false", () => expect(isEmpty(null)).to.equal(false));
            it("should return false", () => expect(isEmpty(undefined)).to.equal(false));
            it("should return true", () => expect(isEmpty("")).to.equal(true));
            it("should return true", () => expect(isEmpty([])).to.equal(true));
            it("should return false", () => expect(isEmpty("a")).to.equal(false));
            it("should return false", () => expect(isEmpty("ab")).to.equal(false));
            it("should return false", () => expect(isEmpty("abc")).to.equal(false));
            it("should return false", () => expect(isEmpty([1])).to.equal(false));
            it("should return false", () => expect(isEmpty([1, 2])).to.equal(false));
            it("should return false", () => expect(isEmpty([1, null])).to.equal(false));
            it("should return false", () => expect(isEmpty([null, null])).to.equal(false));
            it("should return false", () => expect(isEmpty([undefined])).to.equal(false));
            it("should return false", () => expect(isEmpty([undefined, undefined])).to.equal(false));
            it("should return false", () => expect(isEmpty([null, undefined, null, undefined])).to.equal(false));
        });
    });

    // // describe("isEqual2()", () =>
    // // {
    // //     describe("success", () =>
    // //     {
    // //         it("should return null", () => expect(isEqualTo2(null, [0, 1, 2, 3])).to.equal(null));
    // //         it("should return null", () => expect(isEqualTo2([0], null)).to.equal([0]));
    // //         it("should return undefined", () => expect(isEqualTo2(undefined, [0, 1, 2, 3])).to.equal(undefined));
    // //         it("should return undefined", () => expect(isEqualTo2([0], undefined)).to.equal([0]));
    // //         it("should return [1, 2, 3]", () => expect(isEqualTo2([1, 2, 3], [0, 1, 2, 3])).to.equal([1, 2, 3]));
    // //         it("should return [1, 2, 3]", () => expect(isEqualTo2([1, 2, 3], [3, 4, 5])).to.equal([1, 2, 3]));
    // //         it("should return [1, 2, 3]", () => expect(isEqualTo2([1, 2, 3], [3, 2, 1])).to.equal([1, 2, 3]));
    // //         it("should return [\"a\", \"b\", \"c\"]", () => expect(isEqualTo2(["a", "b", "c"], ["a", "c", "d"])).to.equal(["a", "b", "c"]));
    // //     });

    // //     describe("failure", () =>
    // //     {
    // //         it("should fail for null", () => expect(() => isEqualTo2(null, null)).to.throw(ArgumentError, "Value cannot be equal to null."));
    // //         it("should fail for null", () => expect(() => isEqualTo2(undefined, undefined)).to.throw(ArgumentError, "Value cannot be equal to undefined."));
    // //         it("should fail for identical array", () => expect(() => isEqualTo2([1, 2, 3], [1, 2, 3])).to.throw(ArgumentError, "Value cannot be equal to [1, 2, 3]."));
    // //         it("should fail for identical array", () => expect(() => isEqualTo2([1, 2, 3], [3, 1, 2], true)).to.throw(ArgumentError, "Value cannot be equal to [3, 1, 2]."));
    // //     });
    // // });

    // // describe("isNullOrEmpty()", () =>
    // // {
    // //     describe("success", () =>
    // //     {
    // //         it("should return \"a\"", () => expect(isNullOrEmpty("a")).to.equal("a"));
    // //         it("should return \"ab\"", () => expect(isNullOrEmpty("ab")).to.equal("ab"));
    // //         it("should return [1]", () => expect(isNullOrEmpty([1])).to.equal([1]));
    // //         it("should return [1, 2]", () => expect(isNullOrEmpty([1, 2])).to.equal([1, 2]));
    // //         it("should return [\"a\"]", () => expect(isNullOrEmpty(["a"])).to.equal(["a"]));
    // //         it("should return [\"a\", \"b\"]", () => expect(isNullOrEmpty(["a", "b"])).to.equal(["a", "b"]));
    // //     });

    // //     describe("failure", () =>
    // //     {
    // //         it("should fail for null", () => expect(() => isNullOrEmpty(null)).to.throw(ArgumentError, "Value cannot be null or empty."));
    // //         it("should fail for undefined", () => expect(() => isNullOrEmpty(undefined)).to.throw(ArgumentError, "Value cannot be null or empty."));
    // //         it("should fail for empty string", () => expect(() => isNullOrEmpty("")).to.throw(ArgumentError, "Value cannot be null or empty."));
    // //         it("should fail for empty array", () => expect(() => isNullOrEmpty([])).to.throw(ArgumentError, "Value cannot be null or empty."));
    // //     });
    // // });

    // // describe("isOneOf()", () =>
    // // {
    // //     describe("success", () =>
    // //     {
    // //         it("should return null", () => expect(isOneOf2(null, [1, 2, 3])).to.equal(null));
    // //         it("should return undefined", () => expect(isOneOf2(undefined, [1, 2, 3])).to.equal(undefined));
    // //         it("should return 1", () => expect(isOneOf2(1, [0, 2, 3])).to.equal(1));
    // //         it("should return \"a\"", () => expect(isOneOf2("aaa", ["a", "aa", "aaaa"])).to.equal("aaa"));
    // //     });

    // //     describe("failure", () =>
    // //     {
    // //         it("should fail for null", () => expect(() => isOneOf2(1, null)).to.throw(ArgumentError, "Value cannot be null."));
    // //         it("should fail for undefined", () => expect(() => isOneOf2(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
    // //         it("should fail for included value", () => expect(() => isOneOf2(1, [0, 1, 2, 3, 4])).to.throw(ArgumentError, "Value cannot be one of [0, 1, 2, 3, 4]."));
    // //     });
    // // });
});
