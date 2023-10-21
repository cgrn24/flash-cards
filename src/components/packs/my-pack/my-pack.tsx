import { Star, StarEmpty } from '../../../assets/icons'
import { TextField, Typography } from '../../ui'
import Button from '../../ui/button/button'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../../ui/table'

import s from './my-pack.module.scss'

export const MyPack = () => {
  const columns = [
    { key: 'question', title: 'Question', sortable: false },
    { key: 'answer', title: 'Answer', sortable: false },
    { key: 'updated', title: 'Last Updated', sortable: true },
    { key: 'grade', title: 'Grade', sortable: false },
  ]

  return (
    <div className={s.container}>
      <div className={s.header}>
        <Typography variant="large">Packs list</Typography>
        <Button>Learn to Pack</Button>
      </div>
      <TextField placeholder={'Input search'} />
      <div className={s.table}>
        <Table>
          <TableHeader columns={columns}></TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>How &apos;this&apos; works in JavaScript?</TableCell>
              <TableCell>It works that way</TableCell>
              <TableCell>18.03.2023</TableCell>
              <TableCell>
                <Star />
                <Star />
                <Star />
                <Star />
                <StarEmpty />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
