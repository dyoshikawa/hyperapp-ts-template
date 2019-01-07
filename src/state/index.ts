import { LocationState, location } from '@hyperapp/router'

export interface State {
  location: LocationState
  count: number
  responseData: object | null
  error: string
}

export const state: State = {
  location: location.state,
  count: 0,
  responseData: null,
  error: '',
}
