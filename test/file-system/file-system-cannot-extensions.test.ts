import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { cannotBeAbsoluteDirectoryPath, cannotBeAbsoluteFilePath, cannotBeEmptyDirectory, cannotBeValidDirectoryPath, cannotBeValidFileName, cannotBeValidFilePath, cannotDirectoryExist, cannotFileExist } from "../../source/file-system/file-system-cannot-extensions";
import { expect } from "chai";
import * as fs from "fs";
import * as rimraf from "rimraf";

describe("file system cannot extensions", () =>
{
    describe("cannotDirectoryExist()", () =>
    {
        describe("success", () => it("directory should not exist", () => testCannotDirectoryExist()));

        describe("failure", () =>
        {
            it("should fail for null directory path", () => expect(() => cannotDirectoryExist(null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for empty directory path", () => expect(() => cannotDirectoryExist("")).to.throw(ArgumentError, "Value cannot be empty."));
            it("should fail for whitespace directory path", () => expect(() => cannotDirectoryExist("  \t")).to.throw(ArgumentError, "Value cannot be whitespace."));

            // TODO: write tests for invalid directory paths
            // // it("should fail for invalid directory path", () => expect(() => cannotDirectoryExist("$~/\\")).to.throw(ArgumentError, "Value must be a valid directory path."));
        });
    });

    describe("cannotFileExist()", () =>
    {
        describe("success", () => it("file should not exist", () => testCannotFileExist()));

        describe("failure", () =>
        {
            it("should fail for null directory path", () => expect(() => cannotFileExist(null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for empty directory path", () => expect(() => cannotFileExist("")).to.throw(ArgumentError, "Value cannot be empty."));
            it("should fail for whitespace directory path", () => expect(() => cannotFileExist("  \t")).to.throw(ArgumentError, "Value cannot be whitespace."));

            // TODO: write tests for invalid directory paths
            // // it("should fail for invalid directory path", () => expect(() => cannotFileExist("$~/\\")).to.throw(ArgumentError, "Value must be a valid directory path."));
        });
    });

    describe("cannotBeAbsoluteDirectoryPath()", () =>
    {
        describe("success", () =>
        {

            it("should succeed false for relative directory path", () => expect(cannotBeAbsoluteDirectoryPath(".\\temp\\")).to.equal(".\\temp\\"));
            it("should succeed false for relative directory path", () => expect(cannotBeAbsoluteDirectoryPath(".\\temp")).to.equal(".\\temp"));
            it("should succeed false for relative directory path", () => expect(cannotBeAbsoluteDirectoryPath("./temp")).to.equal("./temp"));
            it("should succeed false for relative directory path", () => expect(cannotBeAbsoluteDirectoryPath("./temp/")).to.equal("./temp/"));
            it("should succeed false for relative directory path", () => expect(cannotBeAbsoluteDirectoryPath("./temp/")).to.equal("./temp/"));
            it("should succeed false for relative directory path", () => expect(cannotBeAbsoluteDirectoryPath("../temp/")).to.equal("../temp/"));
            it("should succeed false for relative directory path", () => expect(cannotBeAbsoluteDirectoryPath("temp")).to.equal("temp"));
            it("should succeed false for relative directory path", () => expect(cannotBeAbsoluteDirectoryPath("temp.txt")).to.equal("temp.txt"));
        });

        describe("failure", () =>
        {
            it("should return true for null", () => () => expect(cannotBeAbsoluteDirectoryPath(null)).to.throw(ArgumentError, "Value cannot be an absolute directory path."));
            it("should return true for undefined", () => () => expect(cannotBeAbsoluteDirectoryPath(undefined)).to.throw(ArgumentError, "Value cannot be an absolute directory path."));
            it("should fail for absolute directory path", () => expect(() => cannotBeAbsoluteDirectoryPath("C:\\")).to.throw(ArgumentError, "Value cannot be an absolute directory path."));
            it("should fail for absolute directory path", () => expect(() => cannotBeAbsoluteDirectoryPath("C:\\temp")).to.throw(ArgumentError, "Value cannot be an absolute directory path."));
            it("should fail for absolute directory path", () => expect(() => cannotBeAbsoluteDirectoryPath("C:\\temp\\")).to.throw(ArgumentError, "Value cannot be an absolute directory path."));
            it("should fail for absolute directory path", () => expect(() => cannotBeAbsoluteDirectoryPath("C:\\temp\\sub folder")).to.throw(ArgumentError, "Value cannot be an absolute directory path."));
            it("should fail for absolute directory path", () => expect(() => cannotBeAbsoluteDirectoryPath("C:/temp/sub folder")).to.throw(ArgumentError, "Value cannot be an absolute directory path."));
            it("should fail for absolute directory path", () => expect(() => cannotBeAbsoluteDirectoryPath("C:\\temp\\sub folder\\")).to.throw(ArgumentError, "Value cannot be an absolute directory path."));
            it("should fail for absolute directory path", () => expect(() => cannotBeAbsoluteDirectoryPath("C:\\temp\\sub_folder\\")).to.throw(ArgumentError, "Value cannot be an absolute directory path."));
            it("should fail for absolute directory path", () => expect(() => cannotBeAbsoluteDirectoryPath("C:\\temp\\sub-folder\\")).to.throw(ArgumentError, "Value cannot be an absolute directory path."));
            it("should fail for absolute directory path", () => expect(() => cannotBeAbsoluteDirectoryPath("C:\\temp\\sub-folder\\1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111")).to.throw(ArgumentError, "Value cannot be an absolute directory path."));

            // TODO: write tests for invalid directory paths
            // // it("should fail for invalid file path", () => expect(() => isAbsoluteFilePath("$~/\\")).to.throw(ArgumentError, "Value must be a valid directory path."));
        });
    });

    describe("cannotBeAbsoluteDirectoryPath()", () =>
    {
        describe("success", () =>
        {

            it("should return false for relative file path", () => expect(cannotBeAbsoluteFilePath(".\\temp\\")).to.equal(".\\temp\\"));
            it("should return false for relative file path", () => expect(cannotBeAbsoluteFilePath(".\\temp")).to.equal(".\\temp"));
            it("should return false for relative file path", () => expect(cannotBeAbsoluteFilePath("./temp")).to.equal("./temp"));
            it("should return false for relative file path", () => expect(cannotBeAbsoluteFilePath("./temp/")).to.equal("./temp/"));
            it("should return false for relative file path", () => expect(cannotBeAbsoluteFilePath("./temp/")).to.equal("./temp/"));
            it("should return false for relative file path", () => expect(cannotBeAbsoluteFilePath("../temp/")).to.equal("../temp/"));
            it("should return false for relative file path", () => expect(cannotBeAbsoluteFilePath("temp")).to.equal("temp"));
            it("should return false for relative file path", () => expect(cannotBeAbsoluteFilePath("temp.txt")).to.equal("temp.txt"));
        });

        describe("failure", () =>
        {
            it("should return true for null", () => expect(() => cannotBeAbsoluteFilePath(null)).to.throw(ArgumentError, "Value cannot be an absolute file path."));
            it("should return true for undefined", () => expect(() => cannotBeAbsoluteFilePath(undefined)).to.throw(ArgumentError, "Value cannot be an absolute file path."));
            it("should return true for absolute file path", () => expect(() => cannotBeAbsoluteFilePath("C:\\")).to.throw(ArgumentError, "Value cannot be an absolute file path."));
            it("should return true for absolute file path", () => expect(() => cannotBeAbsoluteFilePath("C:\\temp")).to.throw(ArgumentError, "Value cannot be an absolute file path."));
            it("should return true for absolute file path", () => expect(() => cannotBeAbsoluteFilePath("C:\\temp\\")).to.throw(ArgumentError, "Value cannot be an absolute file path."));
            it("should return true for absolute file path", () => expect(() => cannotBeAbsoluteFilePath("C:\\temp\\sub folder")).to.throw(ArgumentError, "Value cannot be an absolute file path."));
            it("should return true for absolute file path", () => expect(() => cannotBeAbsoluteFilePath("C:/temp/sub folder")).to.throw(ArgumentError, "Value cannot be an absolute file path."));
            it("should return true for absolute file path", () => expect(() => cannotBeAbsoluteFilePath("C:\\temp\\sub folder\\")).to.throw(ArgumentError, "Value cannot be an absolute file path."));
            it("should return true for absolute file path", () => expect(() => cannotBeAbsoluteFilePath("C:\\temp\\sub_folder\\")).to.throw(ArgumentError, "Value cannot be an absolute file path."));
            it("should return true for absolute file path", () => expect(() => cannotBeAbsoluteFilePath("C:\\temp\\sub-folder\\")).to.throw(ArgumentError, "Value cannot be an absolute file path."));
            it("should return true for absolute file path", () => expect(() => cannotBeAbsoluteFilePath("C:\\temp\\sub-folder\\1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111")).to.throw(ArgumentError, "Value cannot be an absolute file path."));
            // TODO: write tests for invalid file paths
            // // it("should fail for invalid file path", () => expect(() => isAbsoluteFilePath("$~/\\")).to.throw(ArgumentError, "Value must be a valid directory path."));
        });
    });

    describe("cannotBeEmptyDirectory()", () =>
    {
        describe("success", () => it("directory should be empty", () => testCannotBeEmptyDirectory()));

        describe("failure", () =>
        {
            it("should fail for null directory path", () => expect(() => cannotBeEmptyDirectory(null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for empty directory path", () => expect(() => cannotBeEmptyDirectory("")).to.throw(ArgumentError, "Value cannot be empty."));
            it("should fail for whitespace directory path", () => expect(() => cannotBeEmptyDirectory("  \t")).to.throw(ArgumentError, "Value must be a valid directory path."));

            // TODO: write tests for invalid directory paths
            // // it("should fail for invalid directory path", () => expect(() => isEmptyDirectory("$~/\\")).to.throw(ArgumentError, "Value must be a valid directory path."));
        });
    });

    describe("cannotBeValidDirectoryPath()", () =>
    {
        describe("success", () =>
        {
            it("should return false for empty string", () => expect(cannotBeValidDirectoryPath("")).to.equal(""));
            it("should return false for whitespace", () => expect(cannotBeValidDirectoryPath("    \t          ")).to.equal("    \t          "));
            // TODO: write tests for invalid directory paths
            // // it("should return false invalid directory path", () => expect(cannotBeValidDirectoryPath("???")).to.equal("???"));

            it("should fail for null", () => expect(() => cannotBeValidDirectoryPath(null)).to.throw(ArgumentError, "Value cannot be a valid directory path."));
            it("should fail for undefined", () => expect(() => cannotBeValidDirectoryPath(undefined)).to.throw(ArgumentError, "Value cannot be a valid directory path."));
            it("should fail for valid directory path", () => expect(() => cannotBeValidDirectoryPath("C:\\")).to.throw(ArgumentError, "Value cannot be a valid directory path."));
            it("should fail for valid directory path", () => expect(() => cannotBeValidDirectoryPath("C:\\temp")).to.throw(ArgumentError, "Value cannot be a valid directory path."));
            it("should fail for valid directory path", () => expect(() => cannotBeValidDirectoryPath("C:\\temp\\")).to.throw(ArgumentError, "Value cannot be a valid directory path."));
            it("should fail for valid directory path", () => expect(() => cannotBeValidDirectoryPath("C:/temp")).to.throw(ArgumentError, "Value cannot be a valid directory path."));
            it("should fail for valid directory path", () => expect(() => cannotBeValidDirectoryPath("C:/temp/")).to.throw(ArgumentError, "Value cannot be a valid directory path."));
            it("should fail for valid directory path", () => expect(() => cannotBeValidDirectoryPath("temp")).to.throw(ArgumentError, "Value cannot be a valid directory path."));
            it("should fail for valid directory path", () => expect(() => cannotBeValidDirectoryPath("./temp/")).to.throw(ArgumentError, "Value cannot be a valid directory path."));
            it("should fail for valid directory path", () => expect(() => cannotBeValidDirectoryPath("./temp")).to.throw(ArgumentError, "Value cannot be a valid directory path."));

        });
    });

    describe("cannotBeValidFilePath()", () =>
    {
        describe("success", () =>
        {
            it("should return false for empty string", () => expect(cannotBeValidFilePath("")).to.equal(""));
            it("should return false for whitespace", () => expect(cannotBeValidFilePath("    \t          ")).to.equal("    \t          "));
            // TODO: write tests for invalid file paths
            // // it("should return false invalid file path", () => expect(cannotBeValidFilePath("???")).to.equal("???"));

            it("should fail for null", () => expect(() => cannotBeValidFilePath(null)).to.throw(ArgumentError, "Value cannot be a valid file path."));
            it("should fail for undefined", () => expect(() => cannotBeValidFilePath(undefined)).to.throw(ArgumentError, "Value cannot be a valid file path."));
            it("should fail for valid file path", () => expect(() => cannotBeValidFilePath("C:\\temp.txt")).to.throw(ArgumentError, "Value cannot be a valid file path."));
            it("should fail for valid file path", () => expect(() => cannotBeValidFilePath("C:\\temp\\temp.txt")).to.throw(ArgumentError, "Value cannot be a valid file path."));
            it("should fail for valid file path", () => expect(() => cannotBeValidFilePath("C:/temp\\temp.txt")).to.throw(ArgumentError, "Value cannot be a valid file path."));
            it("should fail for valid file path", () => expect(() => cannotBeValidFilePath("C:/temp/temp.txt")).to.throw(ArgumentError, "Value cannot be a valid file path."));
            it("should fail for valid file path", () => expect(() => cannotBeValidFilePath("temp.txt")).to.throw(ArgumentError, "Value cannot be a valid file path."));
            it("should fail for valid file path", () => expect(() => cannotBeValidFilePath("./temp.txt")).to.throw(ArgumentError, "Value cannot be a valid file path."));
            it("should fail for valid file path", () => expect(() => cannotBeValidFilePath("./temp/temp.txt")).to.throw(ArgumentError, "Value cannot be a valid file path."));

        });
    });

    describe("cannotBeValidFileName()", () =>
    {
        describe("success", () =>
        {
            it("should return empty string", () => expect(cannotBeValidFileName("")).to.equal(""));
            it("should return whitespace", () => expect(cannotBeValidFileName("    \t          ")).to.equal("    \t          "));

            it("should return invalid file name", () => expect(cannotBeValidFileName("C:\\temp.txt")).to.equal("C:\\temp.txt"));
            it("should return invalid file name", () => expect(cannotBeValidFileName("C:\\temp\\temp.txt")).to.equal("C:\\temp\\temp.txt"));
            it("should return invalid file name", () => expect(cannotBeValidFileName("C:/temp\\temp.txt")).to.equal("C:/temp\\temp.txt"));
            // // it("should return invalid file name", () => expect(cannotBeValidFileName("C:/temp/temp.txt")).to.equal("C:/temp/temp.txt"));
            // // it("should return invalid file name", () => expect(cannotBeValidFileName("./temp.txt")).to.equal("./temp.txt"));
            // // it("should return invalid file name", () => expect(cannotBeValidFileName("./temp/temp.txt")).to.equal("./temp/temp.txt"));
            // TODO: write tests for invalid file names
            // // it("should return false invalid file path", () => expect(cannotBeValidFileName("???")).to.equal("???"));

            it("should return null", () => expect(() => cannotBeValidFileName(null)).to.throw(ArgumentError, "Value cannot be a valid file name."));
            it("should return undefined", () => expect(() => cannotBeValidFileName(undefined)).to.throw(ArgumentError, "Value cannot be a valid file name."));
            it("should fail for valid file name", () => expect(() => cannotBeValidFileName("temp")).to.throw(ArgumentError, "Value cannot be a valid file name."));
            it("should fail for valid file name", () => expect(() => cannotBeValidFileName("temp.txt")).to.throw(ArgumentError, "Value cannot be a valid file name."));
        });
    });
});

function testCannotDirectoryExist(): void
{
    const directoryPath = "./temp";

    if (!fs.existsSync(directoryPath))
    {
        fs.mkdirSync(directoryPath);
    }

    expect(() => cannotDirectoryExist(directoryPath)).to.throw(ArgumentError, "Directory cannot exist.");

    if (fs.existsSync(directoryPath))
    {
        rimraf.sync(directoryPath);
    }

    expect(cannotDirectoryExist(directoryPath)).to.equal(directoryPath);
}

function testCannotFileExist(): void
{
    const filePath = "./temp.txt";

    if (!fs.existsSync(filePath))
    {
        fs.writeFileSync(filePath, "aaa");
    }

    expect(() => cannotFileExist(filePath)).to.throw(ArgumentError, "File cannot exist.");

    if (fs.existsSync(filePath))
    {
        fs.unlinkSync(filePath);
    }

    expect(cannotFileExist(filePath)).to.equal(filePath);
}

function testCannotBeEmptyDirectory(): void
{
    const directoryPath = "./temp";
    const filePath = `${directoryPath}/temp.txt`;

    if (!fs.existsSync(directoryPath))
    {
        fs.mkdirSync(directoryPath);
    }

    expect(() => cannotBeEmptyDirectory(filePath)).to.throw(ArgumentError, "Value cannot be an empty directory.");

    if (!fs.existsSync(filePath))
    {
        fs.writeFileSync(filePath, "aaa");
    }

    expect(cannotBeEmptyDirectory(directoryPath)).to.equal(directoryPath);

    if (fs.existsSync(directoryPath))
    {
        rimraf.sync(directoryPath);
    }
}
