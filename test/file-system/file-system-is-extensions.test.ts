import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { doesDirectoryExist, doesFileExist, isAbsoluteDirectoryPath, isAbsoluteFilePath, isEmptyDirectory, isValidDirectoryPath, isValidFileName, isValidFilePath } from "../../source/file-system/file-system-is-extensions";
import { expect } from "chai";
import * as fs from "fs";
import * as rimraf from "rimraf";

describe("file system is extensions", () =>
{
    describe("doesDirectoryExist()", () =>
    {
        describe("success", () => it("directory should exist", () => testDoesDirectoryExist()));

        describe("failure", () =>
        {
            it("should fail for null directory path", () => expect(() => doesDirectoryExist(null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for empty directory path", () => expect(() => doesDirectoryExist("")).to.throw(ArgumentError, "Value cannot be empty."));
            it("should fail for whitespace directory path", () => expect(() => doesDirectoryExist("  \t")).to.throw(ArgumentError, "Value cannot be whitespace."));

            // TODO: write tests for invalid directory paths
            // // it("should fail for invalid directory path", () => expect(() => doesDirectoryExist("$~/\\")).to.throw(ArgumentError, "Value must be a valid directory path."));
        });
    });

    describe("doesFileExist()", () =>
    {
        describe("success", () => it("file should exist", () => testDoesFileExist()));

        describe("failure", () =>
        {
            it("should fail for null file path", () => expect(() => doesFileExist(null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for empty file path", () => expect(() => doesFileExist("")).to.throw(ArgumentError, "Value cannot be empty."));
            it("should fail for whitespace file path", () => expect(() => doesFileExist("  \t")).to.throw(ArgumentError, "Value cannot be whitespace."));

            // TODO: write tests for invalid file paths
            // // it("should fail for invalid file path", () => expect(() => doesFileExist("$~/\\")).to.throw(ArgumentError, "Value must be a valid directory path."));
        });
    });

    describe("isAbsoluteDirectoryPath()", () =>
    {
        describe("success", () =>
        {
            it("should return true for null", () => expect(isAbsoluteDirectoryPath(null)).to.equal(false));
            it("should return true for undefined", () => expect(isAbsoluteDirectoryPath(undefined)).to.equal(false));

            it("should return true for absolute directory path", () => expect(isAbsoluteDirectoryPath("C:\\")).to.equal(true));
            it("should return true for absolute directory path", () => expect(isAbsoluteDirectoryPath("C:\\temp")).to.equal(true));
            it("should return true for absolute directory path", () => expect(isAbsoluteDirectoryPath("C:\\temp\\")).to.equal(true));
            it("should return true for absolute directory path", () => expect(isAbsoluteDirectoryPath("C:\\temp\\sub folder")).to.equal(true));
            it("should return true for absolute directory path", () => expect(isAbsoluteDirectoryPath("C:/temp/sub folder")).to.equal(true));
            it("should return true for absolute directory path", () => expect(isAbsoluteDirectoryPath("C:\\temp\\sub folder\\")).to.equal(true));
            it("should return true for absolute directory path", () => expect(isAbsoluteDirectoryPath("C:\\temp\\sub_folder\\")).to.equal(true));
            it("should return true for absolute directory path", () => expect(isAbsoluteDirectoryPath("C:\\temp\\sub-folder\\")).to.equal(true));
            it("should return true for absolute directory path", () => expect(isAbsoluteDirectoryPath("C:\\temp\\sub-folder\\1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111")).to.equal(true));

            it("should return false for relative directory path", () => expect(isAbsoluteDirectoryPath(".\\temp\\")).to.equal(false));
            it("should return false for relative directory path", () => expect(isAbsoluteDirectoryPath(".\\temp")).to.equal(false));
            it("should return false for relative directory path", () => expect(isAbsoluteDirectoryPath("./temp")).to.equal(false));
            it("should return false for relative directory path", () => expect(isAbsoluteDirectoryPath("./temp/")).to.equal(false));
            it("should return false for relative directory path", () => expect(isAbsoluteDirectoryPath("./temp/")).to.equal(false));
            it("should return false for relative directory path", () => expect(isAbsoluteDirectoryPath("../temp/")).to.equal(false));
            it("should return false for relative directory path", () => expect(isAbsoluteDirectoryPath("temp")).to.equal(false));
            it("should return false for relative directory path", () => expect(isAbsoluteDirectoryPath("temp.txt")).to.equal(false));
        });

        describe("failure", () =>
        {
            // TODO: write tests for invalid directory paths
            // // it("should fail for invalid file path", () => expect(() => isAbsoluteFilePath("$~/\\")).to.throw(ArgumentError, "Value must be a valid directory path."));
        });
    });

    describe("isAbsoluteFilePath()", () =>
    {
        describe("success", () =>
        {
            it("should return true for null", () => expect(isAbsoluteFilePath(null)).to.equal(false));
            it("should return true for undefined", () => expect(isAbsoluteFilePath(undefined)).to.equal(false));

            it("should return true for absolute file path", () => expect(isAbsoluteFilePath("C:\\")).to.equal(true));
            it("should return true for absolute file path", () => expect(isAbsoluteFilePath("C:\\temp")).to.equal(true));
            it("should return true for absolute file path", () => expect(isAbsoluteFilePath("C:\\temp\\")).to.equal(true));
            it("should return true for absolute file path", () => expect(isAbsoluteFilePath("C:\\temp\\sub folder")).to.equal(true));
            it("should return true for absolute file path", () => expect(isAbsoluteFilePath("C:/temp/sub folder")).to.equal(true));
            it("should return true for absolute file path", () => expect(isAbsoluteFilePath("C:\\temp\\sub folder\\")).to.equal(true));
            it("should return true for absolute file path", () => expect(isAbsoluteFilePath("C:\\temp\\sub_folder\\")).to.equal(true));
            it("should return true for absolute file path", () => expect(isAbsoluteFilePath("C:\\temp\\sub-folder\\")).to.equal(true));
            it("should return true for absolute file path", () => expect(isAbsoluteFilePath("C:\\temp\\sub-folder\\1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111")).to.equal(true));

            it("should return false for relative file path", () => expect(isAbsoluteFilePath(".\\temp\\")).to.equal(false));
            it("should return false for relative file path", () => expect(isAbsoluteFilePath(".\\temp")).to.equal(false));
            it("should return false for relative file path", () => expect(isAbsoluteFilePath("./temp")).to.equal(false));
            it("should return false for relative file path", () => expect(isAbsoluteFilePath("./temp/")).to.equal(false));
            it("should return false for relative file path", () => expect(isAbsoluteFilePath("./temp/")).to.equal(false));
            it("should return false for relative file path", () => expect(isAbsoluteFilePath("../temp/")).to.equal(false));
            it("should return false for relative file path", () => expect(isAbsoluteFilePath("temp")).to.equal(false));
            it("should return false for relative file path", () => expect(isAbsoluteFilePath("temp.txt")).to.equal(false));
        });

        describe("failure", () =>
        {
            // TODO: write tests for invalid file paths
            // // it("should fail for invalid file path", () => expect(() => isAbsoluteFilePath("$~/\\")).to.throw(ArgumentError, "Value must be a valid directory path."));
        });
    });

    describe("isEmptyDirectory()", () =>
    {
        describe("success", () => it("directory should be empty", () => testIsEmptyDirectory()));

        describe("failure", () =>
        {
            it("should fail for null directory path", () => expect(() => isEmptyDirectory(null)).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for empty directory path", () => expect(() => isEmptyDirectory("")).to.throw(ArgumentError, "Value cannot be empty."));
            it("should fail for whitespace directory path", () => expect(() => isEmptyDirectory("  \t")).to.throw(ArgumentError, "Value must be a valid directory path."));

            // TODO: write tests for invalid directory paths
            // // it("should fail for invalid directory path", () => expect(() => isEmptyDirectory("$~/\\")).to.throw(ArgumentError, "Value must be a valid directory path."));
        });
    });

    describe("isValidDirectoryPath()", () =>
    {
        describe("success", () =>
        {
            it("should return true for null", () => expect(isValidDirectoryPath(null)).to.equal(true));
            it("should return true for undefined", () => expect(isValidDirectoryPath(undefined)).to.equal(true));
            it("should return false for empty string", () => expect(isValidDirectoryPath("")).to.equal(false));
            it("should return false for whitespace", () => expect(isValidDirectoryPath("    \t          ")).to.equal(false));

            it("should return true valid directory path", () => expect(isValidDirectoryPath("C:\\")).to.equal(true));
            it("should return true valid directory path", () => expect(isValidDirectoryPath("C:\\temp")).to.equal(true));
            it("should return true valid directory path", () => expect(isValidDirectoryPath("C:\\temp\\")).to.equal(true));
            it("should return true valid directory path", () => expect(isValidDirectoryPath("C:/temp")).to.equal(true));
            it("should return true valid directory path", () => expect(isValidDirectoryPath("C:/temp/")).to.equal(true));
            it("should return true valid directory path", () => expect(isValidDirectoryPath("temp")).to.equal(true));
            it("should return true valid directory path", () => expect(isValidDirectoryPath("./temp")).to.equal(true));
            it("should return true valid directory path", () => expect(isValidDirectoryPath("./temp")).to.equal(true));

            // TODO: write tests for invalid directory paths
            // // it("should return false invalid directory path", () => expect(isValidDirectoryPath("???")).to.equal(false));
        });
    });

    describe("isValidFilePath()", () =>
    {
        describe("success", () =>
        {
            it("should return true for null", () => expect(isValidFilePath(null)).to.equal(true));
            it("should return true for undefined", () => expect(isValidFilePath(undefined)).to.equal(true));
            it("should return false for empty string", () => expect(isValidFilePath("")).to.equal(false));
            it("should return false for whitespace", () => expect(isValidFilePath("    \t          ")).to.equal(false));

            it("should return true valid file path", () => expect(isValidFilePath("C:\\temp.txt")).to.equal(true));
            it("should return true valid file path", () => expect(isValidFilePath("C:\\temp.txt")).to.equal(true));
            it("should return true valid file path", () => expect(isValidFilePath("C:\\temp\\temp.txt")).to.equal(true));
            it("should return true valid file path", () => expect(isValidFilePath("C:/temp\\temp.txt")).to.equal(true));
            it("should return true valid file path", () => expect(isValidFilePath("C:/temp/temp.txt")).to.equal(true));
            it("should return true valid file path", () => expect(isValidFilePath("temp.txt")).to.equal(true));
            it("should return true valid file path", () => expect(isValidFilePath("./temp.txt")).to.equal(true));
            it("should return true valid file path", () => expect(isValidFilePath("./temp/temp.txt")).to.equal(true));

            // TODO: write tests for invalid file paths
            // // it("should return false invalid file path", () => expect(isValidFilePath("???")).to.equal(false));
        });
    });

    describe("isValidFileName()", () =>
    {
        describe("success", () =>
        {
            it("should return true for null", () => expect(isValidFileName(null)).to.equal(true));
            it("should return true for undefined", () => expect(isValidFileName(undefined)).to.equal(true));
            it("should return false for empty string", () => expect(isValidFileName("")).to.equal(false));
            it("should return false for whitespace", () => expect(isValidFileName("    \t          ")).to.equal(false));

            it("should return true valid file name", () => expect(isValidFileName("temp")).to.equal(true));
            it("should return true valid file name", () => expect(isValidFileName("temp.txt")).to.equal(true));

            it("should return false for file path", () => expect(isValidFileName("C:\\temp.txt")).to.equal(false));
            it("should return false for file path", () => expect(isValidFileName("C:\\temp\\temp.txt")).to.equal(false));
            it("should return false for file path", () => expect(isValidFileName("C:/temp\\temp.txt")).to.equal(false));
            // // it("should return false for file path", () => expect(isValidFileName("C:/temp/temp.txt")).to.equal(false));
            // // it("should return false for file path", () => expect(isValidFileName("./temp.txt")).to.equal(false));
            // // it("should return false for file path", () => expect(isValidFileName("./temp/temp.txt")).to.equal(false));

            // TODO: write tests for invalid file names
            // // it("should return false invalid file name", () => expect(isValidFileName("???")).to.equal(false));
        });
    });
});

function testDoesDirectoryExist(): void
{
    const directoryPath = "./temp";

    if (!fs.existsSync(directoryPath))
    {
        fs.mkdirSync(directoryPath);
    }

    expect(doesDirectoryExist(directoryPath)).to.equal(true);

    if (fs.existsSync(directoryPath))
    {
        rimraf.sync(directoryPath);
    }

    expect(doesDirectoryExist(directoryPath)).to.equal(false);
}

function testDoesFileExist(): void
{
    const filePath = "./temp.txt";

    if (!fs.existsSync(filePath))
    {
        fs.writeFileSync(filePath, "aaa");
    }

    expect(doesFileExist(filePath)).to.equal(true);

    if (fs.existsSync(filePath))
    {
        fs.unlinkSync(filePath);
    }

    expect(doesFileExist(filePath)).to.equal(false);
}

function testIsEmptyDirectory(): void
{
    const directoryPath = "./temp";
    const filePath = `${directoryPath}/temp.txt`;

    if (!fs.existsSync(directoryPath))
    {
        fs.mkdirSync(directoryPath);
    }

    expect(isEmptyDirectory(directoryPath)).to.equal(true);

    if (!fs.existsSync(filePath))
    {
        fs.writeFileSync(filePath, "aaa");
    }

    expect(isEmptyDirectory(directoryPath)).to.equal(false);

    if (fs.existsSync(directoryPath))
    {
        rimraf.sync(directoryPath);
    }
}
