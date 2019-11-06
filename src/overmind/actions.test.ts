import { createOvermindMock } from 'overmind'
import { config } from './'

it('should add a new todo', () => {
  const { state, actions } = createOvermindMock(config)
  const title = 'Test Todo'
  const todoId = actions.addTodo(title)

  expect(state.todos[todoId].title).toBe(title)
})
