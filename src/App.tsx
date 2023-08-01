import { ForgotPassword } from './components/auth/forgot-password/forgot-password'
import { LoginForm } from './components/auth/login-form/login-form'
import { Page } from './components/ui/page/page'

export function App() {
  return (
    <div>
      <Page>
        <ForgotPassword />
      </Page>
    </div>
  )
}
