import { OnInitialize } from 'overmind'

export const onInitialize: OnInitialize = ({ actions }) => {
  actions.addTodo('first todo')
  actions.addTodo('second todo')
}
