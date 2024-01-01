import { PacksList } from '../../components/packs/packs-list/packs-list'
import { Page } from '../../components/ui/page/page'

export type DeckType = {
  author: {
    id: string
    name: string
  }
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover: string
  created: string
  updated: string
  cardsCount: number
}

export const Decks = () => {
  return (
    <Page>
      <PacksList />
    </Page>
  )
}
