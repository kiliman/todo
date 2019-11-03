import { IConfig } from 'overmind'

import { state } from './state'
import * as actions from './actions'

export const config = {
  state,
  actions,
}

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}
