import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { isBetween, isGreaterThan, isGreaterThanOrEqualTo, isInteger, isLessThan, isLessThanOrEqualTo } from "../../source/numbers/number-is-extensions";
import { expect } from "chai";

describe("object can extensions", () =>
{

    describe("isBetween()", () =>
    {
        describe("success", () =>
        {
            it("should return null", () => expect(isBetween(null, 1, 1, true)).to.equal(false));
            it("should return undefined", () => expect(isBetween(undefined, 1, 1, true)).to.equal(false));
            it("should return null", () => expect(isBetween(1, 1, 1, false)).to.equal(false));
            it("should return null", () => expect(isBetween(1, 1, 1, false)).to.equal(false));

            it("should be between", () => expect(isBetween(0, 1, 1, true)).to.equal(false));
            it("should be between", () => expect(isBetween(2, 1, 1, true)).to.equal(false));
            it("should be between", () => expect(isBetween(1, 1, 1, false)).to.equal(false));
            it("should be between", () => expect(isBetween(0, 1, 3, true)).to.equal(false));
            it("should be between", () => expect(isBetween(1, 1, 3, false)).to.equal(false));
            it("should be between", () => expect(isBetween(3, 1, 3, false)).to.equal(false));
            it("should be between", () => expect(isBetween(4, 1, 3, true)).to.equal(false));
            it("should be between", () => expect(isBetween(4, 1, 3, false)).to.equal(false));
            it("should be between", () => expect(isBetween(4, 1, 3, false)).to.equal(false));
            it("should be between", () => expect(isBetween("", "a", "a", true)).to.equal(false));
            it("should be between", () => expect(isBetween("b", "a", "a", true)).to.equal(false));
            it("should be between", () => expect(isBetween("a", "a", "a", false)).to.equal(false));
            it("should be between", () => expect(isBetween("a", "b", "c", true)).to.equal(false));
            it("should be between", () => expect(isBetween("a", "a", "c", false)).to.equal(false));
            it("should be between", () => expect(isBetween("c", "a", "c", false)).to.equal(false));
            it("should be between", () => expect(isBetween("d", "a", "c", true)).to.equal(false));
            it("should be between", () => expect(isBetween("d", "a", "c", false)).to.equal(false));

            it("should not be between", () => expect(isBetween(1, 1, 1, true)).to.equal(true));
            it("should not be between", () => expect(isBetween(1, 1, 3, true)).to.equal(true));
            it("should not be between", () => expect(isBetween(2, 1, 3, true)).to.equal(true));
            it("should not be between", () => expect(isBetween(3, 1, 3, true)).to.equal(true));
            it("should not be between", () => expect(isBetween(2, 1, 3, false)).to.equal(true));
            it("should not be between", () => expect(isBetween("a", "a", "a", true)).to.equal(true));
            it("should not be between", () => expect(isBetween("a", "a", "c", true)).to.equal(true));
            it("should not be between", () => expect(isBetween("b", "a", "c", true)).to.equal(true));
            it("should not be between", () => expect(isBetween("c", "a", "c", true)).to.equal(true));
            it("should not be between", () => expect(isBetween("b", "a", "c", false)).to.equal(true));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => isBetween(<number>0, null, 1, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => isBetween(<number>0, undefined, 1, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => isBetween(<number>0, 1, null, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => isBetween(<number>0, 1, undefined, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => isBetween(<number>0, null, null, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => isBetween(<number>0, undefined, undefined, true)).to.throw(ArgumentError, "Value cannot be null."));

        });
    });

    describe("isGreaterThan()", () =>
    {
        describe("success", () =>
        {
            it("should be greater than", () => expect(isGreaterThan(null, 1)).to.equal(false));
            it("should be greater than", () => expect(isGreaterThan(undefined, 1)).to.equal(false));
            it("should be greater than", () => expect(isGreaterThan(0, 1)).to.equal(false));
            it("should be greater than", () => expect(isGreaterThan(0, 1)).to.equal(false));
            it("should be greater than", () => expect(isGreaterThan("a", "a")).to.equal(false));
            it("should be greater than", () => expect(isGreaterThan("a", "b")).to.equal(false));
            it("should be greater than", () => expect(isGreaterThan(1, 1)).to.equal(false));
            it("should be greater than", () => expect(isGreaterThan(1, 2)).to.equal(false));

            it("should fail when greater than", () => expect(isGreaterThan("b", "a")).to.equal(true));
            it("should fail when greater than", () => expect(isGreaterThan("a", "A")).to.equal(true));
            it("should fail when greater than", () => expect(isGreaterThan(1, 0)).to.equal(true));
            it("should fail when greater than", () => expect(isGreaterThan(1, -1)).to.equal(true));
        });

        describe("failure", () =>
        {
            it("should fail when greater than", () => expect(() => isGreaterThan(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => isGreaterThan(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => isGreaterThan(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => isGreaterThan(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => isGreaterThan(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => isGreaterThan(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("isGreaterThanOrEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should not be greater than or equal to", () => expect(isGreaterThanOrEqualTo(null, 1)).to.equal(false));
            it("should not be greater than or equal to", () => expect(isGreaterThanOrEqualTo(undefined, 1)).to.equal(false));
            it("should not be greater than or equal to", () => expect(isGreaterThanOrEqualTo(0, 1)).to.equal(false));
            it("should not be greater than or equal to", () => expect(isGreaterThanOrEqualTo(0, 1)).to.equal(false));
            it("should not be greater than or equal to", () => expect(isGreaterThanOrEqualTo("a", "b")).to.equal(false));
            it("should not be greater than or equal to", () => expect(isGreaterThanOrEqualTo("a", "c")).to.equal(false));
            it("should not be greater than or equal to", () => expect(isGreaterThanOrEqualTo(1, 2)).to.equal(false));
            it("should not be greater than or equal to", () => expect(isGreaterThanOrEqualTo(1, 3)).to.equal(false));

            it("should be greater than or equal to", () => expect(isGreaterThanOrEqualTo("a", "a")).to.equal(true));
            it("should be greater than or equal to", () => expect(isGreaterThanOrEqualTo("b", "a")).to.equal(true));
            it("should be greater than or equal to", () => expect(isGreaterThanOrEqualTo("b", "b")).to.equal(true));
            it("should be greater than or equal to", () => expect(isGreaterThanOrEqualTo("a", "A")).to.equal(true));
            it("should be greater than or equal to", () => expect(isGreaterThanOrEqualTo("A", "A")).to.equal(true));
            it("should be greater than or equal to", () => expect(isGreaterThanOrEqualTo(0, 0)).to.equal(true));
            it("should be greater than or equal to", () => expect(isGreaterThanOrEqualTo(1, 0)).to.equal(true));
            it("should be greater than or equal to", () => expect(isGreaterThanOrEqualTo(1, 1)).to.equal(true));
            it("should be greater than or equal to", () => expect(isGreaterThanOrEqualTo(1, -1)).to.equal(true));
            it("should be greater than or equal to", () => expect(isGreaterThanOrEqualTo(-1, -1)).to.equal(true));
        });

        describe("failure", () =>
        {
            it("should fail when greater than or equal to", () => expect(() => isGreaterThanOrEqualTo(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => isGreaterThanOrEqualTo(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => isGreaterThanOrEqualTo(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => isGreaterThanOrEqualTo(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => isGreaterThanOrEqualTo(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => isGreaterThanOrEqualTo(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("isLessThan()", () =>
    {
        describe("success", () =>
        {
            it("should be less than", () => expect(isLessThan(null, 1)).to.equal(false));
            it("should be less than", () => expect(isLessThan(undefined, 1)).to.equal(false));
            it("should be less than", () => expect(isLessThan(2, 1)).to.equal(false));
            it("should be less than", () => expect(isLessThan(2, 1)).to.equal(false));
            it("should be less than", () => expect(isLessThan("a", "a")).to.equal(false));
            it("should be less than", () => expect(isLessThan("b", "a")).to.equal(false));
            it("should be less than", () => expect(isLessThan(1, 1)).to.equal(false));
            it("should be less than", () => expect(isLessThan(2, 1)).to.equal(false));
            it("should be less than", () => expect(isLessThan("a", "b")).to.equal(true));
            it("should be less than", () => expect(isLessThan("A", "a")).to.equal(true));
            it("should be less than", () => expect(isLessThan(0, 1)).to.equal(true));
            it("should be less than", () => expect(isLessThan(-1, 1)).to.equal(true));
        });

        describe("failure", () =>
        {
            it("should fail when less than", () => expect(() => isLessThan(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => isLessThan(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => isLessThan(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => isLessThan(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => isLessThan(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => isLessThan(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));

        });
    });

    describe("isGreaterThanOrEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo(null, 1)).to.equal(false));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo(undefined, 1)).to.equal(false));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo("b", "a")).to.equal(false));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo("c", "a")).to.equal(false));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo(2, 1)).to.equal(false));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo(3, 1)).to.equal(false));

            it("should be less than or equal to", () => expect(isLessThanOrEqualTo("a", "a")).to.equal(true));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo("a", "b")).to.equal(true));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo("b", "b")).to.equal(true));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo("A", "a")).to.equal(true));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo("A", "A")).to.equal(true));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo(0, 0)).to.equal(true));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo(0, 1)).to.equal(true));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo(1, 1)).to.equal(true));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo(-1, 1)).to.equal(true));
            it("should be less than or equal to", () => expect(isLessThanOrEqualTo(-1, -1)).to.equal(true));
        });

        describe("failure", () =>
        {
            it("should fail when null", () => expect(() => isLessThanOrEqualTo(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => isLessThanOrEqualTo(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => isLessThanOrEqualTo(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => isLessThanOrEqualTo(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => isLessThanOrEqualTo(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => isLessThanOrEqualTo(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("isInteger()", () =>
    {
        describe("success", () =>
        {
            it("should not be integer", () => expect(isInteger(null)).to.equal(false));
            it("should not be integer", () => expect(isInteger(undefined)).to.equal(false));

            it("should not be integer", () => expect(isInteger(3.1)).to.equal(false));
            it("should not be integer", () => expect(isInteger(3.14)).to.equal(false));
            it("should not be integer", () => expect(isInteger(3.14159265359)).to.equal(false));

            it("should be integer", () => expect(isInteger(-100)).to.equal(true));
            it("should be integer", () => expect(isInteger(-1)).to.equal(true));
            it("should be integer", () => expect(isInteger(0)).to.equal(true));
            it("should be integer", () => expect(isInteger(2)).to.equal(true));
            it("should be integer", () => expect(isInteger(200)).to.equal(true));
        });
    });
});
