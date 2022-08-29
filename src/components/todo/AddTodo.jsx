import { useState } from "react"

function AddTodo({ todoList, setTodoList }) {
  const [newTodo, setNewTodo] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    setTodoList([...todoList, { todoName: newTodo, isChecked: false }])
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="newTodo"
        id="new-todo"
        placeholder="What needs to be done?"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
    </form>
  )
}

export default AddTodo
