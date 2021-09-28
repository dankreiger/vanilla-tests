import type { I_Expect } from './interfaces/I_Expect';

const _ = JSON.stringify;

export function expect<T>(actual: T): I_Expect<T> {
  return {
    toBe(expected: T) {
      if (actual !== expected) {
        throw new Error(`${_(actual)} is not equal to ${_(expected)}`);
      }
    },
    toEqual(expected: T) {
      const looseActual = _(actual);
      const looseExpected = _(expected);
      if (looseActual !== looseExpected) {
        throw new Error(`${looseActual} is not equal to ${looseExpected}`);
      }
    },
    toThrow(expected?: Error) {
      if (!(actual instanceof Error)) {
        throw new Error(`${_(actual)} is not equal to ${_(expected)}`);
      }
    },
  };
}
