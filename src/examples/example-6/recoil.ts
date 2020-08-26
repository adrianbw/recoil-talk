import axios from "axios";
import { selectorFamily, atom } from "recoil";

export type ToDo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const toDoItemState = atom<string | null>({
  key: "toDoItemNumber",
  default: null,
});

export const parameterizedFetchSelectorState = selectorFamily<
  ToDo | null,
  string | null
>({
  key: "fetchSelectorState",
  get: (item: string | null) => async () => {
    if (item && !isNaN(Number(item))) {
      const response = await axios.get(
        `http://slowwly.robertomurray.co.uk/delay/1000/url/https://jsonplaceholder.typicode.com/todos/${item}`
      );
      return response.data;
    }
    return null;
  },
});
