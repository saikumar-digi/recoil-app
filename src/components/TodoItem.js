import { useRecoilState } from "recoil";
import { todoListAtom } from "../recoil/atoms/todoAtom";

function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const index = todoList.findIndex((listItem) => listItem === item);
  console.log("item",item);
  console.log("index", index);

  const toggleIsCompletion = () => {
    setTodoList([
      ...todoList.slice(0, index),
      {
        ...item,
        isCompleted: !item.isCompleted,
      },
      ...todoList.slice(index + 1),
    ]);
  };

  const EditChange = (e) =>{
    setTodoList([
        ...todoList.slice(0, index),
        {
          ...item,
          text: e.target.value,
        },
        ...todoList.slice(index + 1),
      ]);
  }
  
const handleDelete = ()=>{
    setTodoList([
        ...todoList.slice(0, index),
        ...todoList.slice(index + 1),
      ]);
}
  return (
    <div>
      <input
      className={item.isCompleted.toString() === 'true' ? 'done-task' : ''}
       type="text" value={item.text} onChange={EditChange}/>
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={toggleIsCompletion}
      />
      <button onClick={handleDelete}>X</button>
    </div>
  );
}

export default TodoItem;
