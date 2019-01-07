import { State } from '~/state'

export interface SetError {
  (error: string): any
}

export const setError: SetError = (error: string) => (_state: State) => ({
  error: error,
})
