import { h, View } from 'hyperapp'
import { Switch, Route, Redirect, Match } from '@hyperapp/router'
import { Actions } from './actions'
import { State } from './state'
import Home from '~/pages/Home'
import Counter from '~/pages/Counter'
import ApiRequest from '~/pages/ApiRequest'
import NestedRoute from '~/pages/NestedRoute'

export const view: View<any, any> = (_state: State, _actions: Actions) => (
  <Switch>
    <Route path="/" render={Home} />
    <Route path="/counter" render={Counter} />
    <Route path="/api-request" render={ApiRequest} />
    <Route
      parent
      path="/nested"
      render={({ match }: { match: Match<any> }) => (
        <Switch>
          <Route path={`${match.path}/route`} render={NestedRoute} />
        </Switch>
      )}
    />
    <Route path="/:others" render={() => <Redirect to="/" />} />
  </Switch>
)
