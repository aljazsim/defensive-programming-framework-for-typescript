import { ArgumentError } from "../argument-error";
import { isEmpty } from "../collections/collection-is-extensions";
import { doesMatch, is, isBetween, isEqualTo, isGreaterThan, isGreaterThanOrEqualTo, isInteger, isLessThan, isLessThanOrEqualTo, isNull, isNullOrWhiteSpace, isOneOf, isSubTypeOf, isTypeOf } from "./object-is-extensions";

/**
 * Returns the original value if the specified function returns false; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {(T) => boolean} func - The function.
 * @returns {T} - The original value if the specified function returns false; otherwise throws a new ArgumentError.
 */
export function cannotBe<T>(value: T, func: (value: T) => boolean): T
{
    if (is(value, func))
    {
        throw new ArgumentError("Expression cannot be true.");
    }

    return value;
}

/**
 * Returns the original value if it is not between the specified limits; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {(number | string)} value - The value.
 * @param {(number | string)} minValue -The minimum value type.
 * @param {(number | string)} maxValue - The maximum value type.
 * @param {boolean} [inclusive=true] - If set to true include limits in the range.
 * @returns {(number | string)} - The  original value if it is not between the specified limits; otherwise throws a new ArgumentError.
 */
export function cannotBeBetween(value: number | string, minValue: number | string, maxValue: number | string, inclusive: boolean = true): number | string
{
    if (isBetween(value, minValue, maxValue, inclusive))
    {
        if (inclusive)
        {
            throw new ArgumentError(`Value cannot be between ${minValue} and ${maxValue} inclusive.`);
        }
        else
        {
            throw new ArgumentError(`Value cannot be between ${minValue} and ${maxValue}.`);
        }
    }

    return value;
}

/**
 * Returns the original value if it is not equal to the compared value; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {T} value1 - The value 1.
 * @param {T} value2 - The value 2.
 * @returns {T} - The original value if it is not equal to the compared value; otherwise throws a new ArgumentError.
 */
export function cannotBeEqualTo<T>(value1: T, value2: T): T
{
    if (isEqualTo(value1, value2))
    {
        throw new ArgumentError(`Value cannot be equal to ${value2}.`);
    }

    return value1;
}

/**
 * Returns the original value if it is not greater than the specified limit; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {T} minValue - The minimum value.
 * @returns {T} - The original value if it is not greater than the specified limit; otherwise throws a new ArgumentError.
 */
export function cannotBeGreaterThan<T>(value: T, minValue: T): T
{
    if (isGreaterThan(value, minValue))
    {
        throw new ArgumentError(`Value cannot be greater than ${minValue}.`);
    }

    return value;
}

/**
 * Returns the original value if it is not greater than or equal to the specified limit; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {T} minValue - The minimum value.
 * @returns {T} - The original value if it is not greater than or equal to the specified limit; otherwise throws a new ArgumentError.
 */
export function cannotBeGreaterThanOrEqualTo<T>(value: T, minValue: T): T
{
    if (isGreaterThanOrEqualTo(value, minValue))
    {
        throw new ArgumentError(`Value cannot be greater than or equal to ${minValue}.`);
    }

    return value;
}

/**
 * Returns the original value if it is not an integer number; otherwise throws a new Argument error.
 *
 * @export
 * @param {number} value - The value.
 * @returns - The original value if it is not an integer number; otherwise throws a new ArgumentError.
 */
export function cannotBeInteger(value: number)
{
    if (isInteger(value))
    {
        throw new ArgumentError(`Value cannot be an integer.`);
    }

    return value;
}

/**
 * Returns the original value if it is not less than the specified limit; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {T} maxValue - The maximum value.
 * @returns {T} - The original value if it is not less than the specified limit; otherwise throws a new ArgumentError.
 */
export function cannotBeLessThan<T>(value: T, maxValue: T): T
{
    if (isLessThan(value, maxValue))
    {
        throw new ArgumentError(`Value cannot be less than ${maxValue}.`);
    }

    return value;
}

/**
 * Returns the original value if it is not less than or equal to the specified limit; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {T} maxValue - The maximum value.
 * @returns {T} - The original value if it is not less than or equal to the specified limit; otherwise throws a new ArgumentError.
 */
export function cannotBeLessThanOrEqualTo<T>(value: T, maxValue: T): T
{
    if (isLessThanOrEqualTo(value, maxValue))
    {
        throw new ArgumentError(`Value cannot be less than or equal to ${maxValue}.`);
    }

    return value;
}

/**
 * Returns the original value if it does not equal null or undefined; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @returns {T} - The  original value if it does not equal null or undefined; otherwise throws a new ArgumentError.
 */
export function cannotBeNull<T>(value: T): T
{
    if (isNull(value))
    {
        throw new ArgumentError("Value cannot be null.");
    }

    return value;
}

/**
 * Returns the original value if it does not equal null or whitespace; otherwise throws a new ArgumentError.
 *
 * @export
 * @param {T} value - The value.
 * @returns {T} - The  original value if it does not equal null or whitespace; otherwise throws a new ArgumentError.
 */
export function cannotBeNullOrWhiteSpace(value: string): string
{
    if (isNull(value))
    {
        throw new ArgumentError("Value cannot be null.");
    }
    else if (isEmpty(value))
    {
        throw new ArgumentError("Value cannot be empty.");
    }
    else if (isNullOrWhiteSpace(value))
    {
        throw new ArgumentError("Value cannot be white space.");
    }

    return value;
}

/**
 * Returns the original value if it does not belong to the specified set; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {...T[]} set - The set.
 * @returns {T} - The original value if it does not belong to the specified set; otherwise throws a new ArgumentError.
 */
export function cannotBeOneOf<T>(value: T, ...set: T[]): T
{
    if (isOneOf(value, ...set))
    {
        throw new ArgumentError(`Value cannot be one of [${set.join(", ")}].`);
    }

    return value;
}

/**
 * Returns the original value if it is not equal to the specified subtype; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {string} type - The type.
 * @returns {T} - The original value if it is not equal to the specified subtype; otherwise throws a new ArgumentError.
 */
export function cannotBeSubTypeOf<T>(value: T, type: any): T
{
    if (isSubTypeOf(value, type))
    {
        throw new ArgumentError(`Value cannot be subtype of type ${type.name}.`);
    }

    return value;
}

/**
 * Returns the original value if it is not equal to the specified type; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {string} type - The type.
 * @returns {T} - The original value if it is not equal to the specified type; otherwise throws a new ArgumentError.
 */
export function cannotBeTypeOf<T>(value: T, type: string): T
{
    if (isTypeOf(value, type))
    {
        throw new ArgumentError(`Value cannot be of type ${type}.`);
    }

    return value;
}

/**
 * Returns the original value if it does not match the specified regular expression; otherwise throws a new ArgumentError.
 *
 * @export
 * @param {string} value - The value.
 * @param {RegExp} regex - The regular expression.
 * @returns - The original value if it does not match the specified regular expression; otherwise throws a new ArgumentError.
 */
export function cannotMatch(value: string, regex: RegExp)
{
    if (doesMatch(value, regex))
    {
        throw new ArgumentError(`Value cannot match ${regex}.`);
    }

    return value;
}
