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

const add = (a: number, b: number) => a + b;
const memoizedAdd = createMemoization(add);

memoizedAdd(2, 3);
memoizedAdd(2, 3);
