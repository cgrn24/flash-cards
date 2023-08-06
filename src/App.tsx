import { ChangeProfile } from './components/auth/change-profile/change-profile'
import { CheckEmail } from './components/auth/check-email/check-email'
import { Page } from './components/ui/page/page'

export function App() {
  return (
    <div>
      <Page>
        <ChangeProfile />
      </Page>
    </div>
  )
}
