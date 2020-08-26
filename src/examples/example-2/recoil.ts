import { atom } from "recoil";

export const divTwoSelectedState = atom<boolean>({
  key: "divTwoSelected",
  default: false,
});
