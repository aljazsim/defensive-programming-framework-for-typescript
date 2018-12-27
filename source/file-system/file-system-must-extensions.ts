import { ArgumentError } from "../argument-error";
import { doesDirectoryExist, doesFileExist, isAbsoluteDirectoryPath, isAbsoluteFilePath, isEmptyDirectory, isValidDirectoryPath, isValidFilePath } from "./file-system-is-extensions";

/**
 * Returns original value if the specified value is an absolute directory path; otherwise throws a new ArgumentError.
 *
 * @export
 * @param {string} value - The value.
 * @returns {string} - The original value if the specified value is an absolute directory path; otherwise throws a new ArgumentError.
 */
export function mustBeAbsoluteDirectoryPath(value: string): string
{
    if (!isAbsoluteDirectoryPath(value))
    {
        throw new ArgumentError("Value must be an absolute directory path.");
    }

    return value;
}

/**
 * Returns original value if the specified value is an absolute file path; otherwise throws a new ArgumentError.
 *
 * @export
 * @param {string} value - The value.
 * @returns {string} - The original value if the specified value is an absolute file path; otherwise throws a new ArgumentError.
 */
export function mustBeAbsoluteFilePath(value: string): string
{
    if (!isAbsoluteFilePath(value))
    {
        throw new ArgumentError("Value must be an absolute file path.");
    }

    return value;
}

/**
 * Returns original value if the specified value is an empty directory path; otherwise throws a new ArgumentError.
 *
 * @export
 * @param {string} value - The value.
 * @returns {string} - The original value if the specified value is an empty directory path; otherwise throws a new ArgumentError.
 */
export function mustBeEmptyDirectory(value: string): string
{
    if (!isEmptyDirectory(value))
    {
        throw new ArgumentError("Value must be an empty directory.");
    }

    return value;
}

/**
 * Returns original value if the specified value is valid directory path; otherwise throws a new ArgumentError.
 *
 * @export
 * @param {string} value - The value.
 * @returns {string} - The original value if the specified value is a valid directory path; otherwise throws a new ArgumentError.
 */
export function mustBeValidDirectoryPath(value: string): string
{
    if (!isValidDirectoryPath(value))
    {
        throw new ArgumentError("Value must be a valid directory path.");
    }

    return value;
}

/**
* Returns original value if the specified value is a valid file path; otherwise throws a new ArgumentError.
*
* @export
* @param {string} value - The value.
* @returns {string} - The original value if the specified value is a valid file path; otherwise throws a new ArgumentError.
*/
export function mustBeValidFilePath(value: string): string
{
    if (!isValidFilePath(value))
    {
        throw new ArgumentError("Value must be a valid file path.");
    }

    return value;
}

/**
 * Returns original value if the specified directory does exist; otherwise throws a new ArgumentError.
 *
 * @export
 * @param {string} value - The value.
 * @returns {string} - The original value if the specified directory does exist; otherwise throws a new ArgumentError.
 */
export function mustDirectoryExist(value: string): string
{
    if (!doesDirectoryExist(value))
    {
        throw new ArgumentError("Directory must exist.");
    }

    return value;
}

/**
 * Returns original value if the specified file does exist; otherwise throws a new ArgumentError.
 *
 * @export
 * @param {string} value - The value.
 * @returns {string} - The original value if the specified file does exist; otherwise throws a new ArgumentError.
 */
export function mustFileExist(value: string): string
{
    if (!doesFileExist(value))
    {
        throw new ArgumentError("File must exist.");
    }

    return value;
}
