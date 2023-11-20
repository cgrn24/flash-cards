import { Route, Routes } from 'react-router-dom'

import { LoginForm } from './components/auth/login-form/login-form'
import { Page } from './components/ui/page/page'

export function App() {
  return (
    <div>
      <Page>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Page>
    </div>
  )
}
