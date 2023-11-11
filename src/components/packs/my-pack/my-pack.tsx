import { useState } from 'react'

import {
  ArrowBack,
  Edit,
  EditPack,
  More,
  Play,
  Star,
  StarEmpty,
  Trash,
} from '../../../assets/icons'
import { TextField, Typography } from '../../ui'
import Button from '../../ui/button/button'
import { Dropdown, DropdownItemWithIcon } from '../../ui/dropdown/dropdown'
import { Sort, Table, TableBody, TableCell, TableHeader, TableRow } from '../../ui/table'

import s from './my-pack.module.scss'

export const MyPack = () => {
  const [sort, onSort] = useState<Sort>({ key: 'updated', direction: 'desc' })
  const columns = [
    { key: 'question', title: 'Question', sortable: false },
    { key: 'answer', title: 'Answer', sortable: false },
    { key: 'updated', title: 'Last Updated', sortable: true },
    { key: 'grade', title: 'Grade', sortable: false },
    { key: 'actions', title: '', sortable: false },
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
        <div className={s.headerMore}>
          <Typography variant="large">My pack</Typography>
          <Dropdown
            trigger={
              <button>
                <More />
              </button>
            }
          >
            <DropdownItemWithIcon icon={<Play />} text="Learn" />
            <DropdownItemWithIcon icon={<EditPack />} text="Edit" />
            <DropdownItemWithIcon icon={<Trash />} text="Delete" />
          </Dropdown>
        </div>
        <Button>Add new card</Button>
      </div>
      <TextField placeholder={'Input search'} type="search" />
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
              <TableCell>
                <div className={s.actions}>
                  <Edit />
                  <Trash />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>How &apos;this&apos;</TableCell>
              <TableCell>It works</TableCell>
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
              <TableCell>
                <div className={s.actions}>
                  <Edit />
                  <Trash />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
