import axios from "axios";
import { selector } from "recoil";

export type ToDo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const fetchSelectorState = selector<ToDo[]>({
  key: "toDoSelectorState",
  get: async () => {
    const response = await axios.get(
      "http://slowwly.robertomurray.co.uk/delay/3000/url/https://jsonplaceholder.typicode.com/todos"
    );
    return response.data;
  },
});
