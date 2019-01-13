import { cannotBeNullOrEmpty, cannotBeNullOrWhiteSpace } from "../strings/string-cannot-extensions";
import { isNullOrWhiteSpace } from "../strings/string-is-extensions";
import { mustBeValidDirectoryPath, mustBeValidFilePath } from "./file-system-must-extensions";
import * as fs from "fs";
import * as path from "path";

// #region Functions (8)

/**
 * Determines whether the specified directory exists.
 *
 * @export
 * @param value - The value.
 * @returns - True if the specified directory exists; otherwise, false.
 */
export function doesDirectoryExist(value: string | null | undefined): boolean
{
    cannotBeNullOrWhiteSpace(value);
    mustBeValidDirectoryPath(value);

    if (value === null ||
        value === undefined)
    {
        return false;
    }
    else
    {
        return fs.existsSync(value);
    }
}

/**
 * Determines whether the specified file exists.
 *
 * @export
 * @param value - The value.
 * @returns - True if the specified file exists; otherwise, false.
 */
export function doesFileExist(value: string | null | undefined): boolean
{
    cannotBeNullOrWhiteSpace(value);
    mustBeValidFilePath(value);

    if (value === null ||
        value === undefined)
    {
        return false;
    }
    else
    {
        return fs.existsSync(value);
    }
}

/**
 * Determines whether the specified value is an absolute directory path.
 *
 * @export
 * @param value - The value.
 * @returns - True if the specified value is an absolute directory path; otherwise, false.
 */
export function isAbsoluteDirectoryPath(value: string | null | undefined): boolean
{
    mustBeValidDirectoryPath(value);

    if (value === null ||
        value === undefined)
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
* @param value - The value.
* @returns - True if the specified value is an absolute file path; otherwise, false.
*/
export function isAbsoluteFilePath(value: string | null | undefined): boolean
{
    mustBeValidFilePath(value);

    if (value === null ||
        value === undefined)
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
 * @param value - The value.
 * @returns - True if specified directory is empty; otherwise, false.
 */
export function isEmptyDirectory(value: string | null | undefined): boolean
{
    cannotBeNullOrEmpty(value);
    mustBeValidDirectoryPath(value);

    if (value === null ||
        value === undefined)
    {
        return false;
    }
    else if (doesDirectoryExist(value))
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
 * @param value - The value.
 * @returns - True if the specified value is a valid directory path; otherwise, false.
 */
export function isValidDirectoryPath(value: string | null | undefined): boolean
{
    if (value === null ||
        value === undefined)
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
 * @param value - The value.
 * @returns - True if the specified value is a valid file name; otherwise, false.
 */
export function isValidFileName(value: string | null | undefined): boolean
{
    if (value === null ||
        value === undefined)
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
 * @param value - The value.
 * @returns - True if the specified value is a valid file path; otherwise, false.
 */
export function isValidFilePath(value: string | null | undefined): boolean
{
    if (value === null ||
        value === undefined)
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

// #endregion
