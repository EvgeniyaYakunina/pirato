import { Provider } from 'react-redux'

import { Dashboard } from './pages'
import { Router } from './router'
import { store } from './services/store'

export function App() {
  return (
    <div>
      <Provider store={store}>
        <Router />
      </Provider>
      <Dashboard />
    </div>
  )
}
