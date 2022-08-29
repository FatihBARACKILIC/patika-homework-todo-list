import { useState } from "react"
import "./App.css"
import TodoList from "./components/todo"

function App() {
  return (
    <div className="App">
      <h1>todo</h1>
      <TodoList />
    </div>
  )
}

export default App
