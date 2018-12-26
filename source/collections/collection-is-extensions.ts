import { cannotBeNull } from "../objects/object-cannot-extensions";
import { isNull } from "../objects/object-is-extensions";

/**
 * Determines whether the specified collection contains any items corresponding to the selector function.
 *
 * @export
 * @template T - The value type.
 * @param {Array<T>} value - The value.
 * @param {(T) => boolean} func - The function.
 * @returns {boolean} - True if the specified collection contains any items corresponding to the selector function; otherwise, false.
 */
export function contains<T>(value: Array<T>, func: (T) => boolean): boolean
{
    cannotBeNull(func);

    if (!isNull(value))
    {
        for (const item of value)
        {
            if (func(item))
            {
                return true;
            }
        }
    }

    return false;
}

/**
 * Determines whether the specified collection contains duplicates.
 *
 * @export
 * @template T - The value type.
 * @param {Array<T>} value - The value.
 * @returns - True if the specified collection contains duplicates; otherwise, false.
 */
export function containsDuplicates<T>(value: Array<T>)
{
    const duplicates = new Set<T>();

    if (!isNull(value))
    {
        for (const item of value)
        {
            if (duplicates.has(item))
            {
                return true;
            }
            else
            {
                duplicates.add(item);
            }
        }
    }

    return false;
}

/**
 * Determines whether the specified collection contains a null value.
 *
 * @export
 * @template T - The value type.
 * @param {Array<T>} value - The value.
 * @returns {boolean} - True if the specified collection contains a null value; otherwise, false.
 */
export function containsNull<T>(value: Array<T>): boolean
{
    if (!isNull(value))
    {
        for (const item of value)
        {
            if (!item)
            {
                return true;
            }
        }
    }

    return false;
}

/**
 * Determines whether the specified collection contains only null values.
 *
 * @export
 * @template T - The value type.
 * @param {Array<T>} value - The value.
 * @returns {boolean} - True if the specified collection contains only null values; otherwise, false.
 */
export function containsOnlyNull<T>(value: Array<T>): boolean
{
    if (!isNullOrEmpty(value))
    {
        for (const item of value)
        {
            if (item != null)
            {
                return false;
            }
        }

        return true;
    }

    return false;
}

/**
 * Determines whether the specified collection is empty.
 *
 * @export
 * @template T - The value type.
 * @param {Array<T>} value - The value.
 * @returns {boolean} - True if the specified collection is empty; otherwise, false.
 */
export function isEmpty<T>(value: Array<T> | string): boolean
{
    if (isNull(value))
    {
        return false;
    }
    else
    {
        return value.length === 0;
    }
}

/**
 * Determines whether the specified collection is equal to compared collection.
 *
 * @export
 * @template T - The value type.
 * @param {Array <T>} value1 - The value 1.
 * @param {Array<T>} value2 - The value 2.
 * @param {boolean} [ignoreOrder=false] - If set to true ignore order of the items.
 * @returns {boolean} - True if the specified collection is equal to compared collection; otherwise, false.
 */
export function isEqualTo2<T>(value1: Array<T>, value2: Array<T>, ignoreOrder: boolean = false): boolean
{
    if (isNull(value1) &&
        isNull(value2))
    {
        return true;
    }
    else if (!isNull(value1) &&
        !isNull(value2) &&
        value1.length === value2.length)
    {
        if (ignoreOrder)
        {
            for (let i = 0; i < value1.length; i++)
            {
                if (value1.indexOf(value2[i]) === -1 ||
                    value2.indexOf(value1[i]) === -1)
                {
                    return false;
                }
            }
        }
        else
        {
            for (let i = 0; i < value1.length; i++)
            {
                if (value1[i] !== value2[i])
                {
                    return false;
                }
            }
        }

        return true;
    }
    else
    {
        return false;
    }
}

/**
 * Determines whether the specified collection is null or empty.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @returns {boolean} - True if the specified collection is null or empty; otherwise, false.
 */
export function isNullOrEmpty<T>(value: Array<T> | string): boolean
{
    if (isNull(value))
    {
        return true;
    }
    else
    {
        return value.length === 0;
    }
}

/**
 * Determines whether the specified value belongs to the specified set.
 *
 * @export
 * @template T - The value type.
 * @param {T} value - The value.
 * @param {Array<T>} set - The set.
 * @returns {boolean} - True if the specified value belongs to the specified set; otherwise, false.
 */
export function isOneOf2<T>(value: T, set: Array<T>): boolean
{
    cannotBeNull(set);

    return set.indexOf(value) > 0;
}
