import { ArgumentError } from "../argument-error";
import { is, isEqualTo, isOneOf, isSubTypeOf, isTypeOf } from "./object-is-extensions";

// #region Functions (6)

/**
 * Returns the original value if the specified function returns false; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param func - The function.
 * @returns - The original value if the specified function returns false; otherwise throws a new ArgumentError.
 */
export function cannotBe<T>(value: T | null | undefined, func: ((value: T | null | undefined) => boolean) | null | undefined): T | null | undefined
{
    if (is(value, func))
    {
        throw new ArgumentError("Expression cannot be true.");
    }

    return value;
}

/**
 * Returns the original value if it is not equal to the compared value; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param value1 - The value 1.
 * @param value2 - The value 2.
 * @returns - The original value if it is not equal to the compared value; otherwise throws a new ArgumentError.
 */
export function cannotBeEqualTo<T>(value1: T | null | undefined, value2: T | null | undefined): T | null | undefined
{
    if (isEqualTo(value1, value2))
    {
        throw new ArgumentError(`Value cannot be equal to ${value2}.`);
    }

    return value1;
}

/**
 * Returns the original value if it does not equal null or undefined; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @returns - The  original value if it does not equal null or undefined; otherwise throws a new ArgumentError.
 */
export function cannotBeNull<T>(value: T | null | undefined): T | null | undefined
{
    if (value === null ||
        value === undefined)
    {
        throw new ArgumentError("Value cannot be null.");
    }

    return value;
}

/**
 * Returns the original value if it does not belong to the specified set; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param set - The set.
 * @returns - The original value if it does not belong to the specified set; otherwise throws a new ArgumentError.
 */
export function cannotBeOneOf<T>(value: T | null | undefined, set: T[] | null | undefined): T | null | undefined
{
    if (isOneOf(value, set))
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
 * Returns the original value if it is not equal to the specified subtype; otherwise throws a new ArgumentError.
 *
 * @export
 * @template T - The value type.
 * @param value - The value.
 * @param type - The type.
 * @returns - The original value if it is not equal to the specified subtype; otherwise throws a new ArgumentError.
 */
export function cannotBeSubTypeOf<T>(value: T | null | undefined, type: any): T | null | undefined
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
 * @param value - The value.
 * @param type - The type.
 * @returns - The original value if it is not equal to the specified type; otherwise throws a new ArgumentError.
 */
export function cannotBeTypeOf<T>(value: T | null | undefined, type: string | null | undefined): T | null | undefined
{
    if (isTypeOf(value, type))
    {
        throw new ArgumentError(`Value cannot be of type ${type}.`);
    }

    return value;
}

// #endregion
