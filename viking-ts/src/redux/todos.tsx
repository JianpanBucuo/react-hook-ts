import React from 'react'
import { todoItemWithDispatch, todoItem, TodoIntf } from './interface'
import * as actions from './actions'
const Todos: React.FC<TodoIntf> = (props) => {
  const { todos, dispatch } = props
  return (
    <ul>
      {todos.map((todo: todoItem) => {
        return (
          <TodoItem
            id={todo.id}
            complete={todo.complete}
            text={todo.text}
            key={todo.id}
            dispatch={dispatch}
          ></TodoItem>
        )
      })}
    </ul>
  )
}
export default Todos

const TodoItem: React.FC<todoItemWithDispatch> = (props) => {
  const { id, text, complete, dispatch } = props
  const onChange = () => {
    console.log('change')
    // toggleTodo(id)
    dispatch(actions.createToggle(id))
  }
  const onRemove = () => {
    console.log('remove')
    dispatch(actions.createRemove(id))
    // removeTodo(id)
  }
  return (
    <li className="todo-item">
      <input type="checkbox" onChange={onChange} checked={complete}></input>
      <label className={complete ? 'complete' : ''}>{text}</label>
      <button onClick={onRemove}> &#xd7;</button>
    </li>
  )
}
