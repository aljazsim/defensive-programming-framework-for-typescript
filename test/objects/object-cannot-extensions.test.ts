import { ArgumentError } from "../../source/argument-error";
import { cannotBeNull } from "../../source/objects/object-cannot-extensions";
import { expect } from "chai";
import "mocha";

describe("object cannot extensions", () =>
{
	describe("cannotBeNull()", () =>
	{
		describe("success", () =>
		{
			it("should return 0", () => expect(cannotBeNull(0)).to.equal(0));
			it("should return 1", () => expect(cannotBeNull(1)).to.equal(1));
			it("should return 'aaa'", () => expect(cannotBeNull("aaa")).to.equal("aaa"));
		});

		describe("failure", () =>
		{
			it("should fail for null", () => expect(() => cannotBeNull(null)).to.throw(ArgumentError, "Value cannot be null."));
		});

	});
});
