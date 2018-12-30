import { ArgumentError } from "../argument-error";
import { doesMatch, is, isBetween, isEqualTo, isGreaterThan, isGreaterThanOrEqualTo, isInteger, isLessThan, isLessThanOrEqualTo, isNull, isNullOrWhiteSpace, isOneOf, isSubTypeOf, isTypeOf } from "./object-is-extensions";

/**
 * Returns original value if the specified function returns true; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {(T) => boolean} func - The function.
 * @returns {T} - The original value if the specified function returns true; otherwise throws a new ArgumentError.
 */
export function mustBe<T>(value: T, func: (value: T) => boolean): T
{
    if (!is(value, func))
    {
        throw new ArgumentError("Expression must be true.");
    }

    return value;
}

/**
 * Returns original value if it is between the specified limits; otherwise throws a new ArgumentError.
 *
 * @export
 * @param {(number|string)} value - The value.
 * @param {(number|string)} minValue -The minimum value type.
 * @param {(number|string)} maxValue - The maximum value type.
 * @param {boolean} [inclusive=true] - If set to true include limits in the range.
 * @returns {(number|string)} - The original value if it is between the specified limits; otherwise throws a new ArgumentError.
 */
export function mustBeBetween(value: number | string, minValue: number | string, maxValue: number | string, inclusive: boolean = true): number | string
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
 * Returns original value if it is equal to the compared value; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {T} value1 - The value 1.
 * @param {T} value2 - The value 2.
 * @returns {T} - The original value if it is equal to the compared value; otherwise throws a new ArgumentError.
 */
export function mustBeEqualTo<T>(value1: T, value2: T): T
{
    if (!isEqualTo(value1, value2))
    {
        throw new ArgumentError(`Value must be equal to ${value2}.`);
    }

    return value1;
}

/**
 * Returns original value if it is greater than the specified limit; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {T} minValue - The minimum value.
 * @returns {T} - The original value if it is greater than the specified limit; otherwise throws a new ArgumentError.
 */
export function mustBeGreaterThan<T>(value: T, minValue: T): T
{
    if (!isGreaterThan(value, minValue))
    {
        throw new ArgumentError(`Value must be greater than ${minValue}.`);
    }

    return value;
}

/**
 * Returns original value if it is greater than or equal to the specified limit; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {T} minValue - The minimum value.
 * @returns {T} - The original value if it is greater than or equal to the specified limit; otherwise throws a new ArgumentError.
 */
export function mustBeGreaterThanOrEqualTo<T>(value: T, minValue: T): T
{
    if (!isGreaterThanOrEqualTo(value, minValue))
    {
        throw new ArgumentError(`Value must be greater than or equal to ${minValue}.`);
    }

    return value;
}

/**
 * Returns original value if it is an integer number; otherwise throws a new Argument error.
 *
 * @export
 * @param {number} value - The value.
 * @returns - The original value if it is an integer number; otherwise throws a new ArgumentError.
 */
export function mustBeInteger(value: number)
{
    if (!isInteger(value))
    {
        throw new ArgumentError(`Value must be an integer.`);
    }

    return value;
}

/**
 * Returns original value if it is less than or equal to the specified limit; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {T} maxValue - The maximum value.
 * @returns {T} - The original value if it is less than or equal to the specified limit; otherwise throws a new ArgumentError.
 */
export function mustBeLessThanOrEqualTo<T>(value: T, maxValue: T): T
{
    if (!isLessThanOrEqualTo(value, maxValue))
    {
        throw new ArgumentError(`Value must be less than or equal to ${maxValue}.`);
    }

    return value;
}

/**
 * Returns original value if it is less than the specified limit; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {T} maxValue - The maximum value.
 * @returns {T} - The original value if it is less than the specified limit; otherwise throws a new ArgumentError.
 */
export function mustBeLessThan<T>(value: T, maxValue: T): T
{
    if (!isLessThan(value, maxValue))
    {
        throw new ArgumentError(`Value must be less than ${maxValue}.`);
    }

    return value;
}

/**
 * Returns original value if it equals null; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @returns {T} - The  original value if it equals null; otherwise throws a new ArgumentError.
 */
export function mustBeNull<T>(value: T): T
{
    if (!isNull(value))
    {
        throw new ArgumentError("Value must be null.");
    }

    return value;
}

/**
 * Returns original value if it equals null or whitespace; otherwise throws a new ArgumentError.
 *
 * @export
 * @param {T} value - The value.
 * @returns {T} - The  original value if it equals null or whitespace; otherwise throws a new ArgumentError.
 */
export function mustBeNullOrWhiteSpace(value: string): string
{
    if (!isNullOrWhiteSpace(value))
    {
        throw new ArgumentError("Value must be null or whitespace.");
    }

    return value;
}

/**
 * Returns original value if it does not belong to the specified set; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {...T[]} set - The set.
 * @returns {T} - The original value if it does not belong to the specified set; otherwise throws a new ArgumentError.
 */
export function mustBeOneOf<T>(value: T, ...set: T[]): T
{
    if (!isOneOf(value, ...set))
    {
        throw new ArgumentError(`Value must be one of [${set.join(", ")}].`);
    }

    return value;
}

/**
 * Returns original value if it is equal to the specified subtype; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {string} type - The type.
 * @returns {T} - The original value if it is equal to the specified subtype; otherwise throws a new ArgumentError.
 */
export function mustBeSubTypeOf<T>(value: T, type: any): T
{
    if (!isSubTypeOf(value, type))
    {
        throw new ArgumentError(`Value must be subtype of type ${type.name}.`);
    }

    return value;
}

/**
 * Returns original value if it is equal to the specified type; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {string} type - The type.
 * @returns {T} - The original value if it is equal to the specified type; otherwise throws a new ArgumentError.
 */
export function mustBeTypeOf<T>(value: T, type: string): T
{
    if (!isTypeOf(value, type))
    {
        throw new ArgumentError(`Value must be of type ${type}.`);
    }

    return value;
}

/**
 * Returns original value if it does not match the specified regular expression; otherwise throws a new ArgumentError.
 *
 * @export
 * @param {string} value - The value.
 * @param {RegExp} regex - The regular expression.
 * @returns - The original value if it does not match the specified regular expression; otherwise throws a new ArgumentError.
 */
export function mustMatch(value: string, regex: RegExp)
{
    if (!doesMatch(value, regex))
    {
        throw new ArgumentError(`Value must match ${regex}.`);
    }

    return value;
}
