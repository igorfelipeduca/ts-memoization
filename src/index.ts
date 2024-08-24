// basic memoize implementation

import { basicMemoize } from "./basic-memoize";
import { typedMemoize } from "./typed-memoize";

const typedAdd = (values: { a: number; b: number }) => values.a + values.b;
const basicAdd = (a: number, b: number) => a + b;

const memoizeAdd = basicMemoize(basicAdd);
memoizeAdd(2, 3);
memoizeAdd(2, 3);

const typedMemoizeAdd = typedMemoize(typedAdd);

typedMemoizeAdd({
  a: 1,
  b: 2,
});

typedMemoizeAdd({
  a: 1,
  b: 2,
});
