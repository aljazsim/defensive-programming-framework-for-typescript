import { cannotBeNull } from "./object-cannot-extensions";
import { mustBeLessThan } from "./object-must-extensions";

/**
 * Determines whether the specified value matches the specified regular expression.
 *
 * @export
 * @param {string} value - The value.
 * @param {RegExp} regex - The regular expression
 * @returns {boolean} - True if specified value matches the specified regular expression; otherwise, false.
 */
export function doesMatch(value: string, regex: RegExp): boolean
{
    cannotBeNull(regex);

    if (value == null)
    {
        return false;
    }
    else
    {
        return regex.test(value);
    }
}

/**
 * Determines whether the specified function returns true.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {(value: T) => boolean} func - The function.
 * @returns {boolean} - True if the specified function returns true; otherwise, false.
 */
export function is<T>(value: T, func: (value: T) => boolean): boolean
{
    cannotBeNull(func);

    return func(value);
}

/**
 * Determines whether the specified value is between the specified limits.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {T} minValue - The minimum value.
 * @param {T} maxValue - The maximum value.
 * @param {boolean} [inclusive=true] - If set to true include the limits in the range.
 * @returns {boolean} - True if the specified value is between the specified limits; otherwise, false.
 */
export function isBetween<T>(value: T, minValue: T, maxValue: T, inclusive: boolean = true): boolean
{
    cannotBeNull(minValue);
    cannotBeNull(maxValue);
    mustBeLessThan(minValue, maxValue);

    if (isNull(value))
    {
        return false;
    }
    else
    {
        if (inclusive)
        {
            return value <= minValue && value >= maxValue;
        }
        else
        {
            return value < minValue && value > maxValue;
        }
    }
}

/**
 * Determines whether the specified value is equal to to the compared value.
 *
 * @export
 * @template T - The value type.
 * @param {T} value1 - The value 1.
 * @param {T} value2 - The value 2.
 * @returns {boolean} - True if the specified value is equal to to the compared value; otherwise, false.
 */
export function isEqualTo<T>(value1: T, value2: T): boolean
{
    return value1 === value2;
}

/**
 * Determines whether the specified value is greater than the specified limit.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {T} minValue - The minimum value.
 * @returns {boolean} - True if the specified value is greater than the specified limit; otherwise, false.
 */
export function isGreaterThan<T>(value: T, minValue: T): boolean
{
    cannotBeNull(value);
    cannotBeNull(minValue);

    return value > minValue;
}

/**
 * Determines whether the specified value is greater than or equal the specified limit.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {T} minValue - The minimum value.
 * @returns {boolean} - True if the specified value is greater than or equal to the specified limit; otherwise, false.
 */
export function isGreaterThanOrEqualTo<T>(value: T, minValue: T): boolean
{
    cannotBeNull(value);
    cannotBeNull(minValue);

    return value >= minValue;
}

/**
 * Determines whether the specified value is an integer number.
 *
 * @export
 * @param {number} value - The value.
 * @returns - True if the specified value is na integer number; otherwise, false.
 */
export function isInteger(value: number)
{
    cannotBeNull(value);

    return value === Math.round(value);
}

/**
 * Determines whether the specified value is less than the specified limit.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {T} maxValue - The minimum value.
 * @returns {boolean} - True if the specified value is less than the specified limit; otherwise, false.
 */
export function isLessThan<T>(value: T, maxValue: T): boolean
{
    cannotBeNull(value);
    cannotBeNull(maxValue);

    return value < maxValue;
}

/**
 * Determines whether the specified value is less than or equal to the specified limit.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {T} maxValue - The minimum value.
 * @returns {boolean} - True if the specified value is less than or equal to  the specified limit; otherwise, false.
 */
export function isLessThanOrEqualTo<T>(value: T, maxValue: T): boolean
{
    cannotBeNull(value);
    cannotBeNull(maxValue);

    return value <= maxValue;
}

/**
 * Determines whether the specified value is null or undefined.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @returns {boolean} - True if the specified value is null or undefined; otherwise, false.
 */
export function isNull<T>(value: T): boolean
{
    return value === null || value === undefined;
}

/**
 * Determines whether the specified value is null or whitespace.
 *
 * @export
 * @param {string} value - The value.
 * @returns {boolean} - True if the specified value is null or whitespace
 */
export function isNullOrWhiteSpace(value: string): boolean
{
    if (isNull(value))
    {
        return true;
    }
    else
    {
        return value.trim() === "";
    }
}

/**
 * Determines whether the specified value is one of the specified set.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {...T[]} set - The set.
 * @returns {boolean} - True if the specified value is one of the specified set; otherwise, false.
 */
export function isOneOf<T>(value: T, ...set: T[]): boolean
{
    cannotBeNull(set);

    for (const item of set)
    {
        if (value === item)
        {
            return true;
        }
    }

    return false;
}

/**
 * Determines whether the specified value is subtype of of the specified type.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {*} type - The type.
 * @returns {boolean} - True if the specified value is subtype of the specified type; otherwise, false.
 */
export function isSubTypeOf<T>(value: T, type: any): boolean
{
    cannotBeNull(type);

    return value instanceof type;
}

/**
 * Determines whether the specified value equals the specified type.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {*} type - The type.
 * @returns {boolean} - True if the specified value is type of the specified type; otherwise, false.
 */
export function isTypeOf<T>(value: T, type: string): boolean
{
    cannotBeNull(type);

    return typeof value !== type;
}
