import { createOvermindMock } from 'overmind'
import { config } from './'

it('should add a new todo', () => {
  const overmind = createOvermindMock(config)
  const title = 'Test Todo'
  overmind.actions.addTodo(title)
  expect(
    Object.values(overmind.state.todos).find(todo => todo.title === title),
  ).toBeTruthy()
})
