import { ArgumentError } from "../argument-error";
import { isNull } from "../objects/object-is-extensions";
import { contains, containsDuplicates, containsNull, containsOnlyNull, isEmpty, isEqualTo2, isNullOrEmpty, isOneOf2 } from "./collection-is-extensions";

/**
 * Returns original value if the specified value is empty; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {Array<T>} value - The value.
 * @returns {Array<T>} - The original value if the specified value is empty; otherwise throws a new ArgumentError.
 */
export function mustBeEmpty<T>(value: Array<T> | string): Array<T> | string
{
    if (!isEmpty(value))
    {
        throw new ArgumentError("Value must be empty.");
    }

    return value;
}

/**
 * Returns original value if the specified value is equal to the compared value; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {Array<T>} value1 - The value 1.
 * @param {Array<T>} value2 - The value 2.
 * @param {boolean} [ignoreOrder=false] - If set to true; ignore item order.
 * @returns {Array<T>} - The original value if the specified value is equal to the compared value; otherwise throws a new ArgumentError.
 */
export function mustBeEqualTo2<T>(value1: Array<T>, value2: Array<T>, ignoreOrder: boolean = false): Array<T>
{
    if (!isEqualTo2(value1, value2, ignoreOrder))
    {
        if (isNull(value2))
        {
            throw new ArgumentError(`Value must be equal to ${value2}.`);
        }
        else
        {
            throw new ArgumentError(`Value must be equal to [${value2.join(", ")}].`);
        }
    }

    return value1;
}

/**
 * Returns original value if the specified value is null or empty; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {Array<T>} value - The value.
 * @returns {Array<T>} - The original value if the specified value is null or empty; otherwise throws a new ArgumentError.
 */
export function mustBeNullOrEmpty<T>(value: Array<T> | string): Array<T> | string
{
    if (!isNullOrEmpty(value))
    {
        throw new ArgumentError("Value must be null or empty.");
    }

    return value;
}

/**
 * Returns original value if the specified value does not belong to the specified set; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {Array<T>} set - The set.
 * @returns {T} - The original value if the specified value does not belong to the specified set; otherwise throws a new ArgumentError.
 */
export function mustBeOneOf2<T>(value: T, set: Array<T>): T
{
    if (!isOneOf2(value, set))
    {
        throw new ArgumentError(`Value must be one of [${set.join(", ")}].`);
    }

    return value;
}

/**
 * Returns original value if the specified value does not contain any items corresponding to the selector function; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {Array<T>} value - The value.
 * @param {(T) => boolean} func - The selector function.
 * @returns {Array<T>} - The original value if the specified value does not contain any items corresponding to the selector function; otherwise throws a new ArgumentError.
 */
export function mustContain<T>(value: Array<T>, func: (T) => boolean): Array<T>
{
    if (!contains(value, func))
    {
        throw new ArgumentError("Value must contain the specified expression.");
    }

    return value;
}

/**
 * Returns original value if the specified value does not contain duplicates; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {Array<T>} value - The value.
 * @returns {Array<T>} - The original value if the specified value does not contain duplicates; otherwise throws a new ArgumentError.
 */
export function mustContainDuplicates<T>(value: Array<T>): Array<T>
{
    if (!containsDuplicates(value))
    {
        throw new ArgumentError("Value must contain duplicates.");
    }

    return value;
}

/**
 * Returns original value if the specified value does not contain null values; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {Array<T>} value - The value.
 * @returns {Array<T>} - The original value if the specified value does not contain null values; otherwise throws a new ArgumentError.
 */
export function mustContainNull<T>(value: Array<T>): Array<T>
{
    if (!containsNull(value))
    {
        throw new ArgumentError("Value must contain null.");
    }

    return value;
}

/**
 * Returns original value if the specified value does not contain only null values; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param {Array<T>} value - The value.
 * @returns {Array<T>} - The original value if the specified value does not contain only null values; otherwise throws a new ArgumentError.
 */
export function mustContainOnlyNull<T>(value: Array<T>): Array<T>
{
    if (!containsOnlyNull(value))
    {
        throw new ArgumentError("Value must contain only null.");
    }

    return value;
}
