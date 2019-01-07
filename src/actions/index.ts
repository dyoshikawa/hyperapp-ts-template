import { ActionsType } from 'hyperapp'
import { location } from '@hyperapp/router'
import { CountUp, countUp, CountDown, countDown } from './count'
import { State } from '~/state'
import { SetError, setError } from './error'

export { CountUp } from './count'

const locationCustom: any = location

export interface Actions {
  location: any
  countUp: CountUp
  countDown: CountDown
  setError: SetError
}

export const actions: ActionsType<State, Actions> = {
  location: locationCustom.actions,
  countUp,
  countDown,
  setError,
}
