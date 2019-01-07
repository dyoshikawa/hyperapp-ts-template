import { h } from 'hyperapp'
import { State } from '~/state'
import { Actions } from '~/actions'
import Header from '~/components/Header'

const Home = (): any => (state: State, actions: Actions) => (
  <div className="container">
    <Header />

    <div className="card mb-2">
      <div className="card-header">About</div>
      <div className="card-body">
        <ul>
          <li>HyperApp</li>
          <li>HyperApp Router</li>
          <li>TypeScript</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Home
