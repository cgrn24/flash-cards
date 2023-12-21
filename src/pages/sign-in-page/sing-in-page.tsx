import { LoginForm } from '../../components/auth/login-form/login-form'
import { Page } from '../../components/ui/page/page'
import { useLoginMutation } from '../../services/auth/auth.service'

export const SingInPage = () => {
  const [login] = useLoginMutation()

  return (
    <Page>
      <LoginForm onSubmit={login} />
    </Page>
  )
}
