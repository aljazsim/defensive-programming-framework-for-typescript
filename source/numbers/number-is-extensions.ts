import { cannotBeNull } from "../objects/object-cannot-extensions";
import { mustBeGreaterThanOrEqualTo, mustBeInteger, mustBeLessThanOrEqualTo } from "./number-must-extensions";

// #region Functions (7)

/**
 * Determines whether the specified value is between the specified limits.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param minValue - The minimum value.
 * @param maxValue - The maximum value.
 * @param [inclusive=true] - If set to true include the limits in the range.
 * @returns - True if the specified value is between the specified limits; otherwise, false.
 */
export function isBetween<T extends string | number | null | undefined>(value: T, minValue: T, maxValue: T, inclusive: boolean = true): boolean
{
    cannotBeNull(minValue);
    cannotBeNull(maxValue);
    mustBeLessThanOrEqualTo(minValue, maxValue);

    if (value === null ||
        value === undefined)
    {
        return false;
    }
    else
    {
        if (inclusive)
        {
            return value >= minValue && value <= maxValue;
        }
        else
        {
            return value > minValue && value < maxValue;
        }
    }
}

/**
 * Determines whether the specified value is a float number.
 *
 * @export
 * @param value - The value.
 * @param maxDecimalPlaces - The maximum number of decimal places.
 * @returns - True if the specified value is na integer number; otherwise, false.
 */
export function isFloat(value: number | null | undefined, maxDecimalPlaces: number | null | undefined)
{
    cannotBeNull(maxDecimalPlaces);
    mustBeGreaterThanOrEqualTo(maxDecimalPlaces, 0);
    mustBeInteger(maxDecimalPlaces);

    if (value === null ||
        value === undefined)
    {
        return false;
    }
    else
    {
        let coefficient = Math.pow(10, maxDecimalPlaces || 0);
        let valueRounded = Math.round(value * coefficient) / coefficient;

        return value === valueRounded;
    }
}

/**
 * Determines whether the specified value is greater than the specified limit.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param minValue - The minimum value.
 * @returns - True if the specified value is greater than the specified limit; otherwise, false.
 */
export function isGreaterThan<T extends string | number | null | undefined>(value: T, minValue: T): boolean
{
    cannotBeNull(minValue);

    if (value === null ||
        value === undefined)
    {
        return false;
    }
    else
    {
        return value > minValue;
    }
}

/**
 * Determines whether the specified value is greater than or equal the specified limit.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param minValue - The minimum value.
 * @returns - True if the specified value is greater than or equal to the specified limit; otherwise, false.
 */
export function isGreaterThanOrEqualTo<T extends string | number | null | undefined>(value: T, minValue: T): boolean
{
    cannotBeNull(minValue);

    if (value === null ||
        value === undefined)
    {
        return false;
    }
    else
    {
        return value >= minValue;
    }
}

/**
 * Determines whether the specified value is an integer number.
 *
 * @export
 * @param value - The value.
 * @returns - True if the specified value is na integer number; otherwise, false.
 */
export function isInteger(value: number | null | undefined)
{
    if (value === null ||
        value === undefined)
    {
        return false;
    }
    else
    {
        return value === Math.round(value);
    }
}

/**
 * Determines whether the specified value is less than the specified limit.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param maxValue - The minimum value.
 * @returns - True if the specified value is less than the specified limit; otherwise, false.
 */
export function isLessThan<T extends string | number | null | undefined>(value: T, maxValue: T): boolean
{
    cannotBeNull(maxValue);

    if (value === null ||
        value === undefined)
    {
        return false;
    }
    else
    {
        return value < maxValue;
    }
}

/**
 * Determines whether the specified value is less than or equal to the specified limit.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param maxValue - The minimum value.
 * @returns - True if the specified value is less than or equal to  the specified limit; otherwise, false.
 */
export function isLessThanOrEqualTo<T extends string | number | null | undefined>(value: T, maxValue: T): boolean
{
    cannotBeNull(maxValue);

    if (value === null ||
        value === undefined)
    {
        return false;
    }
    else
    {
        return value <= maxValue;
    }
}

// #endregion
