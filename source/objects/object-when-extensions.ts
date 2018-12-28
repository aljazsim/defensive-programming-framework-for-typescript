import { doesMatch, is, isBetween, isEqualTo, isGreaterThan, isGreaterThanOrEqualTo, isInteger, isLessThan, isLessThanOrEqualTo, isNull, isNullOrWhiteSpace, isOneOf, isSubTypeOf, isTypeOf } from "./object-is-extensions";

/**
 * Returns default value when the original value does match the specified regular expression; otherwise returns the original value.
 *
 * @export
 * @param {string} value - The value.
 * @param {RegExp} regex - The regex.
 * @param {string} defaultValue - The default value.
 * @returns - The default value when the original value does match the specified regular expression; otherwise returns the original value.
 */
export function whenDoesMatch(value: string, regex: RegExp, defaultValue: string)
{
    if (doesMatch(value, regex))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the specified function returns true; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {(value: T) => boolean} func - The function.
 * @param {T} defaultValue - The default value.
 * @returns {T} - The default value when the specified function returns true; otherwise returns the original value.
 */
export function whenIs<T>(value: T, func: (value: T) => boolean, defaultValue: T): T
{
    if (is(value, func))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the original value is between the specified limits; otherwise returns the original value.
 *
 * @export
 * @param {(number|string)} value - The value.
 * @param {(number|string)} minValue - The minimum value.
 * @param {(number|string)} maxValue - The maximum value.
 * @param {boolean} [inclusive=true] - If set to true include the limits in the range.
 * @param {(number|string)} defaultValue - The default value.
 * @returns {(number|string)} - The default value when the original value is between the specified limits; otherwise returns the original value.
 */
export function whenIsBetween(value: number | string, minValue: number | string, maxValue: number | string, inclusive: boolean = true, defaultValue: number | string): number | string
{
    if (isBetween(value, minValue, maxValue, inclusive))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the original value is equal to the compared value; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param {T} value1 - The value 1.
 * @param {T} value2 - The value 2.
 * @param {T} defaultValue - The default value.
 * @returns {T} - The default value when the original value is equal to the compared value; otherwise returns the original value.
 */
export function whenIsEqualTo<T>(value1: T, value2: T, defaultValue: T): T
{
    if (isEqualTo(value1, value2))
    {
        return defaultValue;
    }
    else
    {
        return value1;
    }
}

/**
 * Returns default value when the original value is greater than the specified limit; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {T} minValue - The value type.
 * @param {T} defaultValue - The default value.
 * @returns {T} - The default value when the original value is greater than the specified limit; otherwise returns the original value.
 */
export function whenIsGreaterThan<T>(value: T, minValue: T, defaultValue: T): T
{
    if (isGreaterThan(value, minValue))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the original value is greater than or equal to the specified limit; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {T} minValue - The minimum value.
 * @param {T} defaultValue - The default value.
 * @returns {T} - The default value when the original value is greater than or equal to the specified limit; otherwise returns the original value.
 */
export function whenIsGreaterThanOrEqualTo<T>(value: T, minValue: T, defaultValue: T): T
{
    if (isGreaterThanOrEqualTo(value, minValue))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the specified value is an integer; otherwise returns the original value.
 *
 * @export
 * @param {T} value - The value.
 * @param {T} defaultValue - The default value.
 * @returns {T} - The default value when the specified value is an integer; otherwise returns the original value.
 */
export function whenIsInteger(value: number, defaultValue: number): number
{
    if (isInteger(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the original value is less than the specified limit; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {T} maxValue - The max value.
 * @param {T} defaultValue - The default value.
 * @returns {T} - The default value when the original value is less than the specified limit; otherwise returns the original value.
 */
export function whenIsLessThan<T>(value: T, maxValue: T, defaultValue: T): T
{
    if (isLessThan(value, maxValue))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the original value is less than or equal to the specified limit; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {T} maxValue - The max value.
 * @param {T} defaultValue - The default value.
 * @returns {T} - The default value when the original value is less than or equal to the specified limit; otherwise returns the original value.
 */
export function whenIsLessThanOrEqualTo<T>(value: T, maxValue: T, defaultValue: T): T
{
    if (isLessThanOrEqualTo(value, maxValue))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the original value is null or undefined; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {T} defaultValue - The default value.
 * @returns {T} - The default value when the original value is null or undefined; otherwise returns the original value.
 */
export function whenIsNull<T>(value: T, defaultValue: T): T
{
    if (isNull(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the original value does belong to the specified set; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {...T[]} set - The set.
 * @param {T} defaultValue - The default value.
 * @returns {T} - The default value when the original value does belong to the specified set; otherwise returns the original value.
 */
export function whenIsOneOf<T>(value: T, set: T[], defaultValue: T): T
{
    if (isOneOf(value, ...set))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the original value is subtype of the specified type; otherwise returns the original value.
 *
 * @export
 * @template T - The value typ.e
 * @param {T} value - The value.
 * @param {*} type - The type.
 * @param {T} defaultValue - The default value.
 * @returns {T} - The default value when the original value is subtype of the specified type; otherwise returns the original value.
 */
export function whenIsSubTypeOf<T>(value: T, type: any, defaultValue: T): T
{
    if (isSubTypeOf(value, type))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the original value is of the specified type; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {*} type - The type.
 * @param {T} defaultValue - The default value.
 * @returns {T} - The default value when the original value is of the specified type; otherwise returns the original value.
 */
export function whenIsTypeOf<T>(value: T, type: string, defaultValue: T): T
{
    if (isTypeOf(value, type))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the original value is equal to null or whitespace; otherwise returns the original value.
 *
 * @export
 * @param {T} value - The value.
 * @returns {T} - The default value when the original value is equal to null or whitespace; otherwise returns the original value.
 */
export function whenNullOrWhiteSpace(value: string, defaultValue: string): string
{
    if (isNullOrWhiteSpace(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}
