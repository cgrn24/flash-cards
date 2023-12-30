import { useState } from 'react'

import { ChangeProfile } from '../../components/auth/change-profile/change-profile'
import { ProfileInfo } from '../../components/auth/profile-info/profile-info'
import { Page } from '../../components/ui/page/page'
import {
  useLogoutMutation,
  useMeQuery,
  useUpdateMeMutation,
} from '../../services/auth/auth.service'

export const Profile = () => {
  const { data } = useMeQuery()
  const [logout] = useLogoutMutation()
  const [update] = useUpdateMeMutation()
  const [edit, setEdit] = useState(false)

  console.log(edit)

  return (
    <Page>
      {edit === false ? (
        <ProfileInfo data={data} logout={logout} setEdit={setEdit} />
      ) : (
        <ChangeProfile data={data} setEdit={setEdit} update={update} />
      )}
    </Page>
  )
}
