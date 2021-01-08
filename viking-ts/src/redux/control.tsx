import React, { useRef } from 'react'
import { todoItem, ControlIntf } from './interface'
import * as actions from './actions'
let isSq = Date.now()

const Control: React.FC<ControlIntf> = (props: ControlIntf) => {
  const { dispatch } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const onSubmit = (e: any) => {
    e.preventDefault()
    if (inputRef.current !== null) {
      const newText = inputRef.current.value.trim()
      if (newText.length === 0) return
      dispatch(
        actions.createAdd({
          id: ++isSq,
          text: newText,
          complete: false
        })
      )

      inputRef.current.value = ''
    }
  }
  return (
    <div className="control">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          ref={inputRef}
          className="new-todo"
          placeholder="What needs to be done"
        ></input>
      </form>
    </div>
  )
}

export default Control
