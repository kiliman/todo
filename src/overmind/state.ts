export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type State = {
  todos: { [id: string]: Todo }
}

export const state: State = {
  todos: {},
}
