# Defensive programming framework for TypeScript

Defensive programing is a programming style that practices thorough validation of function input parameters resulting in robust code that allows function execution only in case of valid input or terminates it otherwise.

Despite the benefits most software developers choose to skip this step, since it requires extra time and effort to validate input, inflates code and makes functions harder to understand and more difficult to maintain.

Example:

```typescript
export function write(buffer: number[], startIndex: number, data: number[])
{
    //  input validation
    if (buffer === null)
    {
        throw new ArgumentError("Value cannot be null.");
    }

    if (startIndex < 0)
    {
        throw new ArgumentError("Value cannot be less than 0.");
    }

    if (data === null)
    {
        throw new ArgumentError("Value cannot be null.");
    }

    if (data.length >= buffer.length - startIndex)
    {
        throw new ArgumentError(`Length cannot be greater than ${buffer.Length - startIndex}.`);
    }

    // actual execution code
    ...
}
```

Input validation can take a large portion of the function and should be reduced if possible.  Such code is repeated in most functions over and over again with slight variations.

This is where defensive programming framework helps out with a set of functions that allow a short and simple way to validate input.

Previous example using the defensive programming framework:

```typescript
export function write(buffer: number[], startIndex: number, data: number[])
{
    // input validation
    cannotBeNull(buffer); // throws new ArgumentError if buffer == null
    mustBeGreaterThanOrEqualTo(startIndex, 0); // throws new ArgumentError if startIndex <= 0
    cannotBeNull(data); // throws new ArgumentError if data == null
    mustBeLessThanOrEqualTo(data.length, buffer.length - startIndex); // throws new ArgumentError if data.Length > buffer.Length - startIndex

    // actual execution code
    ...
}
```

When one of the conditions fails, function execution will terminate by throwing an ArgumentError at where the validation function is called.

 A different way of validation would allow us to continue execution in some cases by correcting some of the input instead. This approach might not always be possible.

Example:

```typescript
export function write(buffer: number[], startIndex: number, data: number[])
{
    // input validation
    cannotBeNull(buffer); // throws new ArgumentError if buffer == null
    startIndex = whenIsLessThan(startIndex, 0, 0); // returns 0 if startIndex < 0
    data = whenIsNull(data, []); // returns empty byte array if data == null
    mustBeLessThanOrEqualTo(data.length, buffer.length - startIndex);

    // actual execution code
}
```

As evident from the examples function input validation with defensive programming framework is shorter and clearer than the original one.

## Validation types

Validation can be either **unconditional** and **optional**.

## Unconditional validation

Failing unconditional validation results in termination of execution by throwing an ArgumentError. There are two forms of unconditional validation: conditions that must result in true and conditions that cannot result in true.

### Must conditions

Must conditions specify that the result of the condition must be valid or true, otherwise execution will terminate.

Examples:

- value must be equal to a specified value,
- value must match a specified regular expression,
- value must be greater than or equal to a specified limit,
- evaluated function must result in true.

```typescript
mustBeEqualTo(minValue, 3);
mustMatch(text, /^[0-9]+$/);
mustBeGreaterThanOrEqualTo(index, 0);
mustBeLessThan(index, items.length);
mustBe(items, x => x != null);
mustBeAbsoluteDirectoryPath(directoryPath);
mustFileExist(filePath);
```

### Cannot conditions

Cannot conditions specify that the result of the condition must be invalid or false, otherwise execution will terminate.

Example:

- value cannot be null,
- collection cannot be empty,
- collection cannot contain null values,
- collection cannot contain duplicates,
- value cannot be belong to a predefined list of values,
- file path cannot contain invalid characters.

```typescript
cannotBeNull(url);
cannotBeEmpty(collection); // does not throw ArgumentError if null, only if empty
cannotContainNull(items);
cannotContainDuplicates(list);
cannotBeOneOf(text, "a", "b", "c");
cannotBe(filePath, x => filePath.endsWith(".bak"));
```

## Optional validation

Optional validation allows for invalid input to be substituted with a valid one when not conforming to the limitations specified. There are two forms of optional validation: when a result of a condition is true and when a result of a condition is false.

### When conditions

When conditions allow to substitute current value with a default one value when the result of evaluation is true.

Example:

- when value is between specified limits, substitute it with a default value,
- when value is contains duplicates, substitute it with distinct values,
- when a collection contains a null value, return same collection without null items.

```typescript
number = whenIsBetween(number, Number.MIN_SAFE_INTEGER, 0, true, 0);
collection = whenContainsDuplicates(collection, collection.filter((value, i) => collection.indexOf(value) === i));
lines = whenContainsNull(lines, lines.filter(x => x !== null));
```

### When not conditions

When not conditions allow to substitute current value with a default one value when the result of evaluation is false.

Example:

- when a string is not trimmed, substitute it with  a trimmed string,
- when value does not match a specified regular expression, substitute it with a default value,
- when a value does not belong a predefined set of values, substitute it with a default value.

```typescript
filePath = whenIsNot(filePath, x => x.trim() === x, filePath.trim());
text = whenIsNotMatch(text, /^[0-9]$/, "0");
letter = whenIsNotOneOf(letter, ["a", "b", "c"], "a");
filePath = whenIsNotAbsoluteFilePath(filePath, path.isAbsolute(filePath));
```

## Utility functions

For checking a certain condition you have the option of using affirmative utility validation functions:

```typescript
if (isNullOrEmpty(url))
{
}

if (containsDuplicates(items))
{
}
```

## Naming convention

All validation functions exist in must, cannot, when, when not and affirmative combination and follow the following naming convention:

- must functions start with "must",
- cannot functions start with "cannot",
- when functions start with "when",
- when not functions start with "when + Condition + Not",
- affirmative utility functions start "is", "does" or "contains".

## List of validation functions

### Object validation functions

| is          | must            | cannot            | when            | when not           |
| ----------- | --------------- | ----------------- | --------------- | ------------------ |
| is          | mustBe          | cannotBe          | whenIs          | whenIsNot          |
| isEqualTo   | mustBeEqualTo   | cannotBeEqualTo   | whenIsEqualTo   | whenIsNotEqualTo   |
| isNull      | mustBeNull      | cannotBeNull      | whenIsNull      | whenIsNotNull      |
| isOneOf     | mustBeOneOf     | cannotBeOneOf     | whenIsOneOf     | whenIsNotOneOf     |
| isSubTypeOf | mustBeSubTypeOf | cannotBeSubTypeOf | whenIsSubTypeOf | whenIsNotSubTypeOf |
| isTypeOf    | mustBeTypeOf    | cannotBeTypeOf    | whenIsTypeOf    | whenIsNotTypeOf    |

Note: undefined is treated as null (e. g. cannotBeNull(undefined) will throw an ArgumentError the same way cannotBeNull(null) would.

### String validation functions

| is                 | must                   | cannot                   | when                   | when not                  |
| ------------------ | ---------------------- | ------------------------ | ---------------------- | ------------------------- |
| isEmpty            | mustBeEmpty            | cannotBeEmpty            | whenIsEmpty            | whenIsNotEmpty            |
| isNullOrEmpty      | mustBeNullOrEmpty      | cannotBeNullOrEmpty      | whenIsNullOrEmpty      | whenIsNotNullOrEmpty      |
| isNullOrWhitespace | mustBeNullOrWhitespace | cannotBeNullOrWhitespace | whenIsNullOrWhitespace | whenIsNotNullOrWhitespace |
| isMatch            | mustMatch              | cannotMatch              | whenIsMatch            | whenIsNotMatch            |

### Number validation functions

| is                     | must                       | cannot                       | when                       | when not                      |
| ---------------------- | -------------------------- | ---------------------------- | -------------------------- | ----------------------------- |
| isBetween              | mustBeBetween              | cannotBeBetween              | whenIsBetween              | whenIsNotBetween              |
| isFloat                | mustBeFloat                | cannotBeFloat                | whenIsFloat                | whenIsNotFloat                |
| isGreaterThan          | mustBeGreaterThan          | cannotBeGreaterThan          | whenIsGreaterThan          | whenIsNotGreaterThan          |
| isGreaterThanOrEqualTo | mustBeGreaterThanOrEqualTo | cannotBeGreaterThanOrEqualTo | whenIsGreaterThanOrEqualTo | whenIsNotGreaterThanOrEqualTo |
| isInteger              | mustBeInteger              | cannotBeInteger              | whenIsInteger              | whenIsNotInteger              |
| isLessThan             | mustBeLessThan             | cannotBeLessThan             | whenIsLessThan             | whenIsNotLessThan             |
| isLessThanOrEqualTo    | mustBeLessThanOrEqualTo    | cannotBeLessThanOrEqualTo    | whenIsLessThanOrEqualTo    | whenIsNotLessThanOrEqualTo    |

### Collection validation functions

| is                 | must                   | cannot                   | when                   | when not                  |
| ------------------ | ---------------------- | ------------------------ | ---------------------- | ------------------------- |
| contains           | mustContain            | cannotContain            | whenContains           | whenContainsNot           |
| containsDuplicates | mustContainDuplicates  | cannotContainDuplicates  | whenContainsDuplicates | whenContainsNotDuplicates |
| containsNull       | mustContainNull        | cannotContainNull        | whenContainsNull       | whenContainsNotNull       |
| containsOnlyNull   | mustContainOnlyNull    | cannotContainOnlyNull    | whenContainsOnlyNull   | whenContainsNotOnlyNull   |
| isEmptyArray       | mustBeEmptyArray       | cannotBeEmptyArray       | whenIsEmptyArray       | whenIsNotEmptyArray       |
| isEqualToArray     | mustBeEqualToArray     | cannotBeEqualToArray     | whenIsEqualToArray     | whenIsNotEqualToArray     |
| isNullOrEmptyArray | mustBeNullOrEmptyArray | cannotBeNullOrEmptyArray | whenIsNullOrEmptyArray | whenIsNotNullOrEmptyArray |
| isOneOfArrays      | mustBeOneOfArrays      | cannotBeOneOfArrays      | whenIsOneOfArrays      | whenIsNotOneOfArray       |

Note: due to naming clashes, collection has functions isEmptyArray, isEqualToArray and isNullOrEmptyArray, isOneOfArrays.

### File system validation functions

| is                      | must                        | cannot                        | when                        | when not                       |
| ----------------------- | --------------------------- | ----------------------------- | --------------------------- | ------------------------------ |
| doesDirectoryExist      | mustDirectoryExist          | cannotDirectoryExist          | whenDoesDirectoryExist      | whenDoesNotDirectoryExist      |
| doesFileExist           | mustFileExist               | cannotFileExist               | whenDoesFileExist           | whenDoesNotFileExist           |
| isAbsoluteDirectoryPath | mustBeAbsoluteDirectoryPath | cannotBeAbsoluteDirectoryPath | whenIsAbsoluteDirectoryPath | whenIsNotAbsoluteDirectoryPath |
| isAbsoluteFilePath      | mustBeAbsoluteFilePath      | cannotBeAbsoluteFilePath      | whenIsAbsoluteFilePath      | whenIsNotAbsoluteFilePath      |
| isEmptyDirectory        | mustBeEmptyDirectory        | cannotBeEmptyDirectory        | whenIsEmptyDirectory        | whenIsNotEmptyDirectory        |
| isValidDirectoryPath    | mustBeValidDirectoryPath    | cannotBeValidDirectoryPath    | whenIsValidDirectoryPath    | whenIsNotValidDirectoryPath    |
| isValidFileName         | mustBeValidFileName         | cannotBeValidFileName         | whenIsValidFileName         | whenIsNotValidFileName         |
| isValidFilePath         | mustBeValidFilePath         | cannotBeValidFilePath         | whenIsValidFilePath         | whenIsNotValidFilePath         |

## Installation

Run the following command console:

```powershell
npm i defensive-programming-framework
```

Or just simply add reference in jour packages.json file:

```json
"dependencies": {
    "defensive-programming-framework": "1.0.0"
}
```

and then install the package via NPM:

```powershell
npm install
```

## Usage

Simply include the DefensiveProgrammingFramework functions in your script:

```typescript
import { cannotBeNullOrEmpty, isNullOrEmpty } from "defensive-programming-framework";

...

cannotBeNullOrEmpty(value);
```

or

```typescript
import * as dpf from "defensive-programming-framework";

...

dpf.cannotBeNullOrEmpty(value);
```

## Guidelines

- It it recommended that you perform input validation in every function of your application. Doing so will make discovering bugs faster and easier since you will be able to catch errors at their source and not somewhere down the line.
- It it recommended that you perform input validation at the very beginning of the function. Performing validation after a part of the function has already executed will make issues harder to pinpoint since parameter values might have changed by the time an ArgumentError has been thrown.
- Depending on the situation you need to choose between unconditional validation and optional validation or the combination of the two. In case a function can recover from invalid input use optional validation; otherwise use unconditional validation.
- Early returns by returning nothing at all is not possible with Defensive Programming Framework since it is considered a bad practice by terminating function execution without providing feedback and should be avoided.

## Change log

### [1.0.0] - 2019-01-01

- first version

### [1.0.3] - 2019-01-14

- added strict mode for better type checking
