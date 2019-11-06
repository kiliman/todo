import { IConfig } from 'overmind'

import { onInitialize } from './onInitialize'
import { state } from './state'
import * as actions from './actions'

export const config = {
  onInitialize,
  state,
  actions,
}

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}
