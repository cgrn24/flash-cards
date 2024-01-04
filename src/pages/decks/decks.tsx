import { useState } from 'react'

import { PacksList } from '../../components/packs/packs-list/packs-list'
import { Page } from '../../components/ui/page/page'
import { Pagination } from '../../components/ui/pagination/pagination'
import { useGetDecksQuery } from '../../services/decks/decks.service'

export const Decks = () => {
  const { data } = useGetDecksQuery()

  console.log(data)

  const [page, setPage] = useState(0)
  const [perPage, setPerPage] = useState(0)

  return (
    <Page>
      <PacksList decks={data?.items} />
      <Pagination
        perPageOptions={[10, 20, 30]}
        count={data?.pagination.totalPages ?? 1}
        page={data?.pagination.currentPage ?? 1}
        onChange={setPage}
        perPage={10}
        onPerPageChange={setPerPage}
      />
    </Page>
  )
}
