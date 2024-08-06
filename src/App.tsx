import { Provider } from 'react-redux'

import { Button } from '@/components/ui/button/Button'
import { Input } from '@/components/ui/input/Input'
import { Router } from '@/router'
import { store } from '@/services/store'

export function App() {
  return (
    <div>
      <Provider store={store}>
        <Router />
      </Provider>
      <Button />
      <Input />
      <div>Hello</div>
    </div>
  )
}
