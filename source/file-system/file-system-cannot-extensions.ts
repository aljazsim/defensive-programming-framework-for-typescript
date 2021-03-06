import { ArgumentError } from "../argument-error";
import { doesDirectoryExist, doesFileExist, isAbsoluteDirectoryPath, isAbsoluteFilePath, isEmptyDirectory, isValidDirectoryPath, isValidFileName, isValidFilePath } from "./file-system-is-extensions";

// #region Functions (8)

/**
 * Returns the original value if the specified value is not an absolute directory path; otherwise throws a new ArgumentError.
 *
 * @export
 * @param value - The value.
 * @returns - The original value if the specified value is not an absolute directory path; otherwise throws a new ArgumentError.
 */
export function cannotBeAbsoluteDirectoryPath(value: string | null | undefined): string | null | undefined
{
    if (isAbsoluteDirectoryPath(value))
    {
        throw new ArgumentError("Value cannot be an absolute directory path.");
    }

    return value;
}

/**
 * Returns the original value if the specified value is not an absolute file path; otherwise throws a new ArgumentError.
 *
 * @export
 * @param value - The value.
 * @returns - The original value if the specified value is not an absolute file path; otherwise throws a new ArgumentError.
 */
export function cannotBeAbsoluteFilePath(value: string | null | undefined): string | null | undefined
{
    if (isAbsoluteFilePath(value))
    {
        throw new ArgumentError("Value cannot be an absolute file path.");
    }

    return value;
}

/**
 * Returns the original value if the specified value is not an empty directory path; otherwise throws a new ArgumentError.
 *
 * @export
 * @param value - The value.
 * @returns - The original value if the specified value is not an empty directory path; otherwise throws a new ArgumentError.
 */
export function cannotBeEmptyDirectory(value: string | null | undefined): string | null | undefined
{
    if (isEmptyDirectory(value))
    {
        throw new ArgumentError("Value cannot be an empty directory.");
    }

    return value;
}

/**
 * Returns the original value if the specified value is not a valid directory path; otherwise throws a new ArgumentError.
 *
 * @export
 * @param value - The value.
 * @returns - The original value if the specified value is not a valid directory path; otherwise throws a new ArgumentError.
 */
export function cannotBeValidDirectoryPath(value: string | null | undefined): string | null | undefined
{
    if (isValidDirectoryPath(value))
    {
        throw new ArgumentError("Value cannot be a valid directory path.");
    }

    return value;
}

/**
* Returns the original value if the specified value is not a valid file name; otherwise throws a new ArgumentError.
*
* @export
* @param value - The value.
* @returns - The original value if the specified value is not a valid file name; otherwise throws a new ArgumentError.
*/
export function cannotBeValidFileName(value: string | null | undefined): string | null | undefined
{
    if (isValidFileName(value))
    {
        throw new ArgumentError("Value cannot be a valid file name.");
    }

    return value;
}

/**
* Returns the original value if the specified value is not a valid file path; otherwise throws a new ArgumentError.
*
* @export
* @param value - The value.
* @returns - The original value if the specified value is not a valid file path; otherwise throws a new ArgumentError.
*/
export function cannotBeValidFilePath(value: string | null | undefined): string | null | undefined
{
    if (isValidFilePath(value))
    {
        throw new ArgumentError("Value cannot be a valid file path.");
    }

    return value;
}

/**
 * Returns the original value if the specified directory does not exist; otherwise throws a new ArgumentError.
 *
 * @export
 * @param value - The value.
 * @returns - The original value if the specified directory does not exist; otherwise throws a new ArgumentError.
 */
export function cannotDirectoryExist(value: string | null | undefined): string | null | undefined
{
    if (doesDirectoryExist(value))
    {
        throw new ArgumentError("Directory cannot exist.");
    }

    return value;
}

/**
 * Returns the original value if the specified file does not exist; otherwise throws a new ArgumentError.
 *
 * @export
 * @param value - The value.
 * @returns - The original value if the specified file does not exist; otherwise throws a new ArgumentError.
 */
export function cannotFileExist(value: string | null | undefined): string | null | undefined
{
    if (doesFileExist(value))
    {
        throw new ArgumentError("File cannot exist.");
    }

    return value;
}

// #endregion
