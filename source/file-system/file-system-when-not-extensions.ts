import { doesDirectoryExist, doesFileExist, isAbsoluteDirectoryPath, isAbsoluteFilePath, isEmptyDirectory, isValidDirectoryPath, isValidFileName, isValidFilePath } from "./file-system-is-extensions";

// #region Functions (8)

/**
 * Returns default value when the specified directory does not exist; otherwise returns the original value.
 *
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The default value when the directory does not exist; otherwise returns the original value.
 */
export function whenDoesNotDirectoryExist(value: string | null | undefined, defaultValue: string): string | null | undefined
{
    if (!doesDirectoryExist(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the specified file does not exist; otherwise returns the original value.
 *
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The default value when the file does not exist; otherwise returns the original value.
 */
export function whenDoesNotFileExist(value: string | null | undefined, defaultValue: string | null | undefined): string | null | undefined
{
    if (!doesFileExist(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the specified directory path is not an absolute directory path; otherwise returns the original value.
 *
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The default value when the directory path is not an absolute directory path; otherwise returns the original value.
 */
export function whenIsNotAbsoluteDirectoryPath(value: string | null | undefined, defaultValue: string | null | undefined): string | null | undefined
{
    if (!isAbsoluteDirectoryPath(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the specified file path is not an absolute file path; otherwise returns the original value.
 *
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The default value when the file path is not an absolute file path; otherwise returns the original value.
 */
export function whenIsNotAbsoluteFilePath(value: string | null | undefined, defaultValue: string): string | null | undefined
{
    if (!isAbsoluteFilePath(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the specified directory path is not empty; otherwise returns the original value.
 *
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The default value when the directory path is not empty; otherwise returns the original value.
 */
export function whenIsNotEmptyDirectory(value: string | null | undefined, defaultValue: string | null | undefined): string | null | undefined
{
    if (!isEmptyDirectory(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the original value is not a valid directory path; otherwise returns the original value.
 *
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The default value when the original value is not a valid directory path; otherwise returns the original value.
 */
export function whenIsNotValidDirectoryPath(value: string | null | undefined, defaultValue: string | null | undefined): string | null | undefined
{
    if (!isValidDirectoryPath(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
* Returns default value when the specified file name is mpt valid; otherwise returns the original value.
*
* @export
* @param value - The value.
* @returns - The default value when the specified file name is not valid; otherwise returns the original value.
*/
export function whenIsNotValidFileName(value: string | null | undefined, defaultValue: string | null | undefined): string | null | undefined
{
    if (!isValidFileName(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

/**
 * Returns default value when the original value is not a valid file path; otherwise returns the original value.
 *
 * @param value - The value.
 * @param defaultValue - The default value.
 * @returns - The default value when the original value is not a valid file path; otherwise returns the original value.
 */
export function whenIsNotValidFilePath(value: string | null | undefined, defaultValue: string | null | undefined): string | null | undefined
{
    if (!isValidFilePath(value))
    {
        return defaultValue;
    }
    else
    {
        return value;
    }
}

// #endregion
