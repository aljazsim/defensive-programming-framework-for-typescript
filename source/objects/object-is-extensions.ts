import { cannotBeNull } from "./object-cannot-extensions";

// #region Functions (6)

/**
 * Determines whether the specified function returns true.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param {(value: T) => boolean} func - The function.
 * @returns - True if the specified function returns true; otherwise, false.
 */
export function is<T>(value: T | null | undefined, func: ((value: T | null | undefined) => boolean) | null | undefined): boolean
{
    cannotBeNull(func);

    if (func !== null &&
        func !== undefined)
    {
        return func(value);
    }
    else
    {
        return false;
    }
}

/**
 * Determines whether the specified value is equal to to the compared value.
 *
 * @export
 * @template T - The value type.
 * @param value1 - The value 1.
 * @param value2 - The value 2.
 * @returns - True if the specified value is equal to to the compared value; otherwise, false.
 */
export function isEqualTo<T>(value1: T | null | undefined, value2: T | null | undefined): boolean
{
    if (value1 === null &&
        value2 === undefined)
    {
        return true;
    }
    else if (value1 === undefined &&
        value2 === null)
    {
        return true;
    }
    else
    {
        return value1 === value2;
    }
}

/**
 * Determines whether the specified value is null or undefined.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @returns - True if the specified value is null or undefined; otherwise, false.
 */
export function isNull<T>(value: T | null | undefined): boolean
{
    return value === null || value === undefined;
}

/**
 * Determines whether the specified value is one of the specified set.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param set - The set.
 * @returns - True if the specified value is one of the specified set; otherwise, false.
 */
export function isOneOf<T>(value: T | null | undefined, set: T[] | null | undefined): boolean
{
    cannotBeNull(set);

    if (set !== null &&
        set !== undefined)
    {
        for (const item of set)
        {
            if (value === item)
            {
                return true;
            }
        }
    }

    return false;
}

/**
 * Determines whether the specified value is instance of of the specified type.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param type - The type.
 * @returns - True if the specified value is instance of the specified type; otherwise, false.
 */
export function isInstanceOf<T>(value: T | null | undefined, type: any): boolean
{
    cannotBeNull(type);

    return value instanceof type;
}

/**
 * Determines whether the specified value equals the specified type.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param type - The type.
 * @returns - True if the specified value is type of the specified type; otherwise, false.
 */
export function isTypeOf<T>(value: T | null | undefined, type: string | null | undefined): boolean
{
    cannotBeNull(type);

    return typeof value === type;
}

// #endregion
