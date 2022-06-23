import { test, expect } from "./tests/test.js";

function add(x, y) {
  return x - y;
}

test(`adds two values`, () => {
  let actual = add(1, 2);
  expect(actual).toBe(3);
});
