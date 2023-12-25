import { useNavigate } from 'react-router-dom'

import { SignupForm } from '../../components/auth/signup-form/signup-form'
import { Page } from '../../components/ui/page/page'
import { useRegisterMutation } from '../../services/auth/auth.service'
import { RegisterArgs } from '../../services/auth/auth.types'

export const SignUpPage = () => {
  const [register] = useRegisterMutation()
  const navigate = useNavigate()

  const handleSignup = async (args: RegisterArgs) => {
    try {
      await register(args)
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Page>
      <SignupForm handleSignup={handleSignup} />
    </Page>
  )
}
