import { ArgumentError } from "../argument-error";
import { cannotBeNull } from "../objects/object-cannot-extensions";
import { contains, containsDuplicates, containsNull, containsOnlyNull, isEmptyArray, isEqualToArray, isOneOfArrays } from "./collection-is-extensions";

// #region Functions (8)

/**
 * Returns the original value if the specified value is not empty; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @returns - The original value if the specified value is not empty; otherwise throws a new ArgumentError.
 */
export function cannotBeEmptyArray<T>(value: Array<T> | null | undefined): Array<T> | null | undefined
{
    if (isEmptyArray(value))
    {
        throw new ArgumentError("Value cannot be empty.");
    }

    return value;
}

/**
 * Returns the original value if the specified value is not equal to the compared value; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param value1 - The value 1.
 * @param value2 - The value 2.
 * @param [ignoreOrder=false] - If set to true; ignore item order.
 * @returns - The original value if the specified value is not equal to the compared value; otherwise throws a new ArgumentError.
 */
export function cannotBeEqualToArray<T>(value1: Array<T> | null | undefined, value2: Array<T> | null | undefined, ignoreOrder: boolean = false): Array<T> | null | undefined
{
    if (isEqualToArray(value1, value2, ignoreOrder))
    {
        if (value2 === null ||
            value2 === undefined)
        {
            throw new ArgumentError(`Value cannot be equal to ${value2}.`);
        }
        else
        {
            throw new ArgumentError(`Value cannot be equal to [${value2.join(", ")}].`);
        }
    }

    return value1;
}

/**
 * Returns the original value if the specified value is not null or empty; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @returns - The original value if the specified value is not null or empty; otherwise throws a new ArgumentError.
 */
export function cannotBeNullOrEmptyArray<T>(value: Array<T> | null | undefined): Array<T> | null | undefined
{
    cannotBeNull(value);
    cannotBeEmptyArray(value);

    return value;
}

/**
 * Returns the original value if the specified value does not belong to the specified set; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param set - The set.
 * @returns - The original value if the specified value does not belong to the specified set; otherwise throws a new ArgumentError.
 */
export function cannotBeOneOfArray<T>(value: T | null | undefined, set: Array<T> | null | undefined): T | null | undefined
{
    if (isOneOfArrays(value, set))
    {
        if (set !== null &&
            set !== undefined)
        {
            throw new ArgumentError(`Value cannot be one of [${set.join(", ")}].`);
        }
    }

    return value;
}

/**
 * Returns the original value if the specified value does not contain any items corresponding to the selector function; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param func - The selector function.
 * @returns - The original value if the specified value does not contain any items corresponding to the selector function; otherwise throws a new ArgumentError.
 */
export function cannotContain<T>(value: Array<T> | null | undefined, func: ((value: T | null | undefined) => boolean) | null | undefined): Array<T> | null | undefined
{
    if (contains(value, func))
    {
        throw new ArgumentError("Value cannot contain the specified expression.");
    }

    return value;
}

/**
 * Returns the original value if the specified value does not contain duplicates; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @returns - The original value if the specified value does not contain duplicates; otherwise throws a new ArgumentError.
 */
export function cannotContainDuplicates<T>(value: Array<T> | null | undefined): Array<T> | null | undefined
{
    if (containsDuplicates(value))
    {
        throw new ArgumentError("Value cannot contain duplicates.");
    }

    return value;
}

/**
 * Returns the original value if the specified value does not contain null values; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @returns - The original value if the specified value does not contain null values; otherwise throws a new ArgumentError.
 */
export function cannotContainNull<T>(value: Array<T> | null | undefined): Array<T> | null | undefined
{
    if (containsNull(value))
    {
        throw new ArgumentError("Value cannot contain null.");
    }

    return value;
}

/**
 * Returns the original value if the specified value does not contain only null values; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @returns - The original value if the specified value does not contain only null values; otherwise throws a new ArgumentError.
 */
export function cannotContainOnlyNull<T>(value: Array<T> | null | undefined): Array<T> | null | undefined
{
    if (containsOnlyNull(value))
    {
        throw new ArgumentError("Value cannot contain only null.");
    }

    return value;
}

// #endregion
