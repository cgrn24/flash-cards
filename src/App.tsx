import { Route, Routes } from 'react-router-dom'

import { LoginForm } from './components/auth/login-form/login-form'
import { NotFoundPage } from './pages/404/not-found-page'
import { SignUpPage } from './pages/sign-up-page/sign-up-page'

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
