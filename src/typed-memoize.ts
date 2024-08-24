type MemoizeArgs = {
  a: number;
  b: number;
};

export function typedMemoize(fn: (args: MemoizeArgs) => number) {
  const cache = new Map<string, number>();

  return function (args: MemoizeArgs) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log(`[Typed] Cached result: ${cache.get(key)}`);

      return cache.get(key);
    }

    const result = fn(args);
    cache.set(key, result);

    console.log(`[Typed] Computed result: ${result}`);
    return result;
  };
}
