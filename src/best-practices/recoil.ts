import { atom } from "recoil";

export const divOneSelectedState = atom<boolean>({
  key: "divOneSelected",
  default: false,
});
