import React, { useState, useEffect, useCallback } from 'react'
import Control from './control'
import Todos from './todos'
import './index.scss'
import { todoItem, action } from './interface'
import * as actions from './actions'
const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Array<todoItem>>([])
  const dispatch = useCallback((action: action) => {
    const { type, payLoad } = action
    switch (type) {
      case 'set':
        setTodos(payLoad)
        break
      case 'add':
        setTodos((todos) => [...todos, payLoad])
        break
      case 'remove':
        setTodos((todos) =>
          todos.filter((todo) => {
            return todo.id !== payLoad
          })
        )
        break
      case 'toggle':
        setTodos((todos) =>
          todos.map((todo) => {
            return todo.id === payLoad
              ? {
                  ...todo,
                  complete: !todo.complete
                }
              : todo
          })
        )
        break
    }
  }, [])
  useEffect(() => {
    const info = localStorage.getItem('todos')
    if (info !== null) {
      console.log(info)
      const list = JSON.parse(info)
      //   dispatch({ type: 'set', payload: list })
      actions.createSet(list)
    } else {
      const a = actions.createSet([])
      dispatch(a)
      //   dispatch({ type: 'set', payload: [] })
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="todo-list">
      <Control dispatch={dispatch}></Control>
      <Todos todos={todos} dispatch={dispatch}></Todos>
    </div>
  )
}
export default TodoList
