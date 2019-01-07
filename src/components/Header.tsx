import { h } from 'hyperapp'
import { State } from '~/state'
import { Actions } from '~/actions'
import { Link } from '@hyperapp/router'

const Header = (): any => (_state: State, _actions: Actions) => (
  <div>
    <h1>HyperApp TS Template</h1>

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li class="breadcrumb-item">
          <Link to="/counter">Counter</Link>
        </li>
        <li class="breadcrumb-item">
          <Link to="/api-request">API Request</Link>
        </li>
        <li class="breadcrumb-item">
          <Link to="/nested/route">Nested Route</Link>
        </li>
      </ol>
    </nav>
  </div>
)

export default Header
