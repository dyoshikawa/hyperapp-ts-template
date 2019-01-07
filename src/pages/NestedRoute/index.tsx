import { h } from 'hyperapp'
import { State } from '~/state'
import { Actions } from '~/actions'
import Header from '~/components/Header'

const NestedRoute = (): any => (_state: State, _actions: Actions) => (
  <div className="container">
    <Header />

    <div className="card mb-2">
      <div className="card-header">Nested Route</div>
      <div className="card-body">Here is "/nested/route".</div>
    </div>
  </div>
)

export default NestedRoute
