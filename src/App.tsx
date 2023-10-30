import { EmptyPack } from './components/packs/empty-pack/empty-pack'
import { LearnPack } from './components/packs/learn-pack/learn-pack'
import { Page } from './components/ui/page/page'

export function App() {
  return (
    <div>
      <Page>
        <LearnPack />
      </Page>
    </div>
  )
}
