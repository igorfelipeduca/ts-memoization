export function basicMemoize(fn: (...args: any[]) => any) {
  const cache = new Map<string, any>();

  return function (...args: any[]) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log(`[Basic] Cached result: ${cache.get(key)}`);

      return cache.get(key);
    }

    const result = fn(...args);

    cache.set(key, result);

    console.log(`[Basic] Computed result: ${result}`);

    return result;
  };
}

const add = (a: number, b: number) => a + b;
const memoizeAdd = basicMemoize(add);

memoizeAdd(2, 3);
memoizeAdd(2, 3);
