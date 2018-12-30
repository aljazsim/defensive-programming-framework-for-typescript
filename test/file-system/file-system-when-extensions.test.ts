import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { whenDoesDirectoryExist, whenDoesFileExist, whenIsAbsoluteDirectoryPath, whenIsAbsoluteFilePath, whenIsEmptyDirectory, whenIsValidDirectoryPath, whenIsValidFileName, whenIsValidFilePath } from "../../source/file-system/file-system-when-extensions";
import { expect } from "chai";
import * as fs from "fs";
import * as rimraf from "rimraf";

describe("file system when extensions", () =>
{
    describe("whenDoesDirectoryExist()", () =>
    {
        describe("success", () => it("directory should exist", () => testWhenDoesDirectoryExist()));

        describe("failure", () =>
        {
            it("should fail for null directory path", () => expect(() => whenDoesDirectoryExist(null, "9")).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for empty directory path", () => expect(() => whenDoesDirectoryExist("", "9")).to.throw(ArgumentError, "Value cannot be empty."));
            it("should fail for whitespace directory path", () => expect(() => whenDoesDirectoryExist("  \t", "9")).to.throw(ArgumentError, "Value cannot be white space."));

            // TODO: write tests for invalid directory paths
            // // it("should fail for invalid directory path", () => expect(() => whenDoesDirectoryExist("$~/\\")).to.throw(ArgumentError, "Value when be a valid directory path."));
        });
    });

    describe("whenFileExist()", () =>
    {
        describe("success", () => it("file should not exist", () => testWhenDoesFileExist()));

        describe("failure", () =>
        {
            it("should fail for null directory path", () => expect(() => whenDoesFileExist(null, "9")).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for empty directory path", () => expect(() => whenDoesFileExist("", "9")).to.throw(ArgumentError, "Value cannot be empty."));
            it("should fail for whitespace directory path", () => expect(() => whenDoesFileExist("  \t", "9")).to.throw(ArgumentError, "Value cannot be white space."));

            // TODO: write tests for invalid directory paths
            // // it("should fail for invalid directory path", () => expect(() => whenFileExist("$~/\\")).to.throw(ArgumentError, "Value when be a valid directory path."));
        });
    });

    describe("whenIsAbsoluteDirectoryPath()", () =>
    {
        describe("success", () =>
        {
            it("should return null", () => expect(whenIsAbsoluteDirectoryPath(null, "9")).to.equal("9"));
            it("should return undefined", () => expect(whenIsAbsoluteDirectoryPath(undefined, "9")).to.equal("9"));

            it("should return default value", () => expect(whenIsAbsoluteDirectoryPath("C:\\", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsAbsoluteDirectoryPath("C:\\temp", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsAbsoluteDirectoryPath("C:\\temp\\", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsAbsoluteDirectoryPath("C:\\temp\\sub folder", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsAbsoluteDirectoryPath("C:/temp/sub folder", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsAbsoluteDirectoryPath("C:\\temp\\sub folder\\", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsAbsoluteDirectoryPath("C:\\temp\\sub_folder\\", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsAbsoluteDirectoryPath("C:\\temp\\sub-folder\\", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsAbsoluteDirectoryPath("C:\\temp\\sub-folder\\1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", "9")).to.equal("9"));

            it("should return relative directory path", () => expect(whenIsAbsoluteDirectoryPath(".\\temp\\", "9")).to.equal(".\\temp\\"));
            it("should return relative directory path", () => expect(whenIsAbsoluteDirectoryPath(".\\temp", "9")).to.equal(".\\temp"));
            it("should return relative directory path", () => expect(whenIsAbsoluteDirectoryPath("./temp", "9")).to.equal("./temp"));
            it("should return relative directory path", () => expect(whenIsAbsoluteDirectoryPath("./temp/", "9")).to.equal("./temp/"));
            it("should return relative directory path", () => expect(whenIsAbsoluteDirectoryPath("../temp/", "9")).to.equal("../temp/"));
            it("should return relative directory path", () => expect(whenIsAbsoluteDirectoryPath("temp", "9")).to.equal("temp"));
            it("should return relative directory path", () => expect(whenIsAbsoluteDirectoryPath("temp.txt", "9")).to.equal("temp.txt"));
        });

        describe("failure", () =>
        {
            // TODO: write tests for invalid directory paths
            // // it("should fail for invalid file path", () => expect(() => isAbsoluteFilePath("$~/\\")).to.throw(ArgumentError, "Value when be a valid directory path."));
        });

    });

    describe("whenIsAbsoluteDirectoryPath()", () =>
    {
        describe("success", () =>
        {
            it("should return true for null", () => expect(whenIsAbsoluteFilePath(null, "9")).to.equal("9"));
            it("should return true for undefined", () => expect(whenIsAbsoluteFilePath(undefined, "9")).to.equal("9"));

            it("should return default value", () => expect(whenIsAbsoluteFilePath("C:\\", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsAbsoluteFilePath("C:\\temp", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsAbsoluteFilePath("C:\\temp\\", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsAbsoluteFilePath("C:\\temp\\sub folder", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsAbsoluteFilePath("C:/temp/sub folder", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsAbsoluteFilePath("C:\\temp\\sub folder\\", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsAbsoluteFilePath("C:\\temp\\sub_folder\\", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsAbsoluteFilePath("C:\\temp\\sub-folder\\", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsAbsoluteFilePath("C:\\temp\\sub-folder\\1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", "9")).to.equal("9"));

            it("should fail for relative file path", () => expect(whenIsAbsoluteFilePath(".\\temp\\", "9")).to.equal(".\\temp\\"));
            it("should fail for relative file path", () => expect(whenIsAbsoluteFilePath(".\\temp", "9")).to.equal(".\\temp"));
            it("should fail for relative file path", () => expect(whenIsAbsoluteFilePath("./temp", "9")).to.equal("./temp"));
            it("should fail for relative file path", () => expect(whenIsAbsoluteFilePath("./temp/", "9")).to.equal("./temp/"));
            it("should fail for relative file path", () => expect(whenIsAbsoluteFilePath("./temp/", "9")).to.equal("./temp/"));
            it("should fail for relative file path", () => expect(whenIsAbsoluteFilePath("../temp/", "9")).to.equal("../temp/"));
            it("should fail for relative file path", () => expect(whenIsAbsoluteFilePath("temp", "9")).to.equal("temp"));
            it("should fail for relative file path", () => expect(whenIsAbsoluteFilePath("temp.txt", "9")).to.equal("temp.txt"));
        });

        describe("failure", () =>
        {
            // TODO: write tests for invalid directory paths
            // // it("should fail for invalid file path", () => expect(() => isAbsoluteFilePath("$~/\\")).to.throw(ArgumentError, "Value when be a valid directory path."));
        });
    });

    describe("whenIsEmptyDirectory()", () =>
    {
        describe("success", () =>
        {
            it("directory should be empty", () => testWhenIsEmptyDirectory());
        });

        describe("failure", () =>
        {
            it("should fail for null directory path", () => expect(() => whenIsEmptyDirectory(null, "9")).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null directory path", () => expect(() => whenIsEmptyDirectory(undefined, "9")).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for empty directory path", () => expect(() => whenIsEmptyDirectory("", "9")).to.throw(ArgumentError, "Value cannot be empty."));
            it("should fail for whitespace directory path", () => expect(() => whenIsEmptyDirectory("  \t", "9")).to.throw(ArgumentError, "Value must be a valid directory path."));
            // TODO: write tests for invalid directory paths
            // // it("should fail for invalid directory path", () => expect(() => isEmptyDirectory("$~/\\")).to.throw(ArgumentError, "Value must be a valid directory path."));
        });
    });

    describe("whenIsValidDirectoryPath()", () =>
    {
        describe("success", () =>
        {
            it("should return null", () => expect(whenIsValidDirectoryPath(null, "9")).to.equal("9"));
            it("should return undefined", () => expect(whenIsValidDirectoryPath(undefined, "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsValidDirectoryPath("C:\\", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsValidDirectoryPath("C:\\temp", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsValidDirectoryPath("C:\\temp\\", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsValidDirectoryPath("C:/temp", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsValidDirectoryPath("C:/temp/", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsValidDirectoryPath("temp", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsValidDirectoryPath("./temp/", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsValidDirectoryPath("./temp", "9")).to.equal("9"));

            it("should return invalid directory path", () => expect(whenIsValidDirectoryPath("", "9")).to.equal(""));
            it("should return invalid directory path", () => expect(whenIsValidDirectoryPath("    \t          ", "9")).to.equal("    \t          "));
            // TODO: write tests for invalid directory paths
            // // it("should return false invalid directory path", () => expect(whenIsValidDirectoryPath("???")).to.equal("???"));

        });
    });

    describe("whenIsValidFilePath()", () =>
    {
        describe("success", () =>
        {
            it("should fail for null", () => expect(whenIsValidFilePath(null, "9")).to.equal("9"));
            it("should fail for undefined", () => expect(whenIsValidFilePath(undefined, "9")).to.equal("9"));

            it("should fail for valid file path", () => expect(whenIsValidFilePath("C:\\temp.txt", "9")).to.equal("9"));
            it("should fail for valid file path", () => expect(whenIsValidFilePath("C:\\temp\\temp.txt", "9")).to.equal("9"));
            it("should fail for valid file path", () => expect(whenIsValidFilePath("C:/temp\\temp.txt", "9")).to.equal("9"));
            it("should fail for valid file path", () => expect(whenIsValidFilePath("C:/temp/temp.txt", "9")).to.equal("9"));
            it("should fail for valid file path", () => expect(whenIsValidFilePath("temp.txt", "9")).to.equal("9"));
            it("should fail for valid file path", () => expect(whenIsValidFilePath("./temp.txt", "9")).to.equal("9"));
            it("should fail for valid file path", () => expect(whenIsValidFilePath("./temp/temp.txt", "9")).to.equal("9"));

            it("should return false for empty string", () => expect(whenIsValidFilePath("", "9")).to.equal(""));
            it("should return false for whitespace", () => expect(whenIsValidFilePath("    \t          ", "9")).to.equal("    \t          "));

            // TODO: write tests for invalid file paths
            // // it("should return false invalid file path", () => expect(whenIsValidFilePath("???")).to.equal("???"));
        });
    });

    describe("whenIsValidFileName()", () =>
    {
        describe("success", () =>
        {
            it("should return null", () => expect(whenIsValidFileName(null, "9")).to.equal("9"));
            it("should return undefined", () => expect(whenIsValidFileName(undefined, "9")).to.equal("9"));

            it("should return default value", () => expect(whenIsValidFileName("temp", "9")).to.equal("9"));
            it("should return default value", () => expect(whenIsValidFileName("temp.txt", "9")).to.equal("9"));

            it("should return empty string", () => expect(whenIsValidFileName("", "9")).to.equal(""));
            it("should return whitespace", () => expect(whenIsValidFileName("    \t          ", "9")).to.equal("    \t          "));
            it("should return a valid file name", () => expect(whenIsValidFileName("C:\\temp.txt", "9")).to.equal("C:\\temp.txt"));
            it("should return a valid file name", () => expect(whenIsValidFileName("C:\\temp\\temp.txt", "9")).to.equal("C:\\temp\\temp.txt"));
            it("should return a valid file name", () => expect(whenIsValidFileName("C:/temp\\temp.txt", "9")).to.equal("C:/temp\\temp.txt"));
            // // it("should return a valid file name", () => expect(whenIsValidFileName("C:/temp/temp.txt", "9")).to.equal("C:/temp/temp.txt"));
            // // it("should return a valid file name", () => expect(whenIsValidFileName("./temp.txt", "9")).to.equal("./temp.txt"));
            // // it("should return a valid file name", () => expect(whenIsValidFileName("./temp/temp.txt", "9")).to.equal("./temp/temp.txt"));
            // TODO: write tests for invalid file names
            // // it("should return false invalid file path", () => expect(whenIsValidFileName("???")).to.throw(ArgumentError, "Value when be a valid file name."));
        });
    });
});

function testWhenDoesDirectoryExist(): void
{
    const directoryPath = "./temp";

    if (fs.existsSync(directoryPath))
    {
        rimraf.sync(directoryPath);
    }

    fs.mkdirSync(directoryPath);

    expect(whenDoesDirectoryExist(directoryPath, "9")).to.equal("9");

    if (fs.existsSync(directoryPath))
    {
        rimraf.sync(directoryPath);
    }

    expect(whenDoesDirectoryExist(directoryPath, "9")).to.equal(directoryPath);
}

function testWhenDoesFileExist(): void
{
    const filePath = "./temp.txt";

    if (!fs.existsSync(filePath))
    {
        fs.writeFileSync(filePath, "aaa");
    }

    expect(whenDoesFileExist(filePath, "9")).to.equal("9");

    if (fs.existsSync(filePath))
    {
        fs.unlinkSync(filePath);
    }

    expect(whenDoesFileExist(filePath, "9")).to.equal(filePath);
}

function testWhenIsEmptyDirectory(): void
{
    const directoryPath = "./temp";
    const filePath = `${directoryPath}/temp.txt`;

    if (fs.existsSync(directoryPath))
    {
        rimraf.sync(directoryPath);
    }

    fs.mkdirSync(directoryPath);

    expect(whenIsEmptyDirectory(directoryPath, "9")).to.equal("9");

    fs.writeFileSync(filePath, "aaa");

    expect(whenIsEmptyDirectory(directoryPath, "9")).to.equal(directoryPath);

    rimraf.sync(directoryPath);
}
