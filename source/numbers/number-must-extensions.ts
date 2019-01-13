import { ArgumentError } from "../argument-error";
import { isBetween, isFloat, isGreaterThan, isGreaterThanOrEqualTo, isInteger, isLessThan, isLessThanOrEqualTo } from "./number-is-extensions";

// #region Functions (7)

/**
 * Returns the original value if it is between the specified limits; otherwise throws a new ArgumentError.
 *
 * @export
 * @param value - The value.
 * @param minValue -The minimum value type.
 * @param maxValue - The maximum value type.
 * @param [inclusive=true] - If set to true include limits in the range.
 * @returns - The original value if it is between the specified limits; otherwise throws a new ArgumentError.
 */
export function mustBeBetween<T extends string | number | null | undefined>(value: T, minValue: T, maxValue: T, inclusive: boolean = true): T
{
    if (!isBetween(value, minValue, maxValue, inclusive))
    {
        if (inclusive)
        {
            throw new ArgumentError(`Value must be between ${minValue} and ${maxValue} inclusive.`);
        }
        else
        {
            throw new ArgumentError(`Value must be between ${minValue} and ${maxValue}.`);
        }
    }

    return value;
}

/**
 * Returns the original value if it is a float number; otherwise throws a new Argument error.
 *
 * @export
 * @param value - The value.
 * @param maxDecimalPlaces - The maximum number of decimal places.
 * @returns - The original value if it is a float number; otherwise throws a new ArgumentError.
 */
export function mustBeFloat(value: number | null | undefined, maxDecimalPlaces: number | null | undefined): number | null | undefined
{
    if (!isFloat(value, maxDecimalPlaces))
    {
        throw new ArgumentError(`Value must be a float number.`);
    }

    return value;
}

/**
 * Returns the original value if it is greater than the specified limit; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param minValue - The minimum value.
 * @returns - The original value if it is greater than the specified limit; otherwise throws a new ArgumentError.
 */
export function mustBeGreaterThan<T extends string | number | null | undefined>(value: T, minValue: T): T
{
    if (!isGreaterThan(value, minValue))
    {
        throw new ArgumentError(`Value must be greater than ${minValue}.`);
    }

    return value;
}

/**
 * Returns the original value if it is greater than or equal to the specified limit; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param minValue - The minimum value.
 * @returns - The original value if it is greater than or equal to the specified limit; otherwise throws a new ArgumentError.
 */
export function mustBeGreaterThanOrEqualTo<T extends string | number | null | undefined>(value: T, minValue: T): T
{
    if (!isGreaterThanOrEqualTo(value, minValue))
    {
        throw new ArgumentError(`Value must be greater than or equal to ${minValue}.`);
    }

    return value;
}

/**
 * Returns the original value if it is an integer number; otherwise throws a new Argument error.
 *
 * @export
 * @param value - The value.
 * @returns - The original value if it is an integer number; otherwise throws a new ArgumentError.
 */
export function mustBeInteger(value: number | null | undefined): number | null | undefined
{
    if (!isInteger(value))
    {
        throw new ArgumentError(`Value must be an integer number.`);
    }

    return value;
}

/**
 * Returns the original value if it is less than the specified limit; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param maxValue - The maximum value.
 * @returns - The original value if it is less than the specified limit; otherwise throws a new ArgumentError.
 */
export function mustBeLessThan<T extends string | number | null | undefined>(value: T, maxValue: T): T
{
    if (!isLessThan(value, maxValue))
    {
        throw new ArgumentError(`Value must be less than ${maxValue}.`);
    }

    return value;
}

/**
 * Returns the original value if it is less than or equal to the specified limit; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param maxValue - The maximum value.
 * @returns - The original value if it is less than or equal to the specified limit; otherwise throws a new ArgumentError.
 */
export function mustBeLessThanOrEqualTo<T extends string | number | null | undefined>(value: T, maxValue: T): T
{
    if (!isLessThanOrEqualTo(value, maxValue))
    {
        throw new ArgumentError(`Value must be less than or equal to ${maxValue}.`);
    }

    return value;
}

// #endregion
