import { expect, test } from "vitest";

import { numberIsOdd } from "./numberIsOdd";

test("That 1 is odd", () => {
  expect(numberIsOdd(1)).toBe(true);
});

test("That 2 is not odd", () => {
  expect(numberIsOdd(2)).toBe(false);
});
