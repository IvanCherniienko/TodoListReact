import React, { useState } from 'react'

function TodoList({ todo }) {
  const [isDone, setIsDone] = useState(false)

  const handleClick = () => {
    setIsDone((toogleState) => !toogleState)
  }

  return (
    <li
      className={`todo-item ${isDone ? 'done' : 'not-done'}`}
      onClick={handleClick}
    >
      {todo}
    </li>
  )
}

export default TodoList