import { contains, containsDuplicates, containsNull, containsOnlyNull, isEmpty, isEqualTo2, isNullOrEmpty, isOneOf2 } from "./collection-is-extensions";

/**
 * Returns the original value if the specified value does not contain any items corresponding to the selector function; otherwise throws a new ArgumentException; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param {Array<T>} value - The value.
 * @param {(T) => boolean} func - The function.
 * @param {Array<T>} defaultValue - The default value.
 * @returns {boolean} - The original value if the specified value does not contain any items corresponding to the selector function; otherwise returns the original value.
 */
export function whenContainsNot<T>(value: Array<T>, func: (T) => boolean, defaultValue: Array<T>): Array<T>
{
    if (!contains(value, func))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns the original value if the specified value does not contain duplicates; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param {Array<T>} value - The value.
 * @param {Array<T>} defaultValue - The default value.
 * @returns {Array<T>} - The original value if the specified value does not contain duplicates; otherwise returns the original value.
 */
export function whenContainsNotDuplicates<T>(value: Array<T>, defaultValue: Array<T>): Array<T>
{
    if (!containsDuplicates(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns the original value if the specified value does not contain null values; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param {Array<T>} value - The value.
 * @param {Array<T>} defaultValue - The default value.
 * @returns {Array<T>} - The original value if the specified value does not contain null values; otherwise returns the original value.
 */
export function whenContainsNotNull<T>(value: Array<T>, defaultValue: Array<T>): Array<T>
{
    if (!containsNull(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns the original value if the specified value does not contain only null values; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param {Array<T>} value - The value.
 * @param {Array<T>} defaultValue - The default value.
 * @returns {Array<T>} - The original value if the specified value does not contain only null values; otherwise returns the original value.
 */
export function whenContainsNotOnlyNull<T>(value: Array<T>, defaultValue: Array<T>): Array<T>
{
    if (!containsOnlyNull(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns the original value if the specified value is not empty; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param {*} value - The value.
 * @param {Array<T>} defaultValue - The default value.
 * @returns {Array<T>} - The original value if the specified value is not empty; otherwise returns the original value.
 */
export function whenIsNotEmpty<T>(value: Array<T> | string, defaultValue: Array<T> | string): Array<T> | string
{
    if (!isEmpty(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns the original value if the specified value is not equal to the compared value; otherwise returns the original value.
 *
 * @export
 * @template T
 * @param {Array<T>} value1 - The value type.
 * @param {Array<T>} value2 - The value 1.
 * @param {boolean} [ignoreOrder=true] - The value 2.
 * @param {Array<T>} defaultValue - The default value.
 * @returns {Array<T>} - The original value if the specified value is not equal to the compared value; otherwise returns the original value.
 */
export function whenIsNotEqualTo2<T>(value1: Array<T>, value2: Array<T>, ignoreOrder: boolean = true, defaultValue: Array<T>): Array<T>
{
    if (!isEqualTo2(value1, value2, ignoreOrder))
    {
        return defaultValue;
    }
    else
    {
        return value1;
    }
}

/**
 * Returns the original value if the specified value is not null or empty; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param {Array<T>} value - The value.
 * @param {Array<T>} defaultValue - The default value.
 * @returns {Array<T>} - The original value if the specified value is not null or empty; otherwise returns the original value.
 */
export function whenIsNotNullOrEmpty<T>(value: Array<T> | string, defaultValue: Array<T> | string): Array<T> | string
{
    if (!isNullOrEmpty(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns the original value if the specified value does not belong to the specified set; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {Array<T>} set - The set.
 * @param {T} defaultValue - The default value.
 * @returns {T} - The original value if the specified value does not belong to the specified set; otherwise returns the original value.
 */
export function whenIsNotOneOf2<T>(value: T, set: Array<T>, defaultValue: T): T
{
    if (!isOneOf2(value, set))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}
