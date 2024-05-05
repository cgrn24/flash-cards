import { useState } from 'react'

import { PacksList } from '../../components/packs/packs-list/packs-list'
import { Page } from '../../components/ui/page/page'
import { Pagination } from '../../components/ui/pagination/pagination'
import { useGetDecksQuery } from '../../services/decks/decks.service'

export const Decks = () => {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const { data } = useGetDecksQuery({ currentPage: page })

  return (
    <Page>
      <PacksList decks={data?.items} />
      <Pagination
        perPageOptions={[10, 20, 30]}
        count={data?.pagination.totalPages ?? 1}
        page={data?.pagination.currentPage ?? 1}
        onChange={setPage}
        perPage={perPage}
        onPerPageChange={setPerPage}
      />
    </Page>
  )
}
