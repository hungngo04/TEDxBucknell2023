# TEDx Bucknell University Style Guide

The TEDx Bucknell University project aims to maintain a consistent and clean codebase. Adhering to a style guide helps us achieve this goal. Please follow the guidelines below when contributing to this project.

## Table of Contents

1. [Code Formatting](#code-formatting)
2. [Naming Conventions](#naming-conventions)
3. [Comments](#comments)
4. [Documentation](#documentation)
5. [Git Commit Messages](#git-commit-messages)
6. [Other Guidelines](#other-guidelines)

## Code Formatting

- Use **1 tab** or (**4 spaces** in some cases) for indentation. Do not use spaces.
- Keep lines within **100 characters** to ensure readability.
- Use **Unix-style line endings** (LF).

## Naming Conventions

Choose descriptive and meaningful names for variables, functions, and other identifiers:

- Use **PascalCase** for function names (e.g., `MyClass()`).
- Use **camelCase** for class and constructor names (e.g., `myVariable`, `doSomething()`).
- Use **UPPER_CASE** for constants (e.g., `MAX_SIZE`, `DEFAULT_VALUE`).

## Comments

- Use comments to explain **complex algorithms**, **important decisions**, and other non-obvious code.
- Keep comments up-to-date. If you change code functionality, update any relevant comments.
- Avoid redundant or unnecessary comments that merely restate the code.

## Documentation

- Document public APIs and functions using **JSDoc** style comments to explain parameters, return values, and any important details.
- Maintain a separate [README.md](README.md) file to provide an overview of the project, installation instructions, and usage guidelines.
- Document any setup or configuration steps required to run the project.

## Git Commit Messages

- Write clear and descriptive commit messages that explain the purpose of the changes concisely.
- Use the present tense in commit messages (e.g., "Add feature" instead of "Added feature").
- Reference issue numbers in the commit message if it resolves an existing issue (e.g., "#123").

## Other Guidelines

- Keep the codebase **DRY (Don't Repeat Yourself)**. Reuse code wherever possible to minimize duplication.
- Avoid using global variables unless absolutely necessary. Encapsulate functionality in modules or classes.
- Follow the project's existing design patterns and conventions to ensure consistency.

## License

By contributing to this repository, you agree that your contributions will be licensed under the [MIT License](LICENSE).

## Acknowledgments

Thank you for adhering to the TEDx Bucknell University Style Guide. Your efforts in maintaining clean and consistent code are greatly appreciated.
