import { doesDirectoryExist, doesFileExist, isAbsoluteDirectoryPath, isAbsoluteFilePath, isEmptyDirectory, isValidDirectoryPath, isValidFileName, isValidFilePath } from "./file-system-is-extensions";

// #region Functions (8)

/**
 * Returns default value when the specified directory does exist; otherwise returns the original value.
 *
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The default value when the directory does exist; otherwise returns the original value.
 */
export function whenDoesDirectoryExist(value: string | null | undefined, defaultValue: string | null | undefined): string | null | undefined
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
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The default value when the file does exist; otherwise returns the original value.
 */
export function whenDoesFileExist(value: string | null | undefined, defaultValue: string | null | undefined): string | null | undefined
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
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The default value when the directory path is an absolute directory path; otherwise returns the original value.
 */
export function whenIsAbsoluteDirectoryPath(value: string | null | undefined, defaultValue: string | null | undefined): string | null | undefined
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
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The default value when the file path is an absolute file path; otherwise returns the original value.
 */
export function whenIsAbsoluteFilePath(value: string | null | undefined, defaultValue: string | null | undefined): string | null | undefined
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
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The default value when the directory path is empty; otherwise returns the original value.
 */
export function whenIsEmptyDirectory(value: string | null | undefined, defaultValue: string | null | undefined): string | null | undefined
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
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The default value when the original value is a valid directory path; otherwise returns the original value.
 */
export function whenIsValidDirectoryPath(value: string | null | undefined, defaultValue: string | null | undefined): string | null | undefined
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
* @param value - The value.
* @returns - The default value when the specified file name is valid; otherwise returns the original value.
*/
export function whenIsValidFileName(value: string | null | undefined, defaultValue: string | null | undefined): string | null | undefined
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
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The default value when the original value is a valid file path; otherwise returns the original value.
 */
export function whenIsValidFilePath(value: string | null | undefined, defaultValue: string): string | null | undefined
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

// #endregion
