import { useState } from "react"

function List({ todoList, setTodoList, showStatus }) {
  const show = todoList.filter((item) => {
    if (showStatus === 0) return item
    else if (showStatus === 1) return item.isChecked === false
    else return item.isChecked === true
  })
  return (
    <ul>
      {show.map((todo, key) => (
        <li key={key}>
          <button
            className={`check-${todo.isChecked}`}
            onClick={() => {
              todoList[key].isChecked = !todoList[key].isChecked
              setTodoList([...todoList])
            }}
          >
            {todo.isChecked ? <i className="fa-solid fa-check"></i> : ""}
          </button>
          <label className={todo.isChecked ? "line" : "not-line"}>
            {todo.todoName}
          </label>
          <button
            className="destroy"
            onClick={() => {
              todoList.splice(key, 1)
              setTodoList([...todoList])
            }}
            value="X"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  )
}

export default List
