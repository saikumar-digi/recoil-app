import { useRecoilValue } from "recoil";
import { todoListAtom } from "../recoil/atoms/todoAtom";
import TodoItemCreater from "./TodoItemCreater";
import TodoItem from "./TodoItem";
import FilterDropdown from "./FilterDropdown";
import { filteredTodoSelector } from "../recoil/selectors/filteredTodoSelector";

function TodoMain() {
  const todoList = useRecoilValue(todoListAtom);

  const filteredTodoList = useRecoilValue(filteredTodoSelector);
  console.log(filteredTodoList, "completedTodoList");
  console.log(todoList);
  return (
    <>
      <div>
        <TodoItemCreater />
        <FilterDropdown />
        {filteredTodoList.length > 0 ? (
          <div>
            {filteredTodoList.map((filteredItem) => (
              <TodoItem key={filteredItem.id} item={filteredItem} />
            ))}
          </div>
        ) : (
          <div>you have not Completed any task yet....</div>
        )}
      </div>
    </>
  );
}

export default TodoMain;
