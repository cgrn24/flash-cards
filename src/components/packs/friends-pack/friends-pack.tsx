import { useState } from 'react'

import { ArrowBack, Star, StarEmpty } from '../../../assets/icons'
import { TextField, Typography } from '../../ui'
import Button from '../../ui/button/button'
import { Sort, Table, TableBody, TableCell, TableHeader, TableRow } from '../../ui/table'

import s from './friends-pack.module.scss'

export const FriendsPack = () => {
  const [sort, onSort] = useState<Sort>({ key: 'updated', direction: 'desc' })

  const columns = [
    { key: 'question', title: 'Question', sortable: false },
    { key: 'answer', title: 'Answer', sortable: false },
    { key: 'updated', title: 'Last Updated', sortable: true },
    { key: 'grade', title: 'Grade', sortable: false },
  ]

  // const navigate = useNavigate()

  return (
    <div className={s.container}>
      <div className={s.back}>
        <ArrowBack />
        <Typography variant="body2" className={s.link}>
          Back to Packs list
        </Typography>
      </div>
      <div className={s.header}>
        <Typography variant="large">Friend&apos;s pack</Typography>
        <Button>Learn to Pack</Button>
      </div>
      <TextField placeholder={'Input search'} />
      <div className={s.table}>
        <Table>
          <TableHeader columns={columns} sort={sort} onSort={onSort}></TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>How &apos;this&apos; works in JavaScript?</TableCell>
              <TableCell>It works that way</TableCell>
              <TableCell>18.03.2023</TableCell>
              <TableCell className={s.ratingContainer}>
                <div className={s.rating}>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <StarEmpty />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
