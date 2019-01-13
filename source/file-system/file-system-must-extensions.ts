import { ArgumentError } from "../argument-error";
import { doesDirectoryExist, doesFileExist, isAbsoluteDirectoryPath, isAbsoluteFilePath, isEmptyDirectory, isValidDirectoryPath, isValidFileName, isValidFilePath } from "./file-system-is-extensions";

// #region Functions (8)

/**
 * Returns the original value if the specified value is an absolute directory path; otherwise throws a new ArgumentError.
 *
 * @export
 * @param value - The value.
 * @returns - The original value if the specified value is an absolute directory path; otherwise throws a new ArgumentError.
 */
export function mustBeAbsoluteDirectoryPath(value: string | null | undefined): string | null | undefined
{
    if (!isAbsoluteDirectoryPath(value))
    {
        throw new ArgumentError("Value must be an absolute directory path.");
    }

    return value;
}

/**
 * Returns the original value if the specified value is an absolute file path; otherwise throws a new ArgumentError.
 *
 * @export
 * @param value - The value.
 * @returns - The original value if the specified value is an absolute file path; otherwise throws a new ArgumentError.
 */
export function mustBeAbsoluteFilePath(value: string | null | undefined): string | null | undefined
{
    if (!isAbsoluteFilePath(value))
    {
        throw new ArgumentError("Value must be an absolute file path.");
    }

    return value;
}

/**
 * Returns the original value if the specified value is an empty directory path; otherwise throws a new ArgumentError.
 *
 * @export
 * @param value - The value.
 * @returns - The original value if the specified value is an empty directory path; otherwise throws a new ArgumentError.
 */
export function mustBeEmptyDirectory(value: string | null | undefined): string | null | undefined
{
    if (!isEmptyDirectory(value))
    {
        throw new ArgumentError("Value must be an empty directory.");
    }

    return value;
}

/**
 * Returns the original value if the specified value is valid directory path; otherwise throws a new ArgumentError.
 *
 * @export
 * @param value - The value.
 * @returns - The original value if the specified value is a valid directory path; otherwise throws a new ArgumentError.
 */
export function mustBeValidDirectoryPath(value: string | null | undefined): string | null | undefined
{
    if (!isValidDirectoryPath(value))
    {
        throw new ArgumentError("Value must be a valid directory path.");
    }

    return value;
}

/**
* Returns the original value if the specified value is a valid file name; otherwise throws a new ArgumentError.
*
* @export
* @param value - The value.
* @returns - The original value if the specified value is a valid file name; otherwise throws a new ArgumentError.
*/
export function mustBeValidFileName(value: string | null | undefined): string | null | undefined
{
    if (!isValidFileName(value))
    {
        throw new ArgumentError("Value must be a valid file name.");
    }

    return value;
}

/**
* Returns the original value if the specified value is a valid file path; otherwise throws a new ArgumentError.
*
* @export
* @param value - The value.
* @returns - The original value if the specified value is a valid file path; otherwise throws a new ArgumentError.
*/
export function mustBeValidFilePath(value: string | null | undefined): string | null | undefined
{
    if (!isValidFilePath(value))
    {
        throw new ArgumentError("Value must be a valid file path.");
    }

    return value;
}

/**
 * Returns the original value if the specified directory does exist; otherwise throws a new ArgumentError.
 *
 * @export
 * @param value - The value.
 * @returns - The original value if the specified directory does exist; otherwise throws a new ArgumentError.
 */
export function mustDirectoryExist(value: string | null | undefined): string | null | undefined
{
    if (!doesDirectoryExist(value))
    {
        throw new ArgumentError("Directory must exist.");
    }

    return value;
}

/**
 * Returns the original value if the specified file does exist; otherwise throws a new ArgumentError.
 *
 * @export
 * @param value - The value.
 * @returns - The original value if the specified file does exist; otherwise throws a new ArgumentError.
 */
export function mustFileExist(value: string | null | undefined): string | null | undefined
{
    if (!doesFileExist(value))
    {
        throw new ArgumentError("File must exist.");
    }

    return value;
}

// #endregion
