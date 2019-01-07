import { app } from 'hyperapp'
import { location } from '@hyperapp/router'
import { actions } from '~/actions'
import { state } from '~/state'
import { view } from '~/routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'jquery'
import 'popper.js'

const container = document.getElementById('app')

const main = app(state, actions, view, container)
location.subscribe(main.location)
