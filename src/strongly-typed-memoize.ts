//T is the type of the arguments passed to the function.
// U is the type of the value that the function returns.

export function memoize<T, U>(fn: (...args: T[]) => U): (...args: T[]) => U {
  const cache = new Map<string, U>();

  return (...args: T[]) => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log(`[Cached] Result: ${cache.get(key)}`);

      return cache.get(key)!; // we're using ! to ensure that the value is not undefined or null
    }

    const result = fn(...args);
    cache.set(key, result);

    console.log(`[Computed] Result: ${result}`);

    return result;
  };
}

const add = (a: number, b: number) => a + b;

const addMemoized = memoize(add);

// in this case, T is number and U is number

addMemoized(1, 2); // [Computed] Result: 3
addMemoized(1, 2); // [Cached] Result: 3
