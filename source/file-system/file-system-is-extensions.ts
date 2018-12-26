import * as fs from "fs";
import * as path from "path";
import { cannotBeNullOrWhiteSpace } from "../objects/object-cannot-extensions";
import { isNullOrEmpty } from "../collections/collection-is-extensions";
import { isNullOrUndefined, isNullOrWhiteSpace } from "../objects/object-is-extensions";
import { mustBeValidDirectoryPath, mustBeValidFilePath } from "./file-system-must-extensions";

/**
 * Determines whether the specified directory exists.
 *
 * @export
 * @param {string} value - The value.
 * @returns {boolean} - True if the specified directory exists; otherwise, false.
 */
export function doesDirectoryExist(value: string): boolean
{
	cannotBeNullOrWhiteSpace(value);
	mustBeValidDirectoryPath(value);

	return fs.existsSync(value);
}

/**
 * Determines whether the specified file exists.
 *
 * @export
 * @param {string} value - The value.
 * @returns {boolean} - True if the specified file exists; otherwise, false.
 */
export function doesFileExist(value: string): boolean
{
	mustBeValidFilePath(value);

	return fs.existsSync(value);
}

/**
 * Determines whether the specified value is an absolute directory path.
 *
 * @export
 * @param {string} value - The value.
 * @returns {boolean} - True if the specified value is an absolute directory path; otherwise, false.
 */
export function isAbsoluteDirectoryPath(value: string): boolean
{
	mustBeValidDirectoryPath(value);

	return path.isAbsolute(value);
}

/**
* Determines whether the specified value is an absolute file path.
*
* @export
* @param {string} value - The value.
* @returns {boolean} - True if the specified value is an absolute file path; otherwise, false.
*/
export function isAbsoluteFilePath(value: string): boolean
{
	mustBeValidFilePath(value);

	return path.isAbsolute(value);
}

/**
 * Determines whether specified direcory is empty.
 *
 * @export
 * @param {string} value - The value.
 * @returns {boolean} - True if specified direcory is empty; otherwise, false.
 */
export function isEmptyDirectory(value: string): boolean
{
	mustBeValidDirectoryPath(value);

	if (doesDirectoryExist(value))
	{
		return fs.readdirSync(value).length === 0;
	}
	else
	{
		return true;
	}
}

/**
 * Determines whether the specified value is a valid directory path.
 *
 * @export
 * @param {string} value - The value.
 * @returns {boolean} - True if the specified value is a valid directory path; otherwise, false.
 */
export function isValidDirectoryPath(value: string): boolean
{
	if (isNullOrUndefined(value))
	{
		return true;
	}
	else if (isNullOrWhiteSpace(value))
	{
		return false;
	}
	else
	{
		return path.dirname(value) === value;
	}
}

/**
 * Determines whether the specified value is a valid file path.
 *
 * @export
 * @param {string} value - The value.
 * @returns {boolean} - True if the specified value is a valid file path; otherwise, false.
 */
export function isValidFilePath(value: string): boolean
{
	if (isNullOrUndefined(value))
	{
		return true;
	}
	else if (isNullOrWhiteSpace(value))
	{
		return false;
	}
	else
	{
		return path.dirname(value) !== value;
	}
}
