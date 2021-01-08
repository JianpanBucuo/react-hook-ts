export interface action {
    type: string
    payLoad: any
}
export interface todoItem {
    id: number
    complete: boolean
    text: string
    // removeTodo(id: number): void
    // toggleTodo(id: number): void
    
  }
  export interface todoItemWithDispatch extends todoItem {
    dispatch(action:action):void
  }
export interface TodoIntf {
    todos: todoItem[]
    // removeTodo(id: number): void
    // toggleTodo(id: number): void
    dispatch(action:action):void
  }

  export interface ControlIntf {
    // addTodo(obj: todoItem): void
    dispatch(action:action):void
  }