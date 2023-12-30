import { ProfileInfo } from '../../components/auth/profile-info/profile-info'
import { Page } from '../../components/ui/page/page'
import { useLogoutMutation, useMeQuery } from '../../services/auth/auth.service'

export const Profile = () => {
  const { data } = useMeQuery()
  const [logout] = useLogoutMutation()

  return (
    <Page>
      <ProfileInfo data={data} logout={logout} />
    </Page>
  )
}
