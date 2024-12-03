---
title: General
description: GDG Docs inroduction
---

## Code Spacing
1. Please format the code before committing: (1) code indentation is actually very important to respect, and improperly-indented code is actually hard to read. And (2) don't put too much space between lines. One empty line is enough. Line breaks should usually be used to separate code blocks that are unrelated, when calling functions or declaring some variables. Example (fake nonsense code btw 😂):
```js
// bloc 1
const x = object.x;
const y = object.y;

// bloc 2
const item = document.querySelector("#item");

// bloc 3
item.x = x;
item.y = y;
```

## Code Format
### JavaScript
1. In JS code, always use camelCase for naming variables, all capital for global constants & environment variables, and PascalCase for classes & components:
```js
/***** Variables ******/
// bad
additem
add_item

// good
addItem

/***** Constants & environment variables ******/
// bad
maxAge
apiUrl

// good
MAX_AGE
API_URL

/***** Classes & Components ******/
// bad
baseModel
navBar

// good
BaseModel
NavBar

```

## Linting
[Linters](https://www.sonarsource.com/learn/linter/#:~:text=A%20linter%20is%20a%20developer,issues%20to%20improve%20code%20quality.) are used to control code quality and convention within the project. The linting rules are defined in the linter's configuration file.

## Further reading

- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework

