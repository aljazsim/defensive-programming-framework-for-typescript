import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { whenIsNotBetween, whenIsNotFloat, whenIsNotGreaterThan, whenIsNotGreaterThanOrEqualTo, whenIsNotInteger, whenIsNotLessThan, whenIsNotLessThanOrEqualTo } from "../../source/numbers/number-when-not-extensions";
import { expect } from "chai";

describe("object cannot extensions", () =>
{
    describe("whenIsNotBetween()", () =>
    {
        describe("success", () =>
        {
            it("should return null", () => expect(whenIsNotBetween(<number | null | undefined>null, 1, 1, true, 9)).to.equal(9));
            it("should return undefined", () => expect(whenIsNotBetween(<number | null | undefined>undefined, 1, 1, true, 9)).to.equal(9));
            it("should return null", () => expect(whenIsNotBetween(1, 1, 1, false, null)).to.equal(null));
            it("should return null", () => expect(whenIsNotBetween(1, 1, 1, false, undefined)).to.equal(undefined));

            it("should not be between", () => expect(whenIsNotBetween(0, 1, 1, true, 9)).to.equal(9));
            it("should not be between", () => expect(whenIsNotBetween(2, 1, 1, true, 9)).to.equal(9));
            it("should not be between", () => expect(whenIsNotBetween(1, 1, 1, false, 9)).to.equal(9));
            it("should not be between", () => expect(whenIsNotBetween(0, 1, 3, true, 9)).to.equal(9));
            it("should not be between", () => expect(whenIsNotBetween(1, 1, 3, false, 9)).to.equal(9));
            it("should not be between", () => expect(whenIsNotBetween(3, 1, 3, false, 9)).to.equal(9));
            it("should not be between", () => expect(whenIsNotBetween(4, 1, 3, true, 9)).to.equal(9));
            it("should not be between", () => expect(whenIsNotBetween(4, 1, 3, false, 9)).to.equal(9));
            it("should not be between", () => expect(whenIsNotBetween(4, 1, 3, false, 9)).to.equal(9));
            it("should not be between", () => expect(whenIsNotBetween("", "a", "a", true, "9")).to.equal("9"));
            it("should not be between", () => expect(whenIsNotBetween("b", "a", "a", true, "9")).to.equal("9"));
            it("should not be between", () => expect(whenIsNotBetween("a", "a", "a", false, "9")).to.equal("9"));
            it("should not be between", () => expect(whenIsNotBetween("a", "b", "c", true, "9")).to.equal("9"));
            it("should not be between", () => expect(whenIsNotBetween("a", "a", "c", false, "9")).to.equal("9"));
            it("should not be between", () => expect(whenIsNotBetween("c", "a", "c", false, "9")).to.equal("9"));
            it("should not be between", () => expect(whenIsNotBetween("d", "a", "c", true, "9")).to.equal("9"));
            it("should not be between", () => expect(whenIsNotBetween("d", "a", "c", false, "9")).to.equal("9"));

            it("should fail when between", () => expect(whenIsNotBetween(1, 1, 1, true, 9)).to.equal(1));
            it("should fail when between", () => expect(whenIsNotBetween(1, 1, 3, true, 9)).to.equal(1));
            it("should fail when between", () => expect(whenIsNotBetween(2, 1, 3, true, 9)).to.equal(2));
            it("should fail when between", () => expect(whenIsNotBetween(3, 1, 3, true, 9)).to.equal(3));
            it("should fail when between", () => expect(whenIsNotBetween(2, 1, 3, false, 9)).to.equal(2));
            it("should fail when between", () => expect(whenIsNotBetween("a", "a", "a", true, "9")).to.equal("a"));
            it("should fail when between", () => expect(whenIsNotBetween("a", "a", "c", true, "9")).to.equal("a"));
            it("should fail when between", () => expect(whenIsNotBetween("b", "a", "c", true, "9")).to.equal("b"));
            it("should fail when between", () => expect(whenIsNotBetween("c", "a", "c", true, "9")).to.equal("c"));
            it("should fail when between", () => expect(whenIsNotBetween("b", "a", "c", false, "9")).to.equal("b"));
        });

        describe("failure", () =>
        {
            it("should fail for null", () => expect(() => whenIsNotBetween(<number | null | undefined>0, null, 1, true, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsNotBetween(<number | null | undefined>0, undefined, 1, true, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsNotBetween(<number | null | undefined>0, 1, null, true, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsNotBetween(<number | null | undefined>0, 1, undefined, true, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsNotBetween(<number | null | undefined>0, null, null, true, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null", () => expect(() => whenIsNotBetween(<number | null | undefined>0, undefined, undefined, true, 9)).to.throw(ArgumentError, "Value cannot be null."));

        });
    });

    describe("whenIsNotGreaterThan()", () =>
    {
        describe("success", () =>
        {
            it("should not be greater than", () => expect(whenIsNotGreaterThan(<number | null | undefined>null, 1, 9)).to.equal(9));
            it("should not be greater than", () => expect(whenIsNotGreaterThan(<number | null | undefined>undefined, 1, 9)).to.equal(9));
            it("should not be greater than", () => expect(whenIsNotGreaterThan(<number | null | undefined>0, 1, null)).to.equal(null));
            it("should not be greater than", () => expect(whenIsNotGreaterThan(<number | null | undefined>0, 1, undefined)).to.equal(undefined));
            it("should not be greater than", () => expect(whenIsNotGreaterThan("a", "a", "9")).to.equal("9"));
            it("should not be greater than", () => expect(whenIsNotGreaterThan("a", "b", "9")).to.equal("9"));
            it("should not be greater than", () => expect(whenIsNotGreaterThan(1, 1, 9)).to.equal(9));
            it("should not be greater than", () => expect(whenIsNotGreaterThan(1, 2, 9)).to.equal(9));

            it("should fail when greater than", () => expect(whenIsNotGreaterThan("b", "a", "9")).to.equal("b"));
            it("should fail when greater than", () => expect(whenIsNotGreaterThan("a", "A", "9")).to.equal("a"));
            it("should fail when greater than", () => expect(whenIsNotGreaterThan(1, 0, 9)).to.equal(1));
            it("should fail when greater than", () => expect(whenIsNotGreaterThan(1, -1, 9)).to.equal(1));
        });

        describe("failure", () =>
        {
            it("should fail when greater than", () => expect(() => whenIsNotGreaterThan(<number | null | undefined>1, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => whenIsNotGreaterThan(<number | null | undefined>1, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => whenIsNotGreaterThan(null, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => whenIsNotGreaterThan(null, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => whenIsNotGreaterThan(undefined, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than", () => expect(() => whenIsNotGreaterThan(undefined, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("whenIsNotGreaterThanOrEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should not be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo(<number | null | undefined>null, 1, 9)).to.equal(9));
            it("should not be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo(<number | null | undefined>undefined, 1, 9)).to.equal(9));
            it("should not be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo(<number | null | undefined>0, 1, null)).to.equal(null));
            it("should not be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo(<number | null | undefined>0, 1, undefined)).to.equal(undefined));
            it("should not be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo("a", "b", "9")).to.equal("9"));
            it("should not be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo("a", "c", "9")).to.equal("9"));
            it("should not be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo(1, 2, 9)).to.equal(9));
            it("should not be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo(1, 3, 9)).to.equal(9));

            it("should be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo("b", "a", "9")).to.equal("b"));
            it("should be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo("a", "A", "9")).to.equal("a"));
            it("should be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo(1, 0, 9)).to.equal(1));
            it("should be greater than or equal to", () => expect(whenIsNotGreaterThanOrEqualTo(1, -1, 9)).to.equal(1));
        });

        describe("failure", () =>
        {
            it("should fail when greater than or equal to", () => expect(() => whenIsNotGreaterThanOrEqualTo(<number | null | undefined>1, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => whenIsNotGreaterThanOrEqualTo(<number | null | undefined>1, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => whenIsNotGreaterThanOrEqualTo(null, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => whenIsNotGreaterThanOrEqualTo(null, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => whenIsNotGreaterThanOrEqualTo(undefined, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when greater than or equal to", () => expect(() => whenIsNotGreaterThanOrEqualTo(undefined, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("whenIsNotLessThan()", () =>
    {
        describe("success", () =>
        {
            it("should not be less than", () => expect(whenIsNotLessThan(<number | null | undefined>null, 1, 9)).to.equal(9));
            it("should not be less than", () => expect(whenIsNotLessThan(<number | null | undefined>undefined, 1, 9)).to.equal(9));
            it("should not be less than", () => expect(whenIsNotLessThan(<number | null | undefined>2, 1, null)).to.equal(null));
            it("should not be less than", () => expect(whenIsNotLessThan(<number | null | undefined>2, 1, undefined)).to.equal(undefined));
            it("should not be less than", () => expect(whenIsNotLessThan("a", "a", "9")).to.equal("9"));
            it("should not be less than", () => expect(whenIsNotLessThan("b", "a", "9")).to.equal("9"));
            it("should not be less than", () => expect(whenIsNotLessThan(1, 1, 9)).to.equal(9));
            it("should not be less than", () => expect(whenIsNotLessThan(2, 1, 9)).to.equal(9));
            it("should be less than", () => expect(whenIsNotLessThan("a", "b", "9")).to.equal("a"));
            it("should be less than", () => expect(whenIsNotLessThan("A", "a", "9")).to.equal("A"));
            it("should be less than", () => expect(whenIsNotLessThan(0, 1, 9)).to.equal(0));
            it("should be less than", () => expect(whenIsNotLessThan(-1, 1, 9)).to.equal(-1));
        });

        describe("failure", () =>
        {
            it("should fail when less than", () => expect(() => whenIsNotLessThan(<number | null | undefined>1, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => whenIsNotLessThan(<number | null | undefined>1, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => whenIsNotLessThan(null, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => whenIsNotLessThan(null, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => whenIsNotLessThan(undefined, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when less than", () => expect(() => whenIsNotLessThan(undefined, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));

        });
    });

    describe("whenIsNotGreaterThanOrEqualTo()", () =>
    {
        describe("success", () =>
        {
            it("should not be less than or equal to", () => expect(whenIsNotLessThanOrEqualTo(<number | null | undefined>null, 1, 9)).to.equal(9));
            it("should not be less than or equal to", () => expect(whenIsNotLessThanOrEqualTo(<number | null | undefined>undefined, 1, 9)).to.equal(9));
            it("should not be less than or equal to", () => expect(whenIsNotLessThanOrEqualTo("b", "a", "9")).to.equal("9"));
            it("should not be less than or equal to", () => expect(whenIsNotLessThanOrEqualTo("c", "a", "9")).to.equal("9"));
            it("should not be less than or equal to", () => expect(whenIsNotLessThanOrEqualTo(2, 1, 9)).to.equal(9));
            it("should not be less than or equal to", () => expect(whenIsNotLessThanOrEqualTo(3, 1, 9)).to.equal(9));

            it("should be less than or equal to", () => expect(whenIsNotLessThanOrEqualTo("a", "b", "9")).to.equal("a"));
            it("should be less than or equal to", () => expect(whenIsNotLessThanOrEqualTo("A", "a", "9")).to.equal("A"));
            it("should be less than or equal to", () => expect(whenIsNotLessThanOrEqualTo(0, 1, 9)).to.equal(0));
            it("should be less than or equal to", () => expect(whenIsNotLessThanOrEqualTo(-1, 1, 9)).to.equal(-1));
        });

        describe("failure", () =>
        {
            it("should fail when null", () => expect(() => whenIsNotLessThanOrEqualTo(<number | null | undefined>1, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => whenIsNotLessThanOrEqualTo(<number | null | undefined>1, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => whenIsNotLessThanOrEqualTo(null, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => whenIsNotLessThanOrEqualTo(null, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => whenIsNotLessThanOrEqualTo(undefined, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail when null", () => expect(() => whenIsNotLessThanOrEqualTo(undefined, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });

    describe("whenIsNotInteger()", () =>
    {
        describe("success", () =>
        {
            it("should not be integer", () => expect(whenIsNotInteger(null, 9)).to.equal(9));
            it("should not be integer", () => expect(whenIsNotInteger(undefined, 9)).to.equal(9));

            it("should not be integer", () => expect(whenIsNotInteger(3.1, 9)).to.equal(9));
            it("should not be integer", () => expect(whenIsNotInteger(3.14, 9)).to.equal(9));
            it("should not be integer", () => expect(whenIsNotInteger(3.14159265359, 9)).to.equal(9));

            it("should be integer", () => expect(whenIsNotInteger(-100, 9)).to.equal(-100));
            it("should be integer", () => expect(whenIsNotInteger(-1, 9)).to.equal(-1));
            it("should be integer", () => expect(whenIsNotInteger(0, 9)).to.equal(0));
            it("should be integer", () => expect(whenIsNotInteger(2, 9)).to.equal(2));
            it("should be integer", () => expect(whenIsNotInteger(200, 9)).to.equal(200));
        });
    });

    describe("whenIsNotFloat()", () =>
    {
        describe("success", () =>
        {
            it("should not be float", () => expect(whenIsNotFloat(null, 5, 9)).to.equal(9));
            it("should not be float", () => expect(whenIsNotFloat(undefined, 5, 9)).to.equal(9));

            it("should not be float", () => expect(whenIsNotFloat(0.1, 0, 9)).to.equal(9));
            it("should not be float", () => expect(whenIsNotFloat(0.12, 1, 9)).to.equal(9));
            it("should not be float", () => expect(whenIsNotFloat(0.123, 2, 9)).to.equal(9));

            it("should not be float", () => expect(whenIsNotFloat(0, 0, 9)).to.equal(0));
            it("should not be float", () => expect(whenIsNotFloat(0.1, 1, 9)).to.equal(0.1));
            it("should not be float", () => expect(whenIsNotFloat(0.12, 2, 9)).to.equal(0.12));

            it("should not be float", () => expect(whenIsNotFloat(0.1, 0, 9)).to.equal(9));
            it("should not be float", () => expect(whenIsNotFloat(0.12, 1, 9)).to.equal(9));
        });

        describe("failure", () =>
        {
            it("should fail for being an float", () => expect(() => whenIsNotFloat(3.14, null, 9)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for being an float", () => expect(() => whenIsNotFloat(3.14, undefined, 9)).to.throw(ArgumentError, "Value cannot be null."));
        });
    });
});
