import { is, isEqualTo, isOneOf, isSubTypeOf, isTypeOf } from "./object-is-extensions";

// #region Functions (6)

/**
 * Returns default value when the specified function returns true; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param {(value: T) => boolean} func - The function.
 * @param defaultValue - The default value.
 * @returns - The default value when the specified function returns true; otherwise returns the original value.
 */
export function whenIs<T>(value: T | null | undefined, func: ((value: T | null | undefined) => boolean) | null | undefined, defaultValue: T | null | undefined): T | null | undefined
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
 * Returns default value when the original value is equal to the compared value; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param value1 - The value 1.
 * @param value2 - The value 2.
 * @param defaultValue - The default value.
 * @returns - The default value when the original value is equal to the compared value; otherwise returns the original value.
 */
export function whenIsEqualTo<T>(value1: T | null | undefined, value2: T | null | undefined, defaultValue: T | null | undefined): T | null | undefined
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
 * Returns default value when the original value is null or undefined; otherwise returns the original value.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The default value when the original value is null or undefined; otherwise returns the original value.
 */
export function whenIsNull<T>(value: T | null | undefined, defaultValue: T | null | undefined): T | null | undefined
{
    if (value === null ||
        value === undefined)
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
 * @param value - The value.
 * @param set - The set.
 * @param defaultValue - The default value.
 * @returns - The default value when the original value does belong to the specified set; otherwise returns the original value.
 */
export function whenIsOneOf<T>(value: T | null | undefined, set: T[], defaultValue: T | null | undefined): T | null | undefined
{
    if (isOneOf(value, set))
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
 * @param value - The value.
 * @param type - The type.
 * @param defaultValue - The default value.
 * @returns - The default value when the original value is subtype of the specified type; otherwise returns the original value.
 */
export function whenIsSubTypeOf<T>(value: T | null | undefined, type: any, defaultValue: T | null | undefined): T | null | undefined
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
 * @param value - The value.
 * @param type - The type.
 * @param defaultValue - The default value.
 * @returns - The default value when the original value is of the specified type; otherwise returns the original value.
 */
export function whenIsTypeOf<T>(value: T | null | undefined, type: string | null | undefined, defaultValue: T | null | undefined): T | null | undefined
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

// #endregion
