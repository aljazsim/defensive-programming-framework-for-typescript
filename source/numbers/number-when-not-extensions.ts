import { isBetween, isFloat, isGreaterThan, isGreaterThanOrEqualTo, isInteger, isLessThan, isLessThanOrEqualTo } from "./number-is-extensions";

// #region Functions (7)

/**
 * Returns default value when the original value is not between the specified limits; otherwise returns the original value.
 *
 * @export
 * @param value - The value.
 * @param minValue - The minimum value.
 * @param maxValue - The maximum value.
 * @param [inclusive=true] - If set to true include the limits in the range.
 * @param defaultValue - The default value.
 * @returns - The default value when the original value is not between the specified limits; otherwise returns the original value.
 */
export function whenIsNotBetween<T extends string | number | null | undefined>(value: T, minValue: T, maxValue: T, inclusive: boolean = true, defaultValue: T): T
{
    if (!isBetween(value, minValue, maxValue, inclusive))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the specified value is not a float; otherwise returns the original value.
 *
 * @export
 * @param value - The value.
 * @param maxDecimalPlaces - The maximum number of decimal places.
 * @param defaultValue - The default value.
 * @returns - The default value when the specified value is not a float; otherwise returns the original value.
 */
export function whenIsNotFloat(value: number | null | undefined, maxDecimalPlaces: number | null | undefined, defaultValue: number | null | undefined): number | null | undefined
{
    if (!isFloat(value, maxDecimalPlaces))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the original value is not greater than the specified limit; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param minValue - The value type.
 * @param defaultValue - The default value.
 * @returns - The default value when the original value is not greater than the specified limit; otherwise returns the original value.
 */
export function whenIsNotGreaterThan<T extends string | number | null | undefined>(value: T, minValue: T, defaultValue: T): T
{
    if (!isGreaterThan(value, minValue))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the original value is not greater than or equal to the specified limit; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param minValue - The minimum value.
 * @param defaultValue - The default value.
 * @returns - The default value when the original value is not greater than or equal to the specified limit; otherwise returns the original value.
 */
export function whenIsNotGreaterThanOrEqualTo<T extends string | number | null | undefined>(value: T, minValue: T, defaultValue: T): T
{
    if (!isGreaterThanOrEqualTo(value, minValue))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the specified value is not an integer; otherwise returns the original value.
 *
 * @export
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The default value when the specified value is not an integer; otherwise returns the original value.
 */
export function whenIsNotInteger(value: number | null | undefined, defaultValue: number | null | undefined): number | null | undefined
{
    if (!isInteger(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the original value is not less than the specified limit; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param maxValue - The max value.
 * @param defaultValue - The default value.
 * @returns - The default value when the original value not is less than the specified limit; otherwise returns the original value.
 */
export function whenIsNotLessThan<T extends string | number | null | undefined>(value: T, maxValue: T, defaultValue: T): T
{
    if (!isLessThan(value, maxValue))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the original value is not less than or equal to the specified limit; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param maxValue - The max value.
 * @param defaultValue - The default value.
 * @returns - The default value when the original value is not less than or equal to the specified limit; otherwise returns the original value.
 */
export function whenIsNotLessThanOrEqualTo<T extends string | number | null | undefined>(value: T, maxValue: T, defaultValue: T): T
{
    if (!isLessThanOrEqualTo(value, maxValue))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

// #endregion
