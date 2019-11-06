import { Action } from 'overmind'
import Utils from '../Utils'

export const addTodo: Action<string, string> = ({ state }, title) => {
  const id = Utils.uuid()
  state.todos[id] = { id, title, completed: false }
  return id
}
}
