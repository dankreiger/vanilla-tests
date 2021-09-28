import { greenBright, redBright } from 'chalk';

export const success = (msg: string): void => console.log(greenBright(msg));
const fail = (msg: unknown | string): void => console.error(redBright(msg));
const printFailure = (title: string, error: unknown) => {
  fail(`✖ ${title}`);
  fail(error);
};

export function test(
  title: string,
  callback: () => void | Promise<void>
): void {
  try {
    const cb = callback();
    if (cb instanceof Promise) {
      cb.then(() => {
        success(`✔ ${title}`);
      }).catch((error) => {
        printFailure(title, error);
      });
    } else {
      success(`√ ${title}`);
    }
  } catch (error: unknown) {
    printFailure(title, error);
  }
}
