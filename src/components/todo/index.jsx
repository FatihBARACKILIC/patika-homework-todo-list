import { useEffect, useState } from "react"
import AddTodo from "./AddTodo"
import Footer from "./Footer"
import List from "./List"

function TodoList() {
  const [todoList, setTodoList] = useState([
    { todoName: "Learn JavaScript", isChecked: true },
    { todoName: "Learn React", isChecked: false },
    { todoName: "Have a life!", isChecked: false },
  ])

  const [showStatus, setShowStatus] = useState(0)

  return (
    <div>
      <AddTodo todoList={todoList} setTodoList={setTodoList} />
      <List
        todoList={todoList}
        setTodoList={setTodoList}
        showStatus={showStatus}
      />
      <Footer
        todoList={todoList}
        setTodoList={setTodoList}
        setShowStatus={setShowStatus}
      />
    </div>
  )
}

export default TodoList
