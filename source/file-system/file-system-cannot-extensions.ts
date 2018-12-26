import { ArgumentError } from "../argument-error";
import { doesDirectoryExist, doesFileExist, isAbsoluteDirectoryPath, isAbsoluteFilePath, isEmptyDirectory, isValidDirectoryPath, isValidFilePath } from "./file-system-is-extensions";

/**
 * Returns original value if the specified value is not an absolute directory path; otherwise throws a new ArgumentError.
 *
 * @export
 * @param {string} value - The value.
 * @returns {string} - The original value if the specified value is not an absolute directory path; otherwise throws a new ArgumentError.
 */
export function cannotBeAbsoluteDirectoryPath(value: string): string
{
	if (isAbsoluteDirectoryPath(value))
	{
		throw new ArgumentError("Value cannot be an absolute directory path.");
	}

	return value;
}

/**
 * Returns original value if the specified value is not an absolute file path; otherwise throws a new ArgumentError.
 *
 * @export
 * @param {string} value - The value.
 * @returns {string} - The original value if the specified value is not an absolute file path; otherwise throws a new ArgumentError.
 */
export function cannotBeAbsoluteFilePath(value: string): string
{
	if (isAbsoluteFilePath(value))
	{
		throw new ArgumentError("Value cannot be an absolute file path.");
	}

	return value;
}

/**
 * Returns original value if the specified value is not an empty directory path; otherwise throws a new ArgumentError.
 *
 * @export
 * @param {string} value - The value.
 * @returns {string} - The original value if the specified value is not an empty directory path; otherwise throws a new ArgumentError.
 */
export function cannotBeEmptyDirectory(value: string): string
{
	if (isEmptyDirectory(value))
	{
		throw new ArgumentError("Value cannot be an empty directory.");
	}

	return value;
}

/**
 * Returns original value if the specified value isn't a valid directory path; otherwise throws a new ArgumentError.
 *
 * @export
 * @param {string} value - The value.
 * @returns {string} - The original value if the specified value isn't a valid directory path; otherwise throws a new ArgumentError.
 */
export function cannotBeValidDirectoryPath(value: string): string
{
	if (isValidDirectoryPath(value))
	{
		throw new ArgumentError("Value cannot be a valid directory path.");
	}

	return value;
}

/**
* Returns original value if the specified value isn't a valid file path; otherwise throws a new ArgumentError.
*
* @export
* @param {string} value - The value.
* @returns {string} - The original value if the specified value isn't a valid file path; otherwise throws a new ArgumentError.
*/
export function cannotBeValidFilePath(value: string): string
{
	if (isValidFilePath(value))
	{
		throw new ArgumentError("Value cannot be a valid file path.");
	}

	return value;
}

/**
 * Returns original value if the specified directory does not exist; otherwise throws a new ArgumentError.
 *
 * @export
 * @param {string} value - The value.
 * @returns {string} - The original value if the specified directory does not exist; otherwise throws a new ArgumentError.
 */
export function cannotDirectoryExist(value: string): string
{
	if (doesDirectoryExist(value))
	{
		throw new ArgumentError("Directory cannot exist.");
	}

	return value;
}

/**
 * Returns original value if the specified file does not exist; otherwise throws a new ArgumentError.
 *
 * @export
 * @param {string} value - The value.
 * @returns {string} - The original value if the specified file does not exist; otherwise throws a new ArgumentError.
 */
export function cannotFileExist(value: string): string
{
	if (doesFileExist(value))
	{
		throw new ArgumentError("File cannot exist.");
	}

	return value;
}
