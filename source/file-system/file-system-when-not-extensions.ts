import { doesDirectoryExist, doesFileExist, isAbsoluteDirectoryPath, isAbsoluteFilePath, isEmptyDirectory, isValidDirectoryPath, isValidFilePath } from "./file-system-is-extensions";

/**
 * Returns default value when the specified directory does not exist; otherwise returns the original value.
 *
 * @param {string} value - The value.
 * @param {string} defaultValue - The default value.
 * @returns {string} - The default value when the directory does not exist; otherwise returns the original value.
 */
export function whenDoesNotDirectoryExist(value, defaultValue: string): string
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
 * @param {string} value - The value.
 * @param {string} defaultValue - The default value.
 * @returns {string} - The default value when the file does not exist; otherwise returns the original value.
 */
export function whenDoesNotFileExist(value, defaultValue: string): string
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
 * @param {string} value - The value.
 * @param {string} defaultValue - The default value.
 * @returns {string} - The default value when the directory path is not an absolute directory path; otherwise returns the original value.
 */
export function whenIsNotAbsoluteDirectoryPath(value, defaultValue: string): string
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
 * @param {string} value - The value.
 * @param {string} defaultValue - The default value.
 * @returns {string} - The default value when the file path is not an absolute file path; otherwise returns the original value.
 */
export function whenIsNotAbsoluteFilePath(value, defaultValue: string): string
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
 * @param {string} value - The value.
 * @param {string} defaultValue - The default value.
 * @returns {string} - The default value when the directory path is not empty; otherwise returns the original value.
 */
export function whenIsNotEmptyDirectory(value, defaultValue: string): string
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
 * @param {string} value - The value.
 * @param {string} defaultValue - The default value.
 * @returns {string} - The default value when the original value is not a valid directory path; otherwise returns the original value.
 */
export function whenIsNotValidDirectoryPath(value, defaultValue: string): string
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
 * Returns default value when the original value is not a valid file path; otherwise returns the original value.
 *
 * @param {string} value - The value.
 * @param {string} defaultValue - The default value.
 * @returns {string} - The default value when the original value is not a valid file path; otherwise returns the original value.
 */
export function whenIsNotValidFilePath(value, defaultValue: string): string
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
