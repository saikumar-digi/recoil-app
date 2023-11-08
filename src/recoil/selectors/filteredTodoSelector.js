import { selector } from "recoil";
import { todoListAtom } from "../atoms/todoAtom";
import { filterOptionAtom } from "../atoms/filterOptionAtom";

export const filteredTodoSelector = selector({
  key: "filteredTodoSelector",
  get: ({ get }) => {
    const todoList = get(todoListAtom);
    const filterOption = get(filterOptionAtom);
    if (filterOption === "all") {
      return todoList;
    } else if (filterOption === "Completed") {
      return todoList.filter((item) => item.isCompleted);
    }
    return [];
  },
});
