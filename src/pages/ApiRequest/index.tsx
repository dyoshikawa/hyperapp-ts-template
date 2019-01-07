import { h } from 'hyperapp'
import { State } from '~/state'
import { Actions } from '~/actions'
import { Api, ApiAxios } from '~/utils/Api'
import Header from '~/components/Header'

const ApiRequest = (): any => (state: State, actions: Actions) => (
  <div className="container">
    <Header />

    <div className="card mb-2">
      <div className="card-header">Request API</div>
      <div className="card-body">
        <div className="form-group">
          <label>Path</label>
          <input type="text" className="form-control" id="path" value="/" />
        </div>
        <div className="mb-2">
          <button
            className="btn btn-primary"
            onclick={async () => {
              const api: Api = new ApiAxios()
              const el = document.querySelector('#path') as HTMLInputElement
              const path: string = el.value
              const responseData = await api
                .fetchOthers(path)
                .catch((error: string) => {
                  console.log(error)
                  actions.setError(error)
                })
              console.log(responseData)
            }}
          >
            Request
          </button>
        </div>
        <div>Result</div>
        <div className={state.responseData && 'alert alert-success'}>
          {state.responseData && state.responseData}
        </div>
        <div className={state.error && 'alert alert-danger'}>
          {state.error && state.error}
        </div>
      </div>
    </div>
  </div>
)

export default ApiRequest
