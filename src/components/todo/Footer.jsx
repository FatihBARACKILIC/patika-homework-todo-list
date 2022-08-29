function Footer({ todoList, setTodoList, setShowStatus }) {
  return (
    <footer>
      <span>
        {todoList.length} item{todoList.length > 1 && "s"} left
      </span>
      <div>
        <button onClick={() => setShowStatus(0)}>All</button>
        <button onClick={() => setShowStatus(1)}>Active</button>
        <button onClick={() => setShowStatus(2)}>Completed</button>
      </div>
      <button onClick={() => setTodoList([])}>Clear All</button>
    </footer>
  )
}

export default Footer
