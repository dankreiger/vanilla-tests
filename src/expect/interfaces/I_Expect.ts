export interface I_Expect<T> {
  toBe: (expected: T) => void;
  toEqual: (expected: T) => void;
  toThrow: (expected?: Error) => void;
}
