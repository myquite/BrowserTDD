# BrowserTDD

This intial setup has a test.js file with a basic testing function and assertion function that allows you to create tests using plain JavaScript in the browser.

![screenshot](https://github.com/myquite/testjs/blob/master/BrowserTDD-screenshot.png)

## Constraints

<!-- Constraints can be a good way to practice specific techniques or approaches -->

- The goal of this project is to be able to write and test functions being used in your JavaScript without installing any dependancies other than the test.js file itself.

## User Stories

<!-- Basic user story template -->

- As a developer I want to test JavaScript functions without installing depencies so that I can do Test Driven Development in the browser.

## How it Works

1. Add the `test.js` file to your project.

2. In your main JavaScript file import test and whatever functions your testing.

```JS
import { test, expect } from "./modules/test.js";
import { add, subtract, greet } from "./modules/helpers.js";

test(`adds two values`, add, () => {
  expect(add(1, 2)).toBe(3);
});

test(`subtracts two values`, subtract, () => {
  expect(subtract(10, 5)).toBe(5);
});

test(`greets a name`, greet, () => {
  expect(greet("John")).toBe("Hello, John");
});
```

3. Launch your server (I'm using LiveReload)
4. Open your console to see your tests.
