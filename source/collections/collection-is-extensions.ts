import { cannotBeNull } from "../objects/object-cannot-extensions";
import { isEqualTo, isNull } from "../objects/object-is-extensions";

// #region Functions (8)

/**
 * Determines whether the specified collection contains any items corresponding to the selector function.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param func - The function.
 * @returns - True if the specified collection contains any items corresponding to the selector function; otherwise, false.
 */
export function contains<T>(value: Array<T> | null | undefined, func: ((value: T | null | undefined) => boolean) | null | undefined): boolean
{
    cannotBeNull(func);

    if (value !== null &&
        value !== undefined &&
        func !== null &&
        func !== undefined)
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
 * @param value - The value.
 * @returns - True if the specified collection contains duplicates; otherwise, false.
 */
export function containsDuplicates<T>(value: Array<T> | null | undefined): boolean
{
    const duplicates = new Set<T>();

    if (value !== null &&
        value !== undefined)
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
 * @param value - The value.
 * @returns - True if the specified collection contains a null value; otherwise, false.
 */
export function containsNull<T>(value: Array<T> | null | undefined): boolean
{
    if (value !== null &&
        value !== undefined)
    {
        for (const item of value)
        {
            if (isNull(item))
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
 * @param value - The value.
 * @returns - True if the specified collection contains only null values; otherwise, false.
 */
export function containsOnlyNull<T>(value: Array<T> | null | undefined): boolean
{
    if (value !== null &&
        value !== undefined)
    {
        if (!isNullOrEmptyArray(value))
        {
            for (const item of value)
            {
                if (!isNull(item))
                {
                    return false;
                }
            }

            return true;
        }
    }

    return false;
}

/**
 * Determines whether the specified collection is empty.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @returns - True if the specified collection is empty; otherwise, false.
 */
export function isEmptyArray<T>(value: Array<T> | null | undefined): boolean
{
    if (value === null ||
        value === undefined)
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
 * @param value1 - The value 1.
 * @param value2 - The value 2.
 * @param [ignoreOrder=false] - If set to true ignore order of the items.
 * @returns - True if the specified collection is equal to compared collection; otherwise, false.
 */
export function isEqualToArray<T>(value1: Array<T> | null | undefined, value2: Array<T> | null | undefined, ignoreOrder: boolean = false): boolean
{
    if ((value1 === null || value1 === undefined) &&
        (value2 === null || value2 === undefined))
    {
        return true;
    }
    else if (value1 !== null &&
        value1 !== undefined &&
        value2 !== null &&
        value2 !== undefined &&
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
 * @param value - The value.
 * @returns - True if the specified collection is null or empty; otherwise, false.
 */
export function isNullOrEmptyArray<T>(value: Array<T> | null | undefined): boolean
{
    if (value === null ||
        value === undefined)
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
 * @param value - The value.
 * @param set - The set.
 * @returns - True if the specified value belongs to the specified set; otherwise, false.
 */
export function isOneOfArrays<T>(value: T | null | undefined, set: Array<T> | null | undefined): boolean
{
    cannotBeNull(set);

    if (set !== null &&
        set !== undefined)
    {
        for (const item of set)
        {
            if (isEqualTo(item, value))
            {
                return true;
            }
        }
    }

    return false;
}

// #endregion
