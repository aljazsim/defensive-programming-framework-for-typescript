import { doesDirectoryExist, doesFileExist, isAbsoluteDirectoryPath, isAbsoluteFilePath, isEmptyDirectory, isValidDirectoryPath, isValidFileName, isValidFilePath } from "./file-system-is-extensions";

/**
 * Returns default value when the specified directory does exist; otherwise returns the original value.
 *
 * @param {string} value - The value.
 * @param {string} defaultValue - The default value.
 * @returns {string} - The default value when the directory does exist; otherwise returns the original value.
 */
export function whenDoesDirectoryExist(value, defaultValue: string): string
{
    if (doesDirectoryExist(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the specified file does exist; otherwise returns the original value.
 *
 * @param {string} value - The value.
 * @param {string} defaultValue - The default value.
 * @returns {string} - The default value when the file does exist; otherwise returns the original value.
 */
export function whenDoesFileExist(value, defaultValue: string): string
{
    if (doesFileExist(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the specified directory path is an absolute directory path; otherwise returns the original value.
 *
 * @param {string} value - The value.
 * @param {string} defaultValue - The default value.
 * @returns {string} - The default value when the directory path is an absolute directory path; otherwise returns the original value.
 */
export function whenIsAbsoluteDirectoryPath(value, defaultValue: string): string
{
    if (isAbsoluteDirectoryPath(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the specified file path is an absolute file path; otherwise returns the original value.
 *
 * @param {string} value - The value.
 * @param {string} defaultValue - The default value.
 * @returns {string} - The default value when the file path is an absolute file path; otherwise returns the original value.
 */
export function whenIsAbsoluteFilePath(value, defaultValue: string): string
{
    if (isAbsoluteFilePath(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the specified directory path is empty; otherwise returns the original value.
 *
 * @param {string} value - The value.
 * @param {string} defaultValue - The default value.
 * @returns {string} - The default value when the directory path is empty; otherwise returns the original value.
 */
export function whenIsEmptyDirectory(value, defaultValue: string): string
{
    if (isEmptyDirectory(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the original value is a valid directory path; otherwise returns the original value.
 *
 * @param {string} value - The value.
 * @param {string} defaultValue - The default value.
 * @returns {string} - The default value when the original value is a valid directory path; otherwise returns the original value.
 */
export function whenIsValidDirectoryPath(value, defaultValue: string): string
{
    if (isValidDirectoryPath(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
* Returns default value when the specified file name is valid; otherwise returns the original value.
*
* @export
* @param {string} value - The value.
* @returns {string} - The default value when the specified file name is valid; otherwise returns the original value.
*/
export function whenIsValidFileName(value: string, defaultValue: string): string
{
    if (isValidFileName(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the original value is a valid file path; otherwise returns the original value.
 *
 * @param {string} value - The value.
 * @param {string} defaultValue - The default value.
 * @returns {string} - The default value when the original value is a valid file path; otherwise returns the original value.
 */
export function whenIsValidFilePath(value, defaultValue: string): string
{
    if (isValidFilePath(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}
