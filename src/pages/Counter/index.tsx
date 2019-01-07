import { h } from 'hyperapp'
import { State } from '~/state'
import { Actions } from '~/actions'
import Header from '~/components/Header'

const Counter = (): any => (state: State, actions: Actions) => (
  <div className="container">
    <Header />

    <div className="card mb-2">
      <div className="card-header">Counter</div>
      <div className="card-body">
        <div>{state.count}</div>
        <div>
          <button
            className="btn btn-primary mr-1"
            onclick={() => actions.countUp()}
          >
            +
          </button>
          <button
            className="btn btn-danger"
            onclick={() => actions.countDown()}
          >
            -
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Counter
