import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { mustBeBetween, mustBeFloat, mustBeGreaterThan, mustBeGreaterThanOrEqualTo, mustBeInteger, mustBeLessThan, mustBeLessThanOrEqualTo } from "../../source/numbers/number-must-extensions";
import { expect } from "chai";

describe("object must extensions", () =>
{
    describe("mustBeBetween()", () =>
    {
        describe("success", () =>
        {
            it("should be between", () => expect(mustBeBetween(1, 1, 1, true)).to.equal(1));
            it("should be between", () => expect(mustBeBetween(1, 1, 3, true)).to.equal(1));
            it("should be between", () => expect(mustBeBetween(2, 1, 3, true)).to.equal(2));
            it("should be between", () => expect(mustBeBetween(3, 1, 3, true)).to.equal(3));
            it("should be between", () => expect(mustBeBetween(2, 1, 3, false)).to.equal(2));
            it("should be between", () => expect(mustBeBetween("a", "a", "a", true)).to.equal("a"));
            it("should be between", () => expect(mustBeBetween("a", "a", "c", true)).to.equal("a"));
            it("should be between", () => expect(mustBeBetween("b", "a", "c", true)).to.equal("b"));
            it("should be between", () => expect(mustBeBetween("c", "a", "c", true)).to.equal("c"));
            it("should be between", () => expect(mustBeBetween("b", "a", "c", false)).to.equal("b"));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => mustBeBetween(<number>0, null, 1, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => mustBeBetween(<number>0, undefined, 1, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => mustBeBetween(<number>0, 1, null, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => mustBeBetween(<number>0, 1, undefined, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => mustBeBetween(<number>0, null, null, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => mustBeBetween(<number>0, undefined, undefined, true)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when not between", () => expect(() => mustBeBetween(null, 1, 1, true)).to.throw(ArgumentError, "Value must be between 1 and 1 inclusive."));
            it("should fail when not between", () => expect(() => mustBeBetween(undefined, 1, 1, true)).to.throw(ArgumentError, "Value must be between 1 and 1 inclusive."));
            it("should fail when not be between", () => expect(() => mustBeBetween(0, 1, 1, true)).to.throw(ArgumentError, "Value must be between 1 and 1 inclusive."));
            it("should fail when not be between", () => expect(() => mustBeBetween(2, 1, 1, true)).to.throw(ArgumentError, "Value must be between 1 and 1 inclusive."));
            it("should fail when not be between", () => expect(() => mustBeBetween(1, 1, 1, false)).to.throw(ArgumentError, "Value must be between 1 and 1."));
            it("should fail when not be between", () => expect(() => mustBeBetween(0, 1, 3, true)).to.throw(ArgumentError, "Value must be between 1 and 3 inclusive."));
            it("should fail when not be between", () => expect(() => mustBeBetween(1, 1, 3, false)).to.throw(ArgumentError, "Value must be between 1 and 3."));
            it("should fail when not be between", () => expect(() => mustBeBetween(3, 1, 3, false)).to.throw(ArgumentError, "Value must be between 1 and 3."));
            it("should fail when not be between", () => expect(() => mustBeBetween(4, 1, 3, true)).to.throw(ArgumentError, "Value must be between 1 and 3 inclusive."));
            it("should fail when not be between", () => expect(() => mustBeBetween(4, 1, 3, false)).to.throw(ArgumentError, "Value must be between 1 and 3."));
            it("should fail when not be between", () => expect(() => mustBeBetween(4, 1, 3, false)).to.throw(ArgumentError, "Value must be between 1 and 3."));
            it("should fail when not be between", () => expect(() => mustBeBetween("", "a", "a", true)).to.throw(ArgumentError, "Value must be between a and a inclusive."));
            it("should fail when not be between", () => expect(() => mustBeBetween("b", "a", "a", true)).to.throw(ArgumentError, "Value must be between a and a inclusive."));
            it("should fail when not be between", () => expect(() => mustBeBetween("a", "a", "a", false)).to.throw(ArgumentError, "Value must be between a and a."));
            it("should fail when not be between", () => expect(() => mustBeBetween("a", "b", "c", true)).to.throw(ArgumentError, "Value must be between b and c inclusive."));
            it("should fail when not be between", () => expect(() => mustBeBetween("a", "a", "c", false)).to.throw(ArgumentError, "Value must be between a and c."));
            it("should fail when not be between", () => expect(() => mustBeBetween("c", "a", "c", false)).to.throw(ArgumentError, "Value must be between a and c."));
            it("should fail when not be between", () => expect(() => mustBeBetween("d", "a", "c", true)).to.throw(ArgumentError, "Value must be between a and c inclusive."));
            it("should fail when not be between", () => expect(() => mustBeBetween("d", "a", "c", false)).to.throw(ArgumentError, "Value must be between a and c."));
        });
    });

    describe("mustBeGreaterThan()", () =>
    {
        describe("success", () =>
        {
            it("should be greater than", () => expect(mustBeGreaterThan("b", "a")).to.equal("b"));
            it("should be greater than", () => expect(mustBeGreaterThan("a", "A")).to.equal("a"));
            it("should be greater than", () => expect(mustBeGreaterThan(1, 0)).to.equal(1));
            it("should be greater than", () => expect(mustBeGreaterThan(1, -1)).to.equal(1));
        });

        describe("failure", () =>
        {
            it("should fail null", () => expect(() => mustBeGreaterThan(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail null", () => expect(() => mustBeGreaterThan(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail null", () => expect(() => mustBeGreaterThan(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail null", () => expect(() => mustBeGreaterThan(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail null", () => expect(() => mustBeGreaterThan(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail null", () => expect(() => mustBeGreaterThan(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when not greater than", () => expect(() => mustBeGreaterThan(null, 1)).to.throw(ArgumentError, "Value must be greater than 1."));
            it("should fail when not greater than", () => expect(() => mustBeGreaterThan(undefined, 1)).to.throw(ArgumentError, "Value must be greater than 1."));
            it("should fail when not greater than", () => expect(() => mustBeGreaterThan("a", "a")).to.throw(ArgumentError, "Value must be greater than a."));
            it("should fail when not greater than", () => expect(() => mustBeGreaterThan("a", "b")).to.throw(ArgumentError, "Value must be greater than b."));
            it("should fail when not greater than", () => expect(() => mustBeGreaterThan(1, 1)).to.throw(ArgumentError, "Value must be greater than 1."));
            it("should fail when not greater than", () => expect(() => mustBeGreaterThan(1, 2)).to.throw(ArgumentError, "Value must be greater than 2."));
        });
    });

    describe("mustBeGreaterThanOrEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should be greater than or equal to", () => expect(mustBeGreaterThanOrEqualTo("b", "a")).to.equal("b"));
            it("should be greater than or equal to", () => expect(mustBeGreaterThanOrEqualTo("a", "A")).to.equal("a"));
            it("should be greater than or equal to", () => expect(mustBeGreaterThanOrEqualTo(1, 0)).to.equal(1));
            it("should be greater than or equal to", () => expect(mustBeGreaterThanOrEqualTo(1, -1)).to.equal(1));
        });

        describe("failure", () =>
        {
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo(null, 1)).to.throw(ArgumentError, "Value must be greater than or equal to 1."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo(undefined, 1)).to.throw(ArgumentError, "Value must be greater than or equal to 1."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo("a", "b")).to.throw(ArgumentError, "Value must be greater than or equal to b."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo("a", "c")).to.throw(ArgumentError, "Value must be greater than or equal to c."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo(1, 2)).to.throw(ArgumentError, "Value must be greater than or equal to 2."));
            it("should fail when greater than or equal to", () => expect(() => mustBeGreaterThanOrEqualTo(1, 3)).to.throw(ArgumentError, "Value must be greater than or equal to 3."));
        });
    });

    describe("mustBeLessThan()", () =>
    {
        describe("success", () =>
        {
            it("should be less than", () => expect(mustBeLessThan("A", "a")).to.equal("A"));
            it("should be less than", () => expect(mustBeLessThan("a", "b")).to.equal("a"));
            it("should be less than", () => expect(mustBeLessThan(0, 1)).to.equal(0));
            it("should be less than", () => expect(mustBeLessThan(-1, 1)).to.equal(-1));
        });

        describe("failure", () =>
        {
            it("should fail when null", () => expect(() => mustBeLessThan(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => mustBeLessThan(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => mustBeLessThan(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => mustBeLessThan(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => mustBeLessThan(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => mustBeLessThan(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => mustBeLessThan(null, 1)).to.throw(ArgumentError, "Value must be less than 1"));
            it("should fail when less than", () => expect(() => mustBeLessThan(undefined, 1)).to.throw(ArgumentError, "Value must be less than 1"));
            it("should fail when less than", () => expect(() => mustBeLessThan("a", "a")).to.throw(ArgumentError, "Value must be less than a"));
            it("should fail when less than", () => expect(() => mustBeLessThan("b", "a")).to.throw(ArgumentError, "Value must be less than a"));
            it("should fail when less than", () => expect(() => mustBeLessThan(1, 1)).to.throw(ArgumentError, "Value must be less than 1"));
            it("should fail when less than", () => expect(() => mustBeLessThan(2, 1)).to.throw(ArgumentError, "Value must be less than 1"));

        });
    });

    describe("mustBeGreaterThanOrEqualTo()", () =>
    {
        describe("success", () =>
        {

            it("should be less than or equal to", () => expect(mustBeLessThanOrEqualTo("a", "b")).to.equal("a"));
            it("should be less than or equal to", () => expect(mustBeLessThanOrEqualTo("A", "a")).to.equal("A"));
            it("should be less than or equal to", () => expect(mustBeLessThanOrEqualTo(0, 1)).to.equal(0));
            it("should be less than or equal to", () => expect(mustBeLessThanOrEqualTo(-1, 1)).to.equal(-1));
        });

        describe("failure", () =>
        {
            it("should fail when null", () => expect(() => mustBeLessThanOrEqualTo(1, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => mustBeLessThanOrEqualTo(1, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => mustBeLessThanOrEqualTo(null, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => mustBeLessThanOrEqualTo(null, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => mustBeLessThanOrEqualTo(undefined, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => mustBeLessThanOrEqualTo(undefined, undefined)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when not less than or equal to", () => expect(() => mustBeLessThanOrEqualTo(null, 1)).to.throw(ArgumentError, "Value must be less than or equal to 1."));
            it("should fail when not less than or equal to", () => expect(() => mustBeLessThanOrEqualTo(undefined, 1)).to.throw(ArgumentError, "Value must be less than or equal to 1."));
            it("should fail when not less than or equal to", () => expect(() => mustBeLessThanOrEqualTo("b", "a")).to.throw(ArgumentError, "Value must be less than or equal to a."));
            it("should fail when not less than or equal to", () => expect(() => mustBeLessThanOrEqualTo("c", "a")).to.throw(ArgumentError, "Value must be less than or equal to a."));
            it("should fail when not less than or equal to", () => expect(() => mustBeLessThanOrEqualTo(2, 1)).to.throw(ArgumentError, "Value must be less than or equal to 1."));
            it("should fail when not less than or equal to", () => expect(() => mustBeLessThanOrEqualTo(3, 1)).to.throw(ArgumentError, "Value must be less than or equal to 1."));
        });
    });

    describe("mustBeInteger()", () =>
    {
        describe("success", () =>
        {
            it("should be integer", () => expect(mustBeInteger(-100)).to.equal(-100));
            it("should be integer", () => expect(mustBeInteger(-1)).to.equal(-1));
            it("should be integer", () => expect(mustBeInteger(0)).to.equal(0));
            it("should be integer", () => expect(mustBeInteger(2)).to.equal(2));
            it("should be integer", () => expect(mustBeInteger(200)).to.equal(200));
        });

        describe("failure", () =>
        {
            it("should fail for not being an integer", () => expect(() => mustBeInteger(null)).to.throw(ArgumentError, "Value must be an integer number."));
            it("should fail for not being an integer", () => expect(() => mustBeInteger(undefined)).to.throw(ArgumentError, "Value must be an integer number."));
            it("should fail for not being an integer", () => expect(() => mustBeInteger(3.1)).to.throw(ArgumentError, "Value must be an integer number."));
            it("should fail for not being an integer", () => expect(() => mustBeInteger(3.14)).to.throw(ArgumentError, "Value must be an integer number."));
            it("should fail for not being an integer", () => expect(() => mustBeInteger(3.14159265359)).to.throw(ArgumentError, "Value must be an integer number."));
        });
    });

    describe("mustBeFloat()", () =>
    {
        describe("success", () =>
        {
            it("should fail for being a float", () => expect(mustBeFloat(0, 0)).to.equal(0));
            it("should fail for being a float", () => expect(mustBeFloat(0.1, 1)).to.equal(0.1));
            it("should fail for being a float", () => expect(mustBeFloat(0.12, 2)).to.equal(0.12));
            it("should fail for being a float", () => expect(mustBeFloat(0.123, 3)).equal(0.123));
            it("should fail for being a float", () => expect(mustBeFloat(0.1234, 4)).equal(0.1234));
            it("should fail for being a float", () => expect(mustBeFloat(0.12345, 5)).equal(0.12345));
        });

        describe("failure", () =>
        {
            it("should fail for being a float", () => expect(() => mustBeFloat(3.14, null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for being a float", () => expect(() => mustBeFloat(3.14, undefined)).to.throw(ArgumentError, "Value cannot be null."));

            it("should not be a float", () => expect(() => mustBeFloat(null, 5)).to.throw(ArgumentError, "Value must be a float number."));
            it("should not be a float", () => expect(() => mustBeFloat(undefined, 5)).to.throw(ArgumentError, "Value must be a float number."));
            it("should not be a float", () => expect(() => mustBeFloat(0.1, 0)).to.throw(ArgumentError, "Value must be a float number."));
            it("should not be a float", () => expect(() => mustBeFloat(0.12, 1)).to.throw(ArgumentError, "Value must be a float number."));
            it("should not be a float", () => expect(() => mustBeFloat(0.123, 2)).to.throw(ArgumentError, "Value must be a float number."));
        });
    });
});
