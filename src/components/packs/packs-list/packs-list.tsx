import { TextField, Typography } from '../../ui'
import Button from '../../ui/button/button'
import { RangeSlider } from '../../ui/slider/slider'
import { Tabs } from '../../ui/switcher/switcher'

import s from './packs-list.module.scss'

export const PacksList = () => {
  const tabs = [
    { title: 'My Cards', value: 'My Cards' },
    { title: 'All Cards', value: 'All Cards' },
  ]
  const sliderHandler = () => null

  return (
    <div className={s.container}>
      <div className={s.header}>
        <Typography variant="h1">Packs list</Typography>
        <Button>Add new pack</Button>
      </div>
      <div>
        <TextField placeholder={'Input search'} />
        <Tabs tabs={tabs} />
        <RangeSlider onChange={sliderHandler} value={[10, 90]} max={100} min={0} />
        <Button variant={'secondary'}>Clear filter</Button>
      </div>
    </div>
  )
}
