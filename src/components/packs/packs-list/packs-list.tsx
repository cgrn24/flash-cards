import { Typography } from '../../ui'
import Button from '../../ui/button/button'

import s from './packs-list.module.scss'

export const PacksList = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <Typography variant="h1">Packs list</Typography>
        <Button>Add new pack</Button>
      </div>
    </div>
  )
}
