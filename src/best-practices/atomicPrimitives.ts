import { atom, selector } from "recoil";

type FooQuu = {
  foo: string;
  quu: string;
};

/**
 * DO THIS:
 * Atoms as primitives
 */
export const fooAtom = atom<string>({
  key: "foo",
  default: "bar",
});

/**
 * DON'T DO THIS:
 * Atoms as complex objects
 */
export const fooQuuAtom = atom<FooQuu>({
  key: "FooQuuAtom",
  default: {
    foo: "bar",
    quu: "qux",
  },
});

/**
 * INSTEAD, USE SELECTORS
 */

export const quuAtom = atom<string>({
  key: "quu",
  default: "qux",
});

export const fooQuuSelector = selector<FooQuu>({
  key: "FooQuuSelector",
  get: ({ get }) => {
    const foo = get(fooAtom);
    const quu = get(quuAtom);
    return {
      foo,
      quu,
    };
  },
});
