import { useNavigate } from 'react-router-dom'

import { LoginForm } from '../../components/auth/login-form/login-form'
import { Page } from '../../components/ui/page/page'
import { useLoginMutation } from '../../services/auth/auth.service'
import { LoginArgs } from '../../services/auth/auth.types'

export const SingInPage = () => {
  const [login] = useLoginMutation()
  const navigate = useNavigate()

  const handleLogin = async (args: LoginArgs) => {
    try {
      await login(args)
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Page>
      <LoginForm onSubmit={handleLogin} />
    </Page>
  )
}
