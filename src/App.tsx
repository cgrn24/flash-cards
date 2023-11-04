import { NotFound } from './components/common/404/not-found'
import { LearnPack } from './components/packs/learn-pack/learn-pack'
import { Page } from './components/ui/page/page'

export function App() {
  return (
    <div>
      <Page>
        <NotFound />
      </Page>
    </div>
  )
}
