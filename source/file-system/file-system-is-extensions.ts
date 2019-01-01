import { cannotBeNullOrEmpty } from "../collections/collection-cannot-extensions";
import { cannotBeNullOrWhiteSpace } from "../objects/object-cannot-extensions";
import { isNull, isNullOrWhiteSpace } from "../objects/object-is-extensions";
import { mustBeValidDirectoryPath, mustBeValidFilePath } from "./file-system-must-extensions";
import * as fs from "fs";
import * as path from "path";

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
    cannotBeNullOrWhiteSpace(value);
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

    if (isNull(value))
    {
        return true;
    }
    else
    {
        return path.isAbsolute(value);
    }
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

    if (isNull(value))
    {
        return true;
    }
    else
    {
        return path.isAbsolute(value);
    }
}

/**
 * Determines whether specified directory is empty.
 *
 * @export
 * @param {string} value - The value.
 * @returns {boolean} - True if specified directory is empty; otherwise, false.
 */
export function isEmptyDirectory(value: string): boolean
{
    cannotBeNullOrEmpty(value);
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
    if (isNull(value))
    {
        return true;
    }
    else if (isNullOrWhiteSpace(value))
    {
        return false;
    }
    else
    {
        // TODO: check for invalid characters for different operating systems
        return true;
    }
}

/**
 * Determines whether the specified value is a valid file name.
 *
 * @export
 * @param {string} value - The value.
 * @returns {boolean} - True if the specified value is a valid file name; otherwise, false.
 */
export function isValidFileName(value: string): boolean
{
    if (isNull(value))
    {
        return true;
    }
    else if (isNullOrWhiteSpace(value))
    {
        return false;
    }
    else if (value.indexOf(path.sep) > -1)
    {
        return false;
    }
    else
    {
        // TODO: check for invalid characters
        return true;
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
    if (isNull(value))
    {
        return true;
    }
    else if (isNullOrWhiteSpace(value))
    {
        return false;
    }
    else
    {
        // TODO: check for invalid characters
        return true;
    }
}
