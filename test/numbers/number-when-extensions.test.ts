import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { whenIsBetween, whenIsFloat, whenIsGreaterThan, whenIsGreaterThanOrEqualTo, whenIsInteger, whenIsLessThan, whenIsLessThanOrEqualTo } from "../../source/numbers/number-when-extensions";
import { expect } from "chai";

describe("object can extensions", () =>
{
    describe("whenIsBetween()", () =>
    {
        describe("success", () =>
        {
            it("should return null", () => expect(whenIsBetween(<number | null | undefined>null, 1, 1, true, 9)).to.equal(null));
            it("should return undefined", () => expect(whenIsBetween(<number | null | undefined>undefined, 1, 1, true, 9)).to.equal(undefined));
            it("should return null", () => expect(whenIsBetween(1, 1, 1, false, null)).to.equal(1));
            it("should return null", () => expect(whenIsBetween(1, 1, 1, false, undefined)).to.equal(1));

            it("should be between", () => expect(whenIsBetween(0, 1, 1, true, 9)).to.equal(0));
            it("should be between", () => expect(whenIsBetween(2, 1, 1, true, 9)).to.equal(2));
            it("should be between", () => expect(whenIsBetween(1, 1, 1, false, 9)).to.equal(1));
            it("should be between", () => expect(whenIsBetween(0, 1, 3, true, 9)).to.equal(0));
            it("should be between", () => expect(whenIsBetween(1, 1, 3, false, 9)).to.equal(1));
            it("should be between", () => expect(whenIsBetween(3, 1, 3, false, 9)).to.equal(3));
            it("should be between", () => expect(whenIsBetween(4, 1, 3, true, 9)).to.equal(4));
            it("should be between", () => expect(whenIsBetween(4, 1, 3, false, 9)).to.equal(4));
            it("should be between", () => expect(whenIsBetween(4, 1, 3, false, 9)).to.equal(4));
            it("should be between", () => expect(whenIsBetween("", "a", "a", true, "9")).to.equal(""));
            it("should be between", () => expect(whenIsBetween("b", "a", "a", true, "9")).to.equal("b"));
            it("should be between", () => expect(whenIsBetween("a", "a", "a", false, "9")).to.equal("a"));
            it("should be between", () => expect(whenIsBetween("a", "b", "c", true, "9")).to.equal("a"));
            it("should be between", () => expect(whenIsBetween("a", "a", "c", false, "9")).to.equal("a"));
            it("should be between", () => expect(whenIsBetween("c", "a", "c", false, "9")).to.equal("c"));
            it("should be between", () => expect(whenIsBetween("d", "a", "c", true, "9")).to.equal("d"));
            it("should be between", () => expect(whenIsBetween("d", "a", "c", false, "9")).to.equal("d"));

            it("should fail when between", () => expect(whenIsBetween(1, 1, 1, true, 9)).to.equal(9));
            it("should fail when between", () => expect(whenIsBetween(1, 1, 3, true, 9)).to.equal(9));
            it("should fail when between", () => expect(whenIsBetween(2, 1, 3, true, 9)).to.equal(9));
            it("should fail when between", () => expect(whenIsBetween(3, 1, 3, true, 9)).to.equal(9));
            it("should fail when between", () => expect(whenIsBetween(2, 1, 3, false, 9)).to.equal(9));
            it("should fail when between", () => expect(whenIsBetween("a", "a", "a", true, "9")).to.equal("9"));
            it("should fail when between", () => expect(whenIsBetween("a", "a", "c", true, "9")).to.equal("9"));
            it("should fail when between", () => expect(whenIsBetween("b", "a", "c", true, "9")).to.equal("9"));
            it("should fail when between", () => expect(whenIsBetween("c", "a", "c", true, "9")).to.equal("9"));
            it("should fail when between", () => expect(whenIsBetween("b", "a", "c", false, "9")).to.equal("9"));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => whenIsBetween(<number | null | undefined>0, null, 1, true, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsBetween(<number | null | undefined>0, undefined, 1, true, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsBetween(<number | null | undefined>0, 1, null, true, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsBetween(<number | null | undefined>0, 1, undefined, true, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsBetween(<number | null | undefined>0, null, null, true, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsBetween(<number | null | undefined>0, undefined, undefined, true, 9)).to.throw(ArgumentError, "Value cannot be null."));

        });
    });

    describe("whenIsGreaterThan()", () =>
    {
        describe("success", () =>
        {
            it("should be greater than", () => expect(whenIsGreaterThan(<number | null | undefined>null, 1, 9)).to.equal(null));
            it("should be greater than", () => expect(whenIsGreaterThan(<number | null | undefined>undefined, 1, 9)).to.equal(undefined));
            it("should be greater than", () => expect(whenIsGreaterThan(<number | null | undefined>0, 1, null)).to.equal(0));
            it("should be greater than", () => expect(whenIsGreaterThan(<number | null | undefined>0, 1, undefined)).to.equal(0));
            it("should be greater than", () => expect(whenIsGreaterThan("a", "a", "9")).to.equal("a"));
            it("should be greater than", () => expect(whenIsGreaterThan("a", "b", "9")).to.equal("a"));
            it("should be greater than", () => expect(whenIsGreaterThan(1, 1, 9)).to.equal(1));
            it("should be greater than", () => expect(whenIsGreaterThan(1, 2, 9)).to.equal(1));

            it("should fail when greater than", () => expect(whenIsGreaterThan("b", "a", "9")).to.equal("9"));
            it("should fail when greater than", () => expect(whenIsGreaterThan("a", "A", "9")).to.equal("9"));
            it("should fail when greater than", () => expect(whenIsGreaterThan(1, 0, 9)).to.equal(9));
            it("should fail when greater than", () => expect(whenIsGreaterThan(1, -1, 9)).to.equal(9));
        });

        describe("failure", () =>
        {
            it("should fail when greater than", () => expect(() => whenIsGreaterThan(<number | null | undefined>1, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => whenIsGreaterThan(<number | null | undefined>1, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => whenIsGreaterThan(null, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => whenIsGreaterThan(null, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => whenIsGreaterThan(undefined, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => whenIsGreaterThan(undefined, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("whenIsGreaterThanOrEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo(<number | null | undefined>null, 1, 9)).to.equal(null));
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo(<number | null | undefined>undefined, 1, 9)).to.equal(undefined));
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo(<number | null | undefined>0, 1, null)).to.equal(0));
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo(<number | null | undefined>0, 1, undefined)).to.equal(0));
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo("a", "b", "9")).to.equal("a"));
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo("a", "c", "9")).to.equal("a"));
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo(1, 2, 9)).to.equal(1));
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo(1, 3, 9)).to.equal(1));

            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo("b", "a", "9")).to.equal("9"));
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo("a", "A", "9")).to.equal("9"));
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo(1, 0, 9)).to.equal(9));
            it("should be greater than or equal to", () => expect(whenIsGreaterThanOrEqualTo(1, -1, 9)).to.equal(9));
        });

        describe("failure", () =>
        {
            it("should fail when greater than or equal to", () => expect(() => whenIsGreaterThanOrEqualTo(<number | null | undefined>1, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => whenIsGreaterThanOrEqualTo(<number | null | undefined>1, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => whenIsGreaterThanOrEqualTo(null, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => whenIsGreaterThanOrEqualTo(null, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => whenIsGreaterThanOrEqualTo(undefined, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => whenIsGreaterThanOrEqualTo(undefined, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("whenIsLessThan()", () =>
    {
        describe("success", () =>
        {
            it("should be less than", () => expect(whenIsLessThan(<number | null | undefined>null, 1, 9)).to.equal(null));
            it("should be less than", () => expect(whenIsLessThan(<number | null | undefined>undefined, 1, 9)).to.equal(undefined));
            it("should be less than", () => expect(whenIsLessThan(<number | null | undefined>2, 1, null)).to.equal(2));
            it("should be less than", () => expect(whenIsLessThan(<number | null | undefined>2, 1, undefined)).to.equal(2));
            it("should be less than", () => expect(whenIsLessThan("a", "a", "9")).to.equal("a"));
            it("should be less than", () => expect(whenIsLessThan("b", "a", "9")).to.equal("b"));
            it("should be less than", () => expect(whenIsLessThan(1, 1, 9)).to.equal(1));
            it("should be less than", () => expect(whenIsLessThan(2, 1, 9)).to.equal(2));
            it("should be less than", () => expect(whenIsLessThan("a", "b", "9")).to.equal("9"));
            it("should be less than", () => expect(whenIsLessThan("A", "a", "9")).to.equal("9"));
            it("should be less than", () => expect(whenIsLessThan(0, 1, 9)).to.equal(9));
            it("should be less than", () => expect(whenIsLessThan(-1, 1, 9)).to.equal(9));
        });

        describe("failure", () =>
        {
            it("should fail when less than", () => expect(() => whenIsLessThan(<number | null | undefined>1, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => whenIsLessThan(<number | null | undefined>1, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => whenIsLessThan(null, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => whenIsLessThan(null, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => whenIsLessThan(undefined, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => whenIsLessThan(undefined, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));

        });
    });

    describe("whenIsGreaterThanOrEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should be less than or equal to", () => expect(whenIsLessThanOrEqualTo(<number | null | undefined>null, 1, 9)).to.equal(null));
            it("should be less than or equal to", () => expect(whenIsLessThanOrEqualTo(<number | null | undefined>undefined, 1, 9)).to.equal(undefined));
            it("should be less than or equal to", () => expect(whenIsLessThanOrEqualTo("b", "a", "9")).to.equal("b"));
            it("should be less than or equal to", () => expect(whenIsLessThanOrEqualTo("c", "a", "9")).to.equal("c"));
            it("should be less than or equal to", () => expect(whenIsLessThanOrEqualTo(2, 1, 9)).to.equal(2));
            it("should be less than or equal to", () => expect(whenIsLessThanOrEqualTo(3, 1, 9)).to.equal(3));

            it("should be less than or equal to", () => expect(whenIsLessThanOrEqualTo("a", "b", "9")).to.equal("9"));
            it("should be less than or equal to", () => expect(whenIsLessThanOrEqualTo("A", "a", "9")).to.equal("9"));
            it("should be less than or equal to", () => expect(whenIsLessThanOrEqualTo(0, 1, 9)).to.equal(9));
            it("should be less than or equal to", () => expect(whenIsLessThanOrEqualTo(-1, 1, 9)).to.equal(9));
        });

        describe("failure", () =>
        {
            it("should fail when null", () => expect(() => whenIsLessThanOrEqualTo(<number | null | undefined>1, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => whenIsLessThanOrEqualTo(<number | null | undefined>1, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => whenIsLessThanOrEqualTo(null, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => whenIsLessThanOrEqualTo(null, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => whenIsLessThanOrEqualTo(undefined, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => whenIsLessThanOrEqualTo(undefined, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("whenIsInteger()", () =>
    {
        describe("success", () =>
        {
            it("should not be integer", () => expect(whenIsInteger(null, 9)).to.equal(null));
            it("should not be integer", () => expect(whenIsInteger(undefined, 9)).to.equal(undefined));

            it("should not be integer", () => expect(whenIsInteger(3.1, 9)).to.equal(3.1));
            it("should not be integer", () => expect(whenIsInteger(3.14, 9)).to.equal(3.14));
            it("should not be integer", () => expect(whenIsInteger(3.14159265359, 9)).to.equal(3.14159265359));

            it("should be integer", () => expect(whenIsInteger(-100, 9)).to.equal(9));
            it("should be integer", () => expect(whenIsInteger(-1, 9)).to.equal(9));
            it("should be integer", () => expect(whenIsInteger(0, 9)).to.equal(9));
            it("should be integer", () => expect(whenIsInteger(2, 9)).to.equal(9));
            it("should be integer", () => expect(whenIsInteger(200, 9)).to.equal(9));
        });
    });

    describe("whenIsFloat()", () =>
    {
        describe("success", () =>
        {
            it("should not be float", () => expect(whenIsFloat(null, 5, 9)).to.equal(null));
            it("should not be float", () => expect(whenIsFloat(undefined, 5, 9)).to.equal(undefined));

            it("should not be float", () => expect(whenIsFloat(0.1, 0, 9)).to.equal(0.1));
            it("should not be float", () => expect(whenIsFloat(0.12, 1, 9)).to.equal(0.12));
            it("should not be float", () => expect(whenIsFloat(0.123, 2, 9)).to.equal(0.123));

            it("should not be float", () => expect(whenIsFloat(0, 0, 9)).to.equal(9));
            it("should not be float", () => expect(whenIsFloat(0.1, 1, 9)).to.equal(9));
            it("should not be float", () => expect(whenIsFloat(0.12, 2, 9)).to.equal(9));

            it("should not be float", () => expect(whenIsFloat(0.1, 0, 9)).to.equal(0.1));
            it("should not be float", () => expect(whenIsFloat(0.12, 1, 9)).to.equal(0.12));
        });

        describe("failure", () =>
        {
            it("should fail for being an float", () => expect(() => whenIsFloat(3.14, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for being an float", () => expect(() => whenIsFloat(3.14, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });
});
