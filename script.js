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
