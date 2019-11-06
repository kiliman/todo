import React from 'react'
import { Todo } from '../overmind/state'

interface Props {
  todo: Todo
}

const TodoItem = ({ todo }: Props) => {
  return (
    <li>
      {todo.title} ({todo.completed ? 'yes' : 'no'})
    </li>
  )
}

export default TodoItem
