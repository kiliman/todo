import React from 'react'
import { useOvermind } from '../overmind'

const App: React.FC = () => {
  const { state } = useOvermind()
  return (
    <ul>
      {Object.values(state.todos).map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default App
