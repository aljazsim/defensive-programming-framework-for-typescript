import { ArgumentError } from "../../source/argument-error";
import { cannotBeEmpty, cannotBeEqualTo2, cannotBeNullOrEmpty, cannotBeOneOf2, cannotContain, cannotContainDuplicates } from "../../source/collections/collection-cannot-extensions";
import { expect } from "chai";
import "mocha";

describe("collections cannot extensions", () =>
{
	describe("cannotBeEmpty()", () =>
	{
		describe("success", () =>
		{
			it("should return \"a\"", () => expect(cannotBeEmpty("a")).to.equal("a"));
			it("should return \"ab\"", () => expect(cannotBeEmpty("ab")).to.equal("ab"));
			it("should return \"abc\"", () => expect(cannotBeEmpty("abc")).to.equal("abc"));
			it("should return [1]", () => expect(cannotBeEmpty([1])).to.eql([1]));
			it("should return [1, 2]", () => expect(cannotBeEmpty([1, 2])).to.eql([1, 2]));
			it("should return null\"", () => expect(cannotBeEmpty(null)).to.equal(null));
		});

		describe("failure", () =>
		{
			it("should fail for empty string", () => expect(() => cannotBeEmpty("")).to.throw(ArgumentError, "Value cannot be empty."));
			it("should fail for empty array", () => expect(() => cannotBeEmpty([])).to.throw(ArgumentError, "Value cannot be empty."));
		});

	});

	describe("cannotBeEqual2()", () =>
	{
		describe("success", () =>
		{
			it("should return [1, 2, 3]", () => expect(cannotBeEqualTo2([1, 2, 3], [0, 1, 2, 3])).to.eql([1, 2, 3]));
			it("should return [1, 2, 3]", () => expect(cannotBeEqualTo2([1, 2, 3], [3, 4, 5])).to.eql([1, 2, 3]));
			it("should return [1, 2, 3]", () => expect(cannotBeEqualTo2([1, 2, 3], [3, 2, 1])).to.eql([1, 2, 3]));
			it("should return [\"a\", \"b\", \"c\"]", () => expect(cannotBeEqualTo2(["a", "b", "c"], ["a", "c", "d"])).to.eql(["a", "b", "c"]));
		});

		describe("failure", () =>
		{
			it("should fail for identical array", () => expect(() => cannotBeEqualTo2([1, 2, 3], [1, 2, 3])).to.throw(ArgumentError, "Value cannot be equal to [1, 2, 3]."));
			it("should fail for identical array", () => expect(() => cannotBeEqualTo2([1, 2, 3], [3, 1, 2], true)).to.throw(ArgumentError, "Value cannot be equal to [3, 1, 2]."));
		});
	});

	describe("cannotBeNullOrEmpty()", () =>
	{
		describe("success", () =>
		{
			it("should return \"a\"", () => expect(cannotBeNullOrEmpty("a")).to.eql("a"));
			it("should return \"ab\"", () => expect(cannotBeNullOrEmpty("ab")).to.eql("ab"));
			it("should return [1]", () => expect(cannotBeNullOrEmpty([1])).to.eql([1]));
			it("should return [1, 2]", () => expect(cannotBeNullOrEmpty([1, 2])).to.eql([1, 2]));
			it("should return [\"a\"]", () => expect(cannotBeNullOrEmpty(["a"])).to.eql(["a"]));
			it("should return [\"a\", \"b\"]", () => expect(cannotBeNullOrEmpty(["a", "b"])).to.eql(["a", "b"]));
		});

		describe("failure", () =>
		{
			it("should fail for null", () => expect(() => cannotBeNullOrEmpty([])).to.throw(ArgumentError, "Value cannot be null or empty."));
			it("should fail for empty string", () => expect(() => cannotBeNullOrEmpty("")).to.throw(ArgumentError, "Value cannot be null or empty."));
			it("should fail for empty array", () => expect(() => cannotBeNullOrEmpty([])).to.throw(ArgumentError, "Value cannot be null or empty."));
		});
	});

	describe("cannotBeOneOf()", () =>
	{
		describe("success", () =>
		{
			it("should return 1", () => expect(cannotBeOneOf2(1, [0, 2, 3])).to.eql(1));
			it("should return \"a\"", () => expect(cannotBeOneOf2("aaa", ["a", "aa", "aaaa"])).to.eql("aaa"));
		});

		describe("failure", () =>
		{
			it("should fail for included value", () => expect(() => cannotBeOneOf2(1, [0, 1, 2, 3, 4])).to.throw(ArgumentError, "Value cannot be one of [0, 1, 2, 3, 4]."));
			it("should fail for null", () => expect(() => cannotBeOneOf2(1, null)).to.throw(ArgumentError, "Value cannot be null."));
		});
	});

	describe("cannotContain()", () =>
	{
		describe("success", () =>
		{
			it("should return []", () => expect(cannotContain([], x => x > 3)).to.eql([]));
			it("should return null", () => expect(cannotContain(null, x => x > 3)).to.eql(null));
			it("should return [1, 2, 3]", () => expect(cannotContain([1, 2, 3], x => x > 3)).to.eql([1, 2, 3]));
			it("should return [\"a\", \"aa\", \"aaa\"]", () => expect(cannotContain(["a", "aa", "aaa"], x => x.indexOf("b") > 0)).to.eql(["a", "aa", "aaa"]));
		});

		describe("failure", () =>
		{
			it("should fail for null", () => expect(() => cannotContain([], null)).to.throw(ArgumentError, "Value cannot be null."));
		});
	});

	describe("cannotContainDuplicates()", () =>
	{
		describe("success", () =>
		{
			it("should return null", () => expect(cannotContainDuplicates(null)).to.eql(null));
			it("should return []", () => expect(cannotContainDuplicates([])).to.eql([]));
			it("should return [1, 2, 3]", () => expect(cannotContainDuplicates([1, 2, 3])).to.eql([1, 2, 3]));
			it("should return [\"a\", \"aa\", \"aaa\"]", () => expect(cannotContainDuplicates(["a", "aa", "aaa"])).to.eql(["a", "aa", "aaa"]));
		});

		describe("failure", () =>
		{
			it("should fail for duplicates", () => expect(() => cannotContainDuplicates([1, 4, 5, 2, 4, 8, 0])).to.throw(ArgumentError, "Value cannot contain duplicates."));
			it("should fail for duplicates", () => expect(() => cannotContainDuplicates(["a", "b", "c", "b", "e"])).to.throw(ArgumentError, "Value cannot contain duplicates."));
		});
	});
});
