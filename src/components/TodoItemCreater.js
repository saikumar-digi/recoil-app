import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { todoListAtom } from '../recoil/atoms/todoAtom'

function TodoItemCreater() {
const [inputValue,setInputValue] = useState('')
const [_, setTodoList] = useRecoilState(todoListAtom)

const handleChange = (e) => {
    setInputValue(e.target.value)
}
const handleClick = () => {
    if (inputValue) {
        setTodoList((prevTodos)=>[
            ...prevTodos,
            {
                id: Math.random() * 10000 + 1,
                text: inputValue,
                isCompleted:false
            }
        ])
        setInputValue("");
    }
}
console.log(inputValue);
  return (
    <div >
      <input type='text' onChange={handleChange} value={inputValue}  />
      <button onClick={handleClick}>Add Task</button>
    </div>
  )
}

export default TodoItemCreater
