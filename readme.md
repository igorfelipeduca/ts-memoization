# TypeScript Memoize

Writing memoize functions with TypeScript. This is a simple handbook repository.

## Basic Memoization

```ts
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
```

## Strongly Typed Memoization

```ts
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
```

## Advanced Memoization (Memoization with a controlled TTL)

```ts
export function createMemoization(f: (...args: number[]) => number) {
  const memory: { [key: string]: number } = {};

  return function (...args: number[]) {
    const key = args.join(",");

    if (memory[key] !== undefined) {
      console.log(`[Cache] Result: ${memory[key]}`);
      return memory[key];
    }

    const newValue = f(...args);
    memory[key] = newValue;

    console.log(`[Computed] Result: ${newValue}`);

    return newValue;
  };
}
```
