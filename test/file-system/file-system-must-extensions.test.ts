import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { mustBeAbsoluteDirectoryPath, mustBeAbsoluteFilePath, mustBeEmptyDirectory, mustBeValidDirectoryPath, mustBeValidFileName, mustBeValidFilePath, mustDirectoryExist, mustFileExist } from "../../source/file-system/file-system-must-extensions";
import { expect } from "chai";
import * as fs from "fs";
import * as rimraf from "rimraf";

describe("file system must extensions", () =>
{
    describe("mustDirectoryExist()", () =>
    {
        describe("success", () => it("directory should exist", () => testMustDirectoryExist()));

        describe("failure", () =>
        {
            it("should fail for null directory path", () => expect(() => mustDirectoryExist(null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for empty directory path", () => expect(() => mustDirectoryExist("")).to.throw(ArgumentError, "Value cannot be empty."));
            it("should fail for whitespace directory path", () => expect(() => mustDirectoryExist("  \t")).to.throw(ArgumentError, "Value cannot be whitespace."));

            // TODO: write tests for invalid directory paths
            // // it("should fail for invalid directory path", () => expect(() => mustDirectoryExist("$~/\\")).to.throw(ArgumentError, "Value must be a valid directory path."));
        });
    });

    describe("mustFileExist()", () =>
    {
        describe("success", () => it("file should not exist", () => testMustFileExist()));

        describe("failure", () =>
        {
            it("should fail for null directory path", () => expect(() => mustFileExist(null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for empty directory path", () => expect(() => mustFileExist("")).to.throw(ArgumentError, "Value cannot be empty."));
            it("should fail for whitespace directory path", () => expect(() => mustFileExist("  \t")).to.throw(ArgumentError, "Value cannot be whitespace."));

            // TODO: write tests for invalid directory paths
            // // it("should fail for invalid directory path", () => expect(() => mustFileExist("$~/\\")).to.throw(ArgumentError, "Value must be a valid directory path."));
        });
    });

    describe("mustBeAbsoluteDirectoryPath()", () =>
    {
        describe("success", () =>
        {
            it("should fail for null", () => expect(mustBeAbsoluteDirectoryPath(null)).to.equal(null));
            it("should fail for undefined", () => expect(mustBeAbsoluteDirectoryPath(undefined)).to.equal(undefined));

            it("should return absolute directory path", () => expect(mustBeAbsoluteDirectoryPath("C:\\")).to.equal("C:\\"));
            it("should return absolute directory path", () => expect(mustBeAbsoluteDirectoryPath("C:\\temp")).to.equal("C:\\temp"));
            it("should return absolute directory path", () => expect(mustBeAbsoluteDirectoryPath("C:\\temp\\")).to.equal("C:\\temp\\"));
            it("should return absolute directory path", () => expect(mustBeAbsoluteDirectoryPath("C:\\temp\\sub folder")).to.equal("C:\\temp\\sub folder"));
            it("should return absolute directory path", () => expect(mustBeAbsoluteDirectoryPath("C:/temp/sub folder")).to.equal("C:/temp/sub folder"));
            it("should return absolute directory path", () => expect(mustBeAbsoluteDirectoryPath("C:\\temp\\sub folder\\")).to.equal("C:\\temp\\sub folder\\"));
            it("should return absolute directory path", () => expect(mustBeAbsoluteDirectoryPath("C:\\temp\\sub_folder\\")).to.equal("C:\\temp\\sub_folder\\"));
            it("should return absolute directory path", () => expect(mustBeAbsoluteDirectoryPath("C:\\temp\\sub-folder\\")).to.equal("C:\\temp\\sub-folder\\"));
            it("should return absolute directory path", () => expect(mustBeAbsoluteDirectoryPath("C:\\temp\\sub-folder\\1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111")).to.equal("C:\\temp\\sub-folder\\1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"));
        });

        describe("failure", () =>
        {
            it("should fail for relative directory path", () => expect(() => mustBeAbsoluteDirectoryPath(".\\temp\\")).to.throw(ArgumentError, "Value must be an absolute directory path."));
            it("should fail for relative directory path", () => expect(() => mustBeAbsoluteDirectoryPath(".\\temp")).to.throw(ArgumentError, "Value must be an absolute directory path."));
            it("should fail for relative directory path", () => expect(() => mustBeAbsoluteDirectoryPath("./temp")).to.throw(ArgumentError, "Value must be an absolute directory path."));
            it("should fail for relative directory path", () => expect(() => mustBeAbsoluteDirectoryPath("./temp/")).to.throw(ArgumentError, "Value must be an absolute directory path."));
            it("should fail for relative directory path", () => expect(() => mustBeAbsoluteDirectoryPath("./temp/")).to.throw(ArgumentError, "Value must be an absolute directory path."));
            it("should fail for relative directory path", () => expect(() => mustBeAbsoluteDirectoryPath("../temp/")).to.throw(ArgumentError, "Value must be an absolute directory path."));
            it("should fail for relative directory path", () => expect(() => mustBeAbsoluteDirectoryPath("temp")).to.throw(ArgumentError, "Value must be an absolute directory path."));
            it("should fail for relative directory path", () => expect(() => mustBeAbsoluteDirectoryPath("temp.txt")).to.throw(ArgumentError, "Value must be an absolute directory path."));
            // TODO: write tests for invalid directory paths
            // // it("should fail for invalid file path", () => expect(() => isAbsoluteFilePath("$~/\\")).to.throw(ArgumentError, "Value must be a valid directory path."));
        });
    });

    describe("mustBeAbsoluteDirectoryPath()", () =>
    {
        describe("success", () =>
        {
            it("should return true for null", () => expect(mustBeAbsoluteFilePath(null)).to.equal(null));
            it("should return true for undefined", () => expect(mustBeAbsoluteFilePath(undefined)).to.equal(undefined));

            it("should return absolute file path", () => expect(mustBeAbsoluteFilePath("C:\\")).to.equal("C:\\"));
            it("should return absolute file path", () => expect(mustBeAbsoluteFilePath("C:\\temp")).to.equal("C:\\temp"));
            it("should return absolute file path", () => expect(mustBeAbsoluteFilePath("C:\\temp\\")).to.equal("C:\\temp\\"));
            it("should return absolute file path", () => expect(mustBeAbsoluteFilePath("C:\\temp\\sub folder")).to.equal("C:\\temp\\sub folder"));
            it("should return absolute file path", () => expect(mustBeAbsoluteFilePath("C:/temp/sub folder")).to.equal("C:/temp/sub folder"));
            it("should return absolute file path", () => expect(mustBeAbsoluteFilePath("C:\\temp\\sub folder\\")).to.equal("C:\\temp\\sub folder\\"));
            it("should return absolute file path", () => expect(mustBeAbsoluteFilePath("C:\\temp\\sub_folder\\")).to.equal("C:\\temp\\sub_folder\\"));
            it("should return absolute file path", () => expect(mustBeAbsoluteFilePath("C:\\temp\\sub-folder\\")).to.equal("C:\\temp\\sub-folder\\"));
            it("should return absolute file path", () => expect(mustBeAbsoluteFilePath("C:\\temp\\sub-folder\\1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111")).to.equal("C:\\temp\\sub-folder\\1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"));
        });

        describe("failure", () =>
        {
            it("should fail for relative file path", () => expect(() => mustBeAbsoluteFilePath(".\\temp\\")).to.throw(ArgumentError, "Value must be an absolute file path."));
            it("should fail for relative file path", () => expect(() => mustBeAbsoluteFilePath(".\\temp")).to.throw(ArgumentError, "Value must be an absolute file path."));
            it("should fail for relative file path", () => expect(() => mustBeAbsoluteFilePath("./temp")).to.throw(ArgumentError, "Value must be an absolute file path."));
            it("should fail for relative file path", () => expect(() => mustBeAbsoluteFilePath("./temp/")).to.throw(ArgumentError, "Value must be an absolute file path."));
            it("should fail for relative file path", () => expect(() => mustBeAbsoluteFilePath("./temp/")).to.throw(ArgumentError, "Value must be an absolute file path."));
            it("should fail for relative file path", () => expect(() => mustBeAbsoluteFilePath("../temp/")).to.throw(ArgumentError, "Value must be an absolute file path."));
            it("should fail for relative file path", () => expect(() => mustBeAbsoluteFilePath("temp")).to.throw(ArgumentError, "Value must be an absolute file path."));
            it("should fail for relative file path", () => expect(() => mustBeAbsoluteFilePath("temp.txt")).to.throw(ArgumentError, "Value must be an absolute file path."));
        });
    });

    describe("mustBeEmptyDirectory()", () =>
    {
        describe("success", () => it("directory should be empty", () => testMustBeEmptyDirectory()));

        describe("failure", () =>
        {
            it("should fail for null directory path", () => expect(() => mustBeEmptyDirectory(null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for empty directory path", () => expect(() => mustBeEmptyDirectory("")).to.throw(ArgumentError, "Value cannot be empty."));
            it("should fail for whitespace directory path", () => expect(() => mustBeEmptyDirectory("  \t")).to.throw(ArgumentError, "Value must be a valid directory path."));

            // TODO: write tests for invalid directory paths
            // // it("should fail for invalid directory path", () => expect(() => isEmptyDirectory("$~/\\")).to.throw(ArgumentError, "Value must be a valid directory path."));
        });
    });

    describe("mustBeValidDirectoryPath()", () =>
    {
        describe("success", () =>
        {
            it("should return null", () => expect(mustBeValidDirectoryPath(null)).to.equal(null));
            it("should return undefined", () => expect(mustBeValidDirectoryPath(undefined)).to.equal(undefined));
            it("should return valid directory path", () => expect(mustBeValidDirectoryPath("C:\\")).to.equal("C:\\"));
            it("should return valid directory path", () => expect(mustBeValidDirectoryPath("C:\\temp")).to.equal("C:\\temp"));
            it("should return valid directory path", () => expect(mustBeValidDirectoryPath("C:\\temp\\")).to.equal("C:\\temp\\"));
            it("should return valid directory path", () => expect(mustBeValidDirectoryPath("C:/temp")).to.equal("C:/temp"));
            it("should return valid directory path", () => expect(mustBeValidDirectoryPath("C:/temp/")).to.equal("C:/temp/"));
            it("should return valid directory path", () => expect(mustBeValidDirectoryPath("temp")).to.equal("temp"));
            it("should return valid directory path", () => expect(mustBeValidDirectoryPath("./temp/")).to.equal("./temp/"));
            it("should return valid directory path", () => expect(mustBeValidDirectoryPath("./temp")).to.equal("./temp"));

            it("should return false for empty string", () => expect(() => mustBeValidDirectoryPath("")).to.throw(ArgumentError, "Value must be a valid directory path."));
            it("should return false for whitespace", () => expect(() => mustBeValidDirectoryPath("    \t          ")).to.throw(ArgumentError, "Value must be a valid directory path."));
            // TODO: write tests for invalid directory paths
            // // it("should return false invalid directory path", () => expect(mustBeValidDirectoryPath("???")).to.equal("???"));

        });
    });

    describe("mustBeValidFilePath()", () =>
    {
        describe("success", () =>
        {
            it("should fail for null", () => expect(mustBeValidFilePath(null)).to.equal(null));
            it("should fail for undefined", () => expect(mustBeValidFilePath(undefined)).to.equal(undefined));

            it("should fail for valid file path", () => expect(mustBeValidFilePath("C:\\temp.txt")).to.equal("C:\\temp.txt"));
            it("should fail for valid file path", () => expect(mustBeValidFilePath("C:\\temp\\temp.txt")).to.equal("C:\\temp\\temp.txt"));
            it("should fail for valid file path", () => expect(mustBeValidFilePath("C:/temp\\temp.txt")).to.equal("C:/temp\\temp.txt"));
            it("should fail for valid file path", () => expect(mustBeValidFilePath("C:/temp/temp.txt")).to.equal("C:/temp/temp.txt"));
            it("should fail for valid file path", () => expect(mustBeValidFilePath("temp.txt")).to.equal("temp.txt"));
            it("should fail for valid file path", () => expect(mustBeValidFilePath("./temp.txt")).to.equal("./temp.txt"));
            it("should fail for valid file path", () => expect(mustBeValidFilePath("./temp/temp.txt")).to.equal("./temp/temp.txt"));

            it("should return false for empty string", () => expect(() => mustBeValidFilePath("")).to.throw(ArgumentError, "Value must be a valid file path."));
            it("should return false for whitespace", () => expect(() => mustBeValidFilePath("    \t          ")).to.throw(ArgumentError, "Value must be a valid file path."));

            // TODO: write tests for invalid file paths
            // // it("should return false invalid file path", () => expect(mustBeValidFilePath("???")).to.equal("???"));
        });
    });

    describe("mustBeValidFileName()", () =>
    {
        describe("success", () =>
        {
            it("should return null", () => expect(mustBeValidFileName(null)).to.equal(null));
            it("should return undefined", () => expect(mustBeValidFileName(undefined)).to.equal(undefined));
            it("should fail for valid file name", () => expect(mustBeValidFileName("temp")).to.equal("temp"));
            it("should fail for valid file name", () => expect(mustBeValidFileName("temp.txt")).to.equal("temp.txt"));

            it("should return empty string", () => expect(() => mustBeValidFileName("")).to.throw(ArgumentError, "Value must be a valid file name."));
            it("should return whitespace", () => expect(() => mustBeValidFileName("    \t          ")).to.throw(ArgumentError, "Value must be a valid file name."));
            it("should return invalid file name", () => expect(() => mustBeValidFileName("C:\\temp.txt")).to.throw(ArgumentError, "Value must be a valid file name."));
            it("should return invalid file name", () => expect(() => mustBeValidFileName("C:\\temp\\temp.txt")).to.throw(ArgumentError, "Value must be a valid file name."));
            it("should return invalid file name", () => expect(() => mustBeValidFileName("C:/temp\\temp.txt")).to.throw(ArgumentError, "Value must be a valid file name."));
            // // it("should return invalid file name", () => expect(() => mustBeValidFileName("C:/temp/temp.txt")).to.throw(ArgumentError, "Value must be a valid file name."));
            // // it("should return invalid file name", () => expect(() => mustBeValidFileName("./temp.txt")).to.throw(ArgumentError, "Value must be a valid file name."));
            // // it("should return invalid file name", () => expect(() => mustBeValidFileName("./temp/temp.txt")).to.throw(ArgumentError, "Value must be a valid file name."));
            // TODO: write tests for invalid file names
            // // it("should return false invalid file path", () => expect(mustBeValidFileName("???")).to.equal("???"));
        });
    });
});

function testMustDirectoryExist(): void
{
    const directoryPath = "./temp";

    if (fs.existsSync(directoryPath))
    {
        rimraf.sync(directoryPath);
    }

    fs.mkdirSync(directoryPath);

    expect(mustDirectoryExist(directoryPath)).to.equal(directoryPath);

    if (fs.existsSync(directoryPath))
    {
        rimraf.sync(directoryPath);
    }

    expect(() => mustDirectoryExist(directoryPath)).to.throw(ArgumentError, "Directory must exist.");
}

function testMustFileExist(): void
{
    const filePath = "./temp.txt";

    if (!fs.existsSync(filePath))
    {
        fs.writeFileSync(filePath, "aaa");
    }

    expect(mustFileExist(filePath)).to.equal(filePath);

    if (fs.existsSync(filePath))
    {
        fs.unlinkSync(filePath);
    }

    expect(() => mustFileExist(filePath)).to.throw(ArgumentError, "File must exist.");
}

function testMustBeEmptyDirectory(): void
{
    const directoryPath = "./temp";
    const filePath = `${directoryPath}/temp.txt`;

    if (fs.existsSync(directoryPath))
    {
        rimraf.sync(directoryPath);
    }

    fs.mkdirSync(directoryPath);

    expect(mustBeEmptyDirectory(directoryPath)).to.equal(directoryPath);

    fs.writeFileSync(filePath, "aaa");

    expect(() => mustBeEmptyDirectory(directoryPath)).to.throw(ArgumentError, "Value must be an empty directory.");

    rimraf.sync(directoryPath);
}
