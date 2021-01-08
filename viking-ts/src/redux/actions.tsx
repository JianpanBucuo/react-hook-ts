import { todoItem } from './interface'
type id = number
export const createSet = (payLoad: todoItem[]) => {
  return {
    type: 'set',
    payLoad
  }
}
export const createAdd = (payLoad: todoItem) => {
  return {
    type: 'add',
    payLoad
  }
}
export const createRemove = (payLoad: id) => {
  return {
    type: 'remove',
    payLoad
  }
}
export const createToggle = (payLoad: id) => {
  return {
    type: 'toggle',
    payLoad
  }
}
