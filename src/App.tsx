import { ChangeProfile } from './components/auth/change-profile/change-profile'
import { CheckEmail } from './components/auth/check-email/check-email'
import { ProfileInfo } from './components/auth/profile-info/profile-info'
import { PacksList } from './components/packs/packs-list/packs-list'
import { Page } from './components/ui/page/page'

export function App() {
  return (
    <div>
      <Page>
        <PacksList />
      </Page>
    </div>
  )
}
