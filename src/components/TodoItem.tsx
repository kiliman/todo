import React from 'react'
import { useOvermind } from '../overmind'
import { Todo } from '../overmind/state'

interface Props {
  todo: Todo
}

const TodoItem = ({ todo }: Props) => {
  const { actions } = useOvermind()

  const handleClick = () => {
    actions.toggleTodo(todo.id)
  }

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onClick={handleClick} />
      {todo.title} ({todo.completed ? 'yes' : 'no'})
    </li>
  )
}

export default TodoItem
