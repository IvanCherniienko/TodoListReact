import React, { useRef, useState } from 'react'
import TodoList from './components/TodoList'
import './App.css'


function App() {
  const [todos, setTodos] = useState([])
  const input = useRef(null)

  const handleAddTodo = (e) => {
    e.preventDefault()
    const createTodo = input.current.value
    setTodos((param) => [...param, createTodo])
    input.current.value = ''
  }

  return (
    <>
      <div className='container'>
        <ul className='ul'>
          {todos.map((todo) => (
            <TodoList todo={todo} />
          ))}
        </ul>
      </div>
      <form onSubmit={handleAddTodo}>
        <input ref={input} type="text" />
        <button type='submit'>Add</button>
      </form>
    </>
  )
}

export default App