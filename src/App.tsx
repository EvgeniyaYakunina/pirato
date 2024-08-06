import { Provider } from 'react-redux'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Router } from '@/router'
import { store } from '@/services/store'

export function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
      <div>Hello</div>
      <Button />
      <Input />
    </>
  )
}
