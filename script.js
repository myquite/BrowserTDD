import { test, expect } from "./tests/test.js";

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x * y;
}

test(`adds two values`, add, () => {
  expect(add(1, 2)).toBe(3);
});

test(`subtracts two values`, subtract, () => {
  expect(subtract(10, 5)).toBe(5);
});
