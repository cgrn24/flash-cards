import { FC, useState } from 'react'

import { Edit, Play, Trash } from '../../../assets/icons'
import { Deck } from '../../../services/decks/decks.types'
import { TextField, Typography } from '../../ui'
import Button from '../../ui/button/button'
import { RangeSlider } from '../../ui/slider/slider'
import { Tabs } from '../../ui/switcher/switcher'
import { Sort, Table, TableBody, TableCell, TableHeader, TableRow } from '../../ui/table'

import { Pack } from './pack/pack'
import s from './packs-list.module.scss'

type Props = {
  decks?: Deck[]
}

export const PacksList: FC<Props> = ({ decks }) => {
  const tabs = [
    { title: 'My Cards', value: 'my' },
    { title: 'All Cards', value: 'all' },
  ]

  const [tabValue, setTabValue] = useState('all')

  const [slider, setSlider] = useState<number[]>([10, 90])

  const [sort, onSort] = useState<Sort>()

  const columns = [
    { key: 'name', title: 'Name', sortable: false },
    { key: 'card', title: 'Cards', sortable: false },
    { key: 'last', title: 'Last Updated', sortable: true },
    { key: 'author', title: 'Created by', sortable: false },
    { key: 'actions', title: '', sortable: false },
  ]

  const data = [
    {
      id: '1',
      name: 'Pack name',
      cardsCount: 5,
      updated: '18.03.2023',
      author: {
        id: '123',
        name: 'Authore',
      },
    },
  ]

  return (
    <div className={s.container}>
      <div className={s.header}>
        <Typography variant="large">Packs list</Typography>
        <Button>Add new pack</Button>
      </div>
      <div className={s.toolbar}>
        <TextField placeholder={'Input search'} type="search" />
        <div className={s.toolbarLabel}>
          <Typography variant="body2">Show packs cards</Typography>
          <Tabs tabs={tabs} value={tabValue} onValueChange={setTabValue} />
        </div>
        <div className={s.toolbarLabel}>
          <Typography variant="body2">Number of cards</Typography>
          <RangeSlider onChange={setSlider} value={slider} max={100} min={0} />
        </div>
        <Button variant={'secondary'}>Clear filter</Button>
      </div>
      <div className={s.tableContainer}>
        <Table className={s.table}>
          <TableHeader columns={columns} sort={sort} onSort={onSort}></TableHeader>
          <TableBody>
            {/* <TableRow>
              <TableCell>Pack Name</TableCell>
              <TableCell>4</TableCell>
              <TableCell>18.03.2023</TableCell>
              <TableCell>Ivan Petrov</TableCell>
              <TableCell className={s.actionsContainer}>
                <div className={s.actions}>
                  <Play />
                  <Edit />
                  <Trash />
                </div>
              </TableCell>
            </TableRow> */}
            {decks?.map(el => {
              return (
                <Pack
                  key={el.id}
                  name={el.name}
                  cardsCount={el.cardsCount}
                  updated={el.updated}
                  author={el.author}
                />
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
