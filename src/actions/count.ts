import { State } from '~/state'

export interface CountUp {
  (): any
}

export interface CountDown {
  (): any
}

export const countUp: CountUp = () => (state: State) => ({
  count: state.count + 1,
})

export const countDown: CountDown = () => (state: State) => ({
  count: state.count - 1,
})
