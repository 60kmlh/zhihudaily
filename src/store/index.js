import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

export default function(initState) {
  const store = createStore(
    rootReducer,
    initState,
    compose(
      applyMiddleware(thunkMiddleware),
      //window.devToolsExtension ? window.devToolsExtension() : undefined
    )
  )
  return store
}
