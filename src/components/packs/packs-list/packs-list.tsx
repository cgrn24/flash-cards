import { Edit, Play, Trash } from '../../../assets/icons'
import { TextField, Typography } from '../../ui'
import Button from '../../ui/button/button'
import { RangeSlider } from '../../ui/slider/slider'
import { Tabs } from '../../ui/switcher/switcher'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../../ui/table'

import s from './packs-list.module.scss'

export const PacksList = () => {
  const tabs = [
    { title: 'My Cards', value: 'My Cards' },
    { title: 'All Cards', value: 'All Cards' },
  ]
  const sliderHandler = () => null

  const columns = [
    { key: 'name', title: 'Name', sortable: false },
    { key: 'card', title: 'Cards', sortable: false },
    { key: 'last', title: 'Last Updated', sortable: true },
    { key: 'author', title: 'Created by', sortable: false },
    { key: 'actions', title: '', sortable: false },
  ]

  return (
    <div className={s.container}>
      <div className={s.header}>
        <Typography variant="large">Packs list</Typography>
        <Button>Add new pack</Button>
      </div>
      <div className={s.toolbar}>
        <TextField placeholder={'Input search'} />
        <div className={s.toolbarLabel}>
          <Typography variant="body2">Show packs cards</Typography>
          <Tabs tabs={tabs} />
        </div>
        <div className={s.toolbarLabel}>
          <Typography variant="body2">Number of cards</Typography>
          <RangeSlider onChange={sliderHandler} value={[10, 90]} max={100} min={0} />
        </div>
        <Button variant={'secondary'}>Clear filter</Button>
      </div>
      <div className={s.table}>
        <Table>
          <TableHeader columns={columns}></TableHeader>
          <TableBody>
            <TableRow>
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
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
