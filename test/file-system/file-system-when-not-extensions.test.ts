import "mocha";
import { ArgumentError } from "../../source/argument-error";
import { whenDoesNotDirectoryExist, whenDoesNotFileExist, whenIsNotAbsoluteDirectoryPath, whenIsNotAbsoluteFilePath, whenIsNotEmptyDirectory, whenIsNotValidDirectoryPath, whenIsNotValidFileName, whenIsNotValidFilePath } from "../../source/file-system/file-system-when-not-extensions";
import { expect } from "chai";
import * as fs from "fs";
import * as rimraf from "rimraf";

describe("file system when extensions", () =>
{
    describe("whenDoesNotDirectoryExist()", () =>
    {
        describe("success", () => it("directory should exist", () => testWhenDoesDirectoryExist()));

        describe("failure", () =>
        {
            it("should fail for null directory path", () => expect(() => whenDoesNotDirectoryExist(null, "9")).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for empty directory path", () => expect(() => whenDoesNotDirectoryExist("", "9")).to.throw(ArgumentError, "Value cannot be empty."));
            it("should fail for whitespace directory path", () => expect(() => whenDoesNotDirectoryExist("  \t", "9")).to.throw(ArgumentError, "Value cannot be whitespace."));

            // TODO: write tests for invalid directory paths
            // // it("should fail for invalid directory path", () => expect(() => whenDoesNotDirectoryExist("$~/\\")).to.throw(ArgumentError, "Value when be a valid directory path."));
        });
    });

    describe("whenFileExist()", () =>
    {
        describe("success", () => it("file should not exist", () => testWhenDoesFileExist()));

        describe("failure", () =>
        {
            it("should fail for null directory path", () => expect(() => whenDoesNotFileExist(null, "9")).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for empty directory path", () => expect(() => whenDoesNotFileExist("", "9")).to.throw(ArgumentError, "Value cannot be empty."));
            it("should fail for whitespace directory path", () => expect(() => whenDoesNotFileExist("  \t", "9")).to.throw(ArgumentError, "Value cannot be whitespace."));

            // TODO: write tests for invalid directory paths
            // // it("should fail for invalid directory path", () => expect(() => whenFileExist("$~/\\")).to.throw(ArgumentError, "Value when be a valid directory path."));
        });
    });

    describe("whenIsNotAbsoluteDirectoryPath()", () =>
    {
        describe("success", () =>
        {
            it("should return null", () => expect(whenIsNotAbsoluteDirectoryPath(null, "9")).to.equal(null));
            it("should return undefined", () => expect(whenIsNotAbsoluteDirectoryPath(undefined, "9")).to.equal(undefined));

            it("should return default value", () => expect(whenIsNotAbsoluteDirectoryPath("C:\\", "9")).to.equal("C:\\"));
            it("should return default value", () => expect(whenIsNotAbsoluteDirectoryPath("C:\\temp", "9")).to.equal("C:\\temp"));
            it("should return default value", () => expect(whenIsNotAbsoluteDirectoryPath("C:\\temp\\", "9")).to.equal("C:\\temp\\"));
            it("should return default value", () => expect(whenIsNotAbsoluteDirectoryPath("C:\\temp\\sub folder", "9")).to.equal("C:\\temp\\sub folder"));
            it("should return default value", () => expect(whenIsNotAbsoluteDirectoryPath("C:/temp/sub folder", "9")).to.equal("C:/temp/sub folder"));
            it("should return default value", () => expect(whenIsNotAbsoluteDirectoryPath("C:\\temp\\sub folder\\", "9")).to.equal("C:\\temp\\sub folder\\"));
            it("should return default value", () => expect(whenIsNotAbsoluteDirectoryPath("C:\\temp\\sub_folder\\", "9")).to.equal("C:\\temp\\sub_folder\\"));
            it("should return default value", () => expect(whenIsNotAbsoluteDirectoryPath("C:\\temp\\sub-folder\\", "9")).to.equal("C:\\temp\\sub-folder\\"));
            it("should return default value", () => expect(whenIsNotAbsoluteDirectoryPath("C:\\temp\\sub-folder\\1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", "9")).to.equal("C:\\temp\\sub-folder\\1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"));

            it("should return relative directory path", () => expect(whenIsNotAbsoluteDirectoryPath(".\\temp\\", "9")).to.equal("9"));
            it("should return relative directory path", () => expect(whenIsNotAbsoluteDirectoryPath(".\\temp", "9")).to.equal("9"));
            it("should return relative directory path", () => expect(whenIsNotAbsoluteDirectoryPath("./temp", "9")).to.equal("9"));
            it("should return relative directory path", () => expect(whenIsNotAbsoluteDirectoryPath("./temp/", "9")).to.equal("9"));
            it("should return relative directory path", () => expect(whenIsNotAbsoluteDirectoryPath("../temp/", "9")).to.equal("9"));
            it("should return relative directory path", () => expect(whenIsNotAbsoluteDirectoryPath("temp", "9")).to.equal("9"));
            it("should return relative directory path", () => expect(whenIsNotAbsoluteDirectoryPath("temp.txt", "9")).to.equal("9"));
        });

        describe("failure", () =>
        {
            // TODO: write tests for invalid directory paths
            // // it("should fail for invalid file path", () => expect(() => isAbsoluteFilePath("$~/\\")).to.throw(ArgumentError, "Value when be a valid directory path."));
        });

    });

    describe("whenIsNotAbsoluteDirectoryPath()", () =>
    {
        describe("success", () =>
        {
            it("should return true for null", () => expect(whenIsNotAbsoluteFilePath(null, "9")).to.equal(null));
            it("should return true for undefined", () => expect(whenIsNotAbsoluteFilePath(undefined, "9")).to.equal(undefined));

            it("should return default value", () => expect(whenIsNotAbsoluteFilePath("C:\\", "9")).to.equal("C:\\"));
            it("should return default value", () => expect(whenIsNotAbsoluteFilePath("C:\\temp", "9")).to.equal("C:\\temp"));
            it("should return default value", () => expect(whenIsNotAbsoluteFilePath("C:\\temp\\", "9")).to.equal("C:\\temp\\"));
            it("should return default value", () => expect(whenIsNotAbsoluteFilePath("C:\\temp\\sub folder", "9")).to.equal("C:\\temp\\sub folder"));
            it("should return default value", () => expect(whenIsNotAbsoluteFilePath("C:/temp/sub folder", "9")).to.equal("C:/temp/sub folder"));
            it("should return default value", () => expect(whenIsNotAbsoluteFilePath("C:\\temp\\sub folder\\", "9")).to.equal("C:\\temp\\sub folder\\"));
            it("should return default value", () => expect(whenIsNotAbsoluteFilePath("C:\\temp\\sub_folder\\", "9")).to.equal("C:\\temp\\sub_folder\\"));
            it("should return default value", () => expect(whenIsNotAbsoluteFilePath("C:\\temp\\sub-folder\\", "9")).to.equal("C:\\temp\\sub-folder\\"));
            it("should return default value", () => expect(whenIsNotAbsoluteFilePath("C:\\temp\\sub-folder\\1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", "9")).to.equal("C:\\temp\\sub-folder\\1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"));

            it("should fail for relative file path", () => expect(whenIsNotAbsoluteFilePath(".\\temp\\", "9")).to.equal("9"));
            it("should fail for relative file path", () => expect(whenIsNotAbsoluteFilePath(".\\temp", "9")).to.equal("9"));
            it("should fail for relative file path", () => expect(whenIsNotAbsoluteFilePath("./temp", "9")).to.equal("9"));
            it("should fail for relative file path", () => expect(whenIsNotAbsoluteFilePath("./temp/", "9")).to.equal("9"));
            it("should fail for relative file path", () => expect(whenIsNotAbsoluteFilePath("./temp/", "9")).to.equal("9"));
            it("should fail for relative file path", () => expect(whenIsNotAbsoluteFilePath("../temp/", "9")).to.equal("9"));
            it("should fail for relative file path", () => expect(whenIsNotAbsoluteFilePath("temp", "9")).to.equal("9"));
            it("should fail for relative file path", () => expect(whenIsNotAbsoluteFilePath("temp.txt", "9")).to.equal("9"));
        });

        describe("failure", () =>
        {
            // TODO: write tests for invalid directory paths
            // // it("should fail for invalid file path", () => expect(() => isAbsoluteFilePath("$~/\\")).to.throw(ArgumentError, "Value when be a valid directory path."));
        });
    });

    describe("whenIsNotEmptyDirectory()", () =>
    {
        describe("success", () =>
        {
            it("directory should be empty", () => testWhenIsEmptyDirectory());
        });

        describe("failure", () =>
        {
            it("should fail for null directory path", () => expect(() => whenIsNotEmptyDirectory(null, "9")).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for null directory path", () => expect(() => whenIsNotEmptyDirectory(undefined, "9")).to.throw(ArgumentError, "Value cannot be null."));
            it("should fail for empty directory path", () => expect(() => whenIsNotEmptyDirectory("", "9")).to.throw(ArgumentError, "Value cannot be empty."));
            it("should fail for whitespace directory path", () => expect(() => whenIsNotEmptyDirectory("  \t", "9")).to.throw(ArgumentError, "Value must be a valid directory path."));
            // TODO: write tests for invalid directory paths
            // // it("should fail for invalid directory path", () => expect(() => isEmptyDirectory("$~/\\")).to.throw(ArgumentError, "Value must be a valid directory path."));
        });
    });

    describe("whenIsNotValidDirectoryPath()", () =>
    {
        describe("success", () =>
        {
            it("should return null", () => expect(whenIsNotValidDirectoryPath(null, "9")).to.equal(null));
            it("should return undefined", () => expect(whenIsNotValidDirectoryPath(undefined, "9")).to.equal(undefined));
            it("should return default value", () => expect(whenIsNotValidDirectoryPath("C:\\", "9")).to.equal("C:\\"));
            it("should return default value", () => expect(whenIsNotValidDirectoryPath("C:\\temp", "9")).to.equal("C:\\temp"));
            it("should return default value", () => expect(whenIsNotValidDirectoryPath("C:\\temp\\", "9")).to.equal("C:\\temp\\"));
            it("should return default value", () => expect(whenIsNotValidDirectoryPath("C:/temp", "9")).to.equal("C:/temp"));
            it("should return default value", () => expect(whenIsNotValidDirectoryPath("C:/temp/", "9")).to.equal("C:/temp/"));
            it("should return default value", () => expect(whenIsNotValidDirectoryPath("temp", "9")).to.equal("temp"));
            it("should return default value", () => expect(whenIsNotValidDirectoryPath("./temp/", "9")).to.equal("./temp/"));
            it("should return default value", () => expect(whenIsNotValidDirectoryPath("./temp", "9")).to.equal("./temp"));

            it("should return invalid directory path", () => expect(whenIsNotValidDirectoryPath("", "9")).to.equal("9"));
            it("should return invalid directory path", () => expect(whenIsNotValidDirectoryPath("    \t          ", "9")).to.equal("9"));
            // TODO: write tests for invalid directory paths
            // // it("should return false invalid directory path", () => expect(whenIsNotValidDirectoryPath("???")).to.equal("???"));

        });
    });

    describe("whenIsNotValidFilePath()", () =>
    {
        describe("success", () =>
        {
            it("should fail for null", () => expect(whenIsNotValidFilePath(null, "9")).to.equal(null));
            it("should fail for undefined", () => expect(whenIsNotValidFilePath(undefined, "9")).to.equal(undefined));

            it("should fail for valid file path", () => expect(whenIsNotValidFilePath("C:\\temp.txt", "9")).to.equal("C:\\temp.txt"));
            it("should fail for valid file path", () => expect(whenIsNotValidFilePath("C:\\temp\\temp.txt", "9")).to.equal("C:\\temp\\temp.txt"));
            it("should fail for valid file path", () => expect(whenIsNotValidFilePath("C:/temp\\temp.txt", "9")).to.equal("C:/temp\\temp.txt"));
            it("should fail for valid file path", () => expect(whenIsNotValidFilePath("C:/temp/temp.txt", "9")).to.equal("C:/temp/temp.txt"));
            it("should fail for valid file path", () => expect(whenIsNotValidFilePath("temp.txt", "9")).to.equal("temp.txt"));
            it("should fail for valid file path", () => expect(whenIsNotValidFilePath("./temp.txt", "9")).to.equal("./temp.txt"));
            it("should fail for valid file path", () => expect(whenIsNotValidFilePath("./temp/temp.txt", "9")).to.equal("./temp/temp.txt"));

            it("should return false for empty string", () => expect(whenIsNotValidFilePath("", "9")).to.equal("9"));
            it("should return false for whitespace", () => expect(whenIsNotValidFilePath("    \t          ", "9")).to.equal("9"));

            // TODO: write tests for invalid file paths
            // // it("should return false invalid file path", () => expect(whenIsNotValidFilePath("???")).to.equal("???"));
        });
    });

    describe("whenIsNotValidFileName()", () =>
    {
        describe("success", () =>
        {
            it("should return null", () => expect(whenIsNotValidFileName(null, "9")).to.equal(null));
            it("should return undefined", () => expect(whenIsNotValidFileName(undefined, "9")).to.equal(undefined));

            it("should return default value", () => expect(whenIsNotValidFileName("temp", "9")).to.equal("temp"));
            it("should return default value", () => expect(whenIsNotValidFileName("temp.txt", "9")).to.equal("temp.txt"));

            it("should return empty string", () => expect(whenIsNotValidFileName("", "9")).to.equal("9"));
            it("should return whitespace", () => expect(whenIsNotValidFileName("    \t          ", "9")).to.equal("9"));
            it("should return a valid file name", () => expect(whenIsNotValidFileName("C:\\temp.txt", "9")).to.equal("9"));
            it("should return a valid file name", () => expect(whenIsNotValidFileName("C:\\temp\\temp.txt", "9")).to.equal("9"));
            it("should return a valid file name", () => expect(whenIsNotValidFileName("C:/temp\\temp.txt", "9")).to.equal("9"));
            // // it("should return a valid file name", () => expect(whenIsNotValidFileName("C:/temp/temp.txt", "9")).to.equal("9"));
            // // it("should return a valid file name", () => expect(whenIsNotValidFileName("./temp.txt", "9")).to.equal("9"));
            // // it("should return a valid file name", () => expect(whenIsNotValidFileName("./temp/temp.txt", "9")).to.equal("9"));
            // TODO: write tests for invalid file names
            // // it("should return false invalid file path", () => expect(whenIsNotValidFileName("???")).to.throw(ArgumentError, "Value when be a valid file name."));
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

    expect(whenDoesNotDirectoryExist(directoryPath, "9")).to.equal(directoryPath);

    if (fs.existsSync(directoryPath))
    {
        rimraf.sync(directoryPath);
    }

    expect(whenDoesNotDirectoryExist(directoryPath, "9")).to.equal("9");
}

function testWhenDoesFileExist(): void
{
    const filePath = "./temp.txt";

    if (!fs.existsSync(filePath))
    {
        fs.writeFileSync(filePath, "aaa");
    }

    expect(whenDoesNotFileExist(filePath, "9")).to.equal(filePath);

    if (fs.existsSync(filePath))
    {
        fs.unlinkSync(filePath);
    }

    expect(whenDoesNotFileExist(filePath, "9")).to.equal("9");
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

    expect(whenIsNotEmptyDirectory(directoryPath, "9")).to.equal(directoryPath);

    fs.writeFileSync(filePath, "aaa");

    expect(whenIsNotEmptyDirectory(directoryPath, "9")).to.equal("9");

    rimraf.sync(directoryPath);
}
