import { Route, Routes } from 'react-router-dom'

import { LoginForm } from './components/auth/login-form/login-form'
import { SignupForm } from './components/auth/signup-form/signup-form'
import { NotFound } from './components/common/404/not-found'
import { Page } from './components/ui/page/page'

export function App() {
  return (
    <div>
      <Page>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Page>
    </div>
  )
}
