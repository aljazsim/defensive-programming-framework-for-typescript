import * as fs from "fs";
import { ArgumentError } from "../../source/argument-error";
import { doesDirectoryExist } from "../../source/file-system/file-system-is-extensions";
import { expect } from "chai";
import "mocha";

describe("file system is extensions", () =>
{
	describe("doesDirectoryExist()", () =>
	{
		describe("success", () =>
		{
			// // it("directory should exist", () => testDoesDirectoryExist());
		});

		describe("failure", () =>
		{
			it("should fail for null directory path", () => expect(() => doesDirectoryExist(null)).to.throw(ArgumentError, "Value cannot be null."));
			it("should fail for empty directory path", () => expect(() => doesDirectoryExist("")).to.throw(ArgumentError, "Value cannot be empty."));
			it("should fail for whitespace directory path", () => expect(() => doesDirectoryExist("  \t")).to.throw(ArgumentError, "Value cannot be whitespace."));
			it("should fail for invalid directory path", () => expect(() => doesDirectoryExist("$~/\\")).to.throw(ArgumentError, "Value must be a valid directory path."));
		});

	});
});

function testDoesDirectoryExist(): void
{
	const dir = "./temp";

	if (!fs.existsSync(dir))
	{
		fs.mkdirSync(dir);
	}

	expect(doesDirectoryExist(dir)).to.equal(true);

	fs.rmdirSync(dir);

	expect(doesDirectoryExist(dir)).to.equal(false);
}
