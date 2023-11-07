import { useRecoilValue } from "recoil";
import { todoListAtom } from "../recoil/atoms/todoAtom";
import TodoItemCreater from "./TodoItemCreater";
import TodoItem from "./TodoItem";

function TodoMain() {
  const todoList = useRecoilValue(todoListAtom);
  console.log(todoList);
  return (
    <>
      <div>
        <TodoItemCreater />
       {todoList.length > 0 && (
        <div>
        {todoList.map((todoItem) => 
        <TodoItem key={todoItem.id} item={todoItem}/>
        )}
        </div>
       )} 
       
      </div>
    </>
  );
}

export default TodoMain;
