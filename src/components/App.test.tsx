import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

it('renders without crashing', () => {
  const message = 'Learn React'
  const { getByText } = render(<App />)

  expect(getByText(message))
})
