import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { cannotBeBetween, cannotBeFloat, cannotBeGreaterThan, cannotBeGreaterThanOrEqualTo, cannotBeInteger, cannotBeLessThan, cannotBeLessThanOrEqualTo } from "../../source/numbers/number-cannot-extensions";
import { expect } from "chai";

describe("object cannot extensions", () =>
{
    describe("cannotBeBetween()", () =>
    {
        describe("success", () =>
        {
            it("should return null", () => expect(cannotBeBetween(null, 1, 1, true)).to.equal(null));
            it("should return undefined", () => expect(cannotBeBetween(undefined, 1, 1, true)).to.equal(undefined));

            it("should not be between", () => expect(cannotBeBetween(0, 1, 1, true)).to.equal(0));
            it("should not be between", () => expect(cannotBeBetween(2, 1, 1, true)).to.equal(2));
            it("should not be between", () => expect(cannotBeBetween(1, 1, 1, false)).to.equal(1));
            it("should not be between", () => expect(cannotBeBetween(0, 1, 3, true)).to.equal(0));
            it("should not be between", () => expect(cannotBeBetween(1, 1, 3, false)).to.equal(1));
            it("should not be between", () => expect(cannotBeBetween(3, 1, 3, false)).to.equal(3));
            it("should not be between", () => expect(cannotBeBetween(4, 1, 3, true)).to.equal(4));
            it("should not be between", () => expect(cannotBeBetween(4, 1, 3, false)).to.equal(4));
            it("should not be between", () => expect(cannotBeBetween(4, 1, 3, false)).to.equal(4));
            it("should not be between", () => expect(cannotBeBetween("", "a", "a", true)).to.equal(""));
            it("should not be between", () => expect(cannotBeBetween("b", "a", "a", true)).to.equal("b"));
            it("should not be between", () => expect(cannotBeBetween("a", "a", "a", false)).to.equal("a"));
            it("should not be between", () => expect(cannotBeBetween("a", "b", "c", true)).to.equal("a"));
            it("should not be between", () => expect(cannotBeBetween("a", "a", "c", false)).to.equal("a"));
            it("should not be between", () => expect(cannotBeBetween("c", "a", "c", false)).to.equal("c"));
            it("should not be between", () => expect(cannotBeBetween("d", "a", "c", true)).to.equal("d"));
            it("should not be between", () => expect(cannotBeBetween("d", "a", "c", false)).to.equal("d"));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => cannotBeBetween(<number>0, null, 1, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => cannotBeBetween(<number>0, undefined, 1, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => cannotBeBetween(<number>0, 1, null, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => cannotBeBetween(<number>0, 1, undefined, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => cannotBeBetween(<number>0, null, null, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => cannotBeBetween(<number>0, undefined, undefined, true)).to.throw(ArgumentError, "Value cannot be null."));

            it("should fail when between", () => expect(() => cannotBeBetween(1, 1, 1, true)).to.throw(ArgumentError, "Value cannot be between 1 and 1 inclusive."));
            it("should fail when between", () => expect(() => cannotBeBetween(1, 1, 3, true)).to.throw(ArgumentError, "Value cannot be between 1 and 3 inclusive."));
            it("should fail when between", () => expect(() => cannotBeBetween(2, 1, 3, true)).to.throw(ArgumentError, "Value cannot be between 1 and 3 inclusive."));
            it("should fail when between", () => expect(() => cannotBeBetween(3, 1, 3, true)).to.throw(ArgumentError, "Value cannot be between 1 and 3 inclusive."));
            it("should fail when between", () => expect(() => cannotBeBetween(2, 1, 3, false)).to.throw(ArgumentError, "Value cannot be between 1 and 3."));
            it("should fail when between", () => expect(() => cannotBeBetween("a", "a", "a", true)).to.throw(ArgumentError, "Value cannot be between a and a inclusive."));
            it("should fail when between", () => expect(() => cannotBeBetween("a", "a", "c", true)).to.throw(ArgumentError, "Value cannot be between a and c inclusive."));
            it("should fail when between", () => expect(() => cannotBeBetween("b", "a", "c", true)).to.throw(ArgumentError, "Value cannot be between a and c inclusive."));
            it("should fail when between", () => expect(() => cannotBeBetween("c", "a", "c", true)).to.throw(ArgumentError, "Value cannot be between a and c inclusive."));
            it("should fail when between", () => expect(() => cannotBeBetween("b", "a", "c", false)).to.throw(ArgumentError, "Value cannot be between a and c."));
        });
    });

    describe("cannotBeGreaterThan()", () =>
    {
        describe("success", () =>
        {
            it("should not be greater than", () => expect(cannotBeGreaterThan(null, 1)).to.equal(null));
            it("should not be greater than", () => expect(cannotBeGreaterThan(undefined, 1)).to.equal(undefined));
            it("should not be greater than", () => expect(cannotBeGreaterThan("a", "a")).to.equal("a"));
            it("should not be greater than", () => expect(cannotBeGreaterThan("a", "b")).to.equal("a"));
            it("should not be greater than", () => expect(cannotBeGreaterThan(1, 1)).to.equal(1));
            it("should not be greater than", () => expect(cannotBeGreaterThan(1, 2)).to.equal(1));
        });

        describe("failure", () =>
        {
            it("should fail when greater than", () => expect(() => cannotBeGreaterThan(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => cannotBeGreaterThan(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => cannotBeGreaterThan(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => cannotBeGreaterThan(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => cannotBeGreaterThan(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => cannotBeGreaterThan(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => cannotBeGreaterThan("b", "a")).to.throw(ArgumentError, "Value cannot be greater than a."));
            it("should fail when greater than", () => expect(() => cannotBeGreaterThan("a", "A")).to.throw(ArgumentError, "Value cannot be greater than A."));
            it("should fail when greater than", () => expect(() => cannotBeGreaterThan(1, 0)).to.throw(ArgumentError, "Value cannot be greater than 0."));
            it("should fail when greater than", () => expect(() => cannotBeGreaterThan(1, -1)).to.throw(ArgumentError, "Value cannot be greater than -1."));
        });
    });

    describe("cannotBeGreaterThanOrEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should not be greater than or equal to", () => expect(cannotBeGreaterThanOrEqualTo(null, 1)).to.equal(null));
            it("should not be greater than or equal to", () => expect(cannotBeGreaterThanOrEqualTo(undefined, 1)).to.equal(undefined));
            it("should not be greater than or equal to", () => expect(cannotBeGreaterThanOrEqualTo("a", "b")).to.equal("a"));
            it("should not be greater than or equal to", () => expect(cannotBeGreaterThanOrEqualTo("a", "c")).to.equal("a"));
            it("should not be greater than or equal to", () => expect(cannotBeGreaterThanOrEqualTo(1, 2)).to.equal(1));
            it("should not be greater than or equal to", () => expect(cannotBeGreaterThanOrEqualTo(1, 3)).to.equal(1));
        });

        describe("failure", () =>
        {
            it("should fail when greater than or equal to", () => expect(() => cannotBeGreaterThanOrEqualTo(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => cannotBeGreaterThanOrEqualTo(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => cannotBeGreaterThanOrEqualTo(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => cannotBeGreaterThanOrEqualTo(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => cannotBeGreaterThanOrEqualTo(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => cannotBeGreaterThanOrEqualTo(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => cannotBeGreaterThanOrEqualTo("b", "a")).to.throw(ArgumentError, "Value cannot be greater than or equal to a."));
            it("should fail when greater than or equal to", () => expect(() => cannotBeGreaterThanOrEqualTo("a", "A")).to.throw(ArgumentError, "Value cannot be greater than or equal to A."));
            it("should fail when greater than or equal to", () => expect(() => cannotBeGreaterThanOrEqualTo(1, 0)).to.throw(ArgumentError, "Value cannot be greater than or equal to 0."));
            it("should fail when greater than or equal to", () => expect(() => cannotBeGreaterThanOrEqualTo(1, -1)).to.throw(ArgumentError, "Value cannot be greater than or equal to -1."));
        });
    });

    describe("cannotBeLessThan()", () =>
    {
        describe("success", () =>
        {
            it("should not be less than", () => expect(cannotBeLessThan(null, 1)).to.equal(null));
            it("should not be less than", () => expect(cannotBeLessThan(undefined, 1)).to.equal(undefined));
            it("should not be less than", () => expect(cannotBeLessThan("a", "a")).to.equal("a"));
            it("should not be less than", () => expect(cannotBeLessThan("b", "a")).to.equal("b"));
            it("should not be less than", () => expect(cannotBeLessThan(1, 1)).to.equal(1));
            it("should not be less than", () => expect(cannotBeLessThan(2, 1)).to.equal(2));
        });

        describe("failure", () =>
        {
            it("should fail when less than", () => expect(() => cannotBeLessThan(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => cannotBeLessThan(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => cannotBeLessThan(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => cannotBeLessThan(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => cannotBeLessThan(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => cannotBeLessThan(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => cannotBeLessThan("a", "b")).to.throw(ArgumentError, "Value cannot be less than b."));
            it("should fail when less than", () => expect(() => cannotBeLessThan("A", "a")).to.throw(ArgumentError, "Value cannot be less than a."));
            it("should fail when less than", () => expect(() => cannotBeLessThan(0, 1)).to.throw(ArgumentError, "Value cannot be less than 1."));
            it("should fail when less than", () => expect(() => cannotBeLessThan(-1, 1)).to.throw(ArgumentError, "Value cannot be less than 1."));
        });
    });

    describe("cannotBeGreaterThanOrEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should not be less than or equal to", () => expect(cannotBeLessThanOrEqualTo(null, 1)).to.equal(null));
            it("should not be less than or equal to", () => expect(cannotBeLessThanOrEqualTo(undefined, 1)).to.equal(undefined));
            it("should not be less than or equal to", () => expect(cannotBeLessThanOrEqualTo("b", "a")).to.equal("b"));
            it("should not be less than or equal to", () => expect(cannotBeLessThanOrEqualTo("c", "a")).to.equal("c"));
            it("should not be less than or equal to", () => expect(cannotBeLessThanOrEqualTo(2, 1)).to.equal(2));
            it("should not be less than or equal to", () => expect(cannotBeLessThanOrEqualTo(3, 1)).to.equal(3));
        });

        describe("failure", () =>
        {
            it("should fail when null", () => expect(() => cannotBeLessThanOrEqualTo(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => cannotBeLessThanOrEqualTo(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => cannotBeLessThanOrEqualTo(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => cannotBeLessThanOrEqualTo(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => cannotBeLessThanOrEqualTo(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => cannotBeLessThanOrEqualTo(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => cannotBeLessThanOrEqualTo("a", "b")).to.throw(ArgumentError, "Value cannot be less than or equal to b."));
            it("should fail when null", () => expect(() => cannotBeLessThanOrEqualTo("A", "a")).to.throw(ArgumentError, "Value cannot be less than or equal to a."));
            it("should fail when less than or equal to", () => expect(() => cannotBeLessThanOrEqualTo(0, 1)).to.throw(ArgumentError, "Value cannot be less than or equal to 1."));
            it("should fail when less than or equal to", () => expect(() => cannotBeLessThanOrEqualTo(-1, 1)).to.throw(ArgumentError, "Value cannot be less than or equal to 1."));
        });
    });

    describe("cannotBeInteger()", () =>
    {
        describe("success", () =>
        {
            it("should not be integer", () => expect(cannotBeInteger(null)).to.equal(null));
            it("should not be integer", () => expect(cannotBeInteger(undefined)).to.equal(undefined));

            it("should not be integer", () => expect(cannotBeInteger(3.1)).to.equal(3.1));
            it("should not be integer", () => expect(cannotBeInteger(3.14)).to.equal(3.14));
            it("should not be integer", () => expect(cannotBeInteger(3.14159265359)).to.equal(3.14159265359));
        });

        describe("failure", () =>
        {
            it("should fail for being an integer", () => expect(() => cannotBeInteger(-100)).to.throw(ArgumentError, "Value cannot be an integer number."));
            it("should fail for being an integer", () => expect(() => cannotBeInteger(-1)).to.throw(ArgumentError, "Value cannot be an integer number."));
            it("should fail for being an integer", () => expect(() => cannotBeInteger(0)).to.throw(ArgumentError, "Value cannot be an integer number."));
            it("should fail for being an integer", () => expect(() => cannotBeInteger(2)).to.throw(ArgumentError, "Value cannot be an integer number."));
            it("should fail for being an integer", () => expect(() => cannotBeInteger(200)).to.throw(ArgumentError, "Value cannot be an integer number."));
        });
    });

    describe("cannotBeFloat()", () =>
    {
        describe("success", () =>
        {
            it("should not be float", () => expect(cannotBeFloat(null, 5)).to.equal(null));
            it("should not be float", () => expect(cannotBeFloat(undefined, 5)).to.equal(undefined));

            it("should not be float", () => expect(cannotBeFloat(0.1, 0)).to.equal(0.1));
            it("should not be float", () => expect(cannotBeFloat(0.12, 1)).to.equal(0.12));
            it("should not be float", () => expect(cannotBeFloat(0.123, 2)).to.equal(0.123));
        });

        describe("failure", () =>
        {
            it("should fail for being an float", () => expect(() => cannotBeFloat(3.14, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for being an float", () => expect(() => cannotBeFloat(3.14, undefined)).to.throw(ArgumentError, "Value cannot be null."));

            it("should fail for being an float", () => expect(() => cannotBeFloat(0, 0)).to.throw(ArgumentError, "Value cannot be a float number."));
            it("should fail for being an float", () => expect(() => cannotBeFloat(0.1, 1)).to.throw(ArgumentError, "Value cannot be a float number."));
            it("should fail for being an float", () => expect(() => cannotBeFloat(0.12, 2)).to.throw(ArgumentError, "Value cannot be a float number."));
            it("should fail for being an float", () => expect(() => cannotBeFloat(0.123, 3)).to.throw(ArgumentError, "Value cannot be a float number."));
            it("should fail for being an float", () => expect(() => cannotBeFloat(0.1234, 4)).to.throw(ArgumentError, "Value cannot be a float number."));
            it("should fail for being an float", () => expect(() => cannotBeFloat(0.12345, 5)).to.throw(ArgumentError, "Value cannot be a float number."));
        });
    });
});
