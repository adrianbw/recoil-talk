import { atom, selector } from "recoil";

export const listState = atom<string[]>({
  key: "exampleList",
  default: ["British Shorthair", "Maine Coon", "Persian", "Ragdoll", "Siamese"],
});

export const filterState = atom<string>({
  key: "listFilter",
  default: "",
});

export const filteredListState = selector<string[]>({
  key: "filteredList",
  get: ({ get }) => {
    const list = get(listState);
    const filter = get(filterState);
    return filter.length
      ? list.filter((item) => {
          const index = item.indexOf(filter);
          return index >= 0;
        })
      : list;
  },
});
