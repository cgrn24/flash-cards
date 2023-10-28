import { ArrowBack } from '../../../assets/icons'
import { Typography } from '../../ui'
import Button from '../../ui/button/button'

import s from './empty-pack.module.scss'

export const EmptyPack = () => {
  return (
    <div className={s.container}>
      <div className={s.back}>
        <ArrowBack />
        <Typography variant="body2" className={s.link}>
          Back to Packs list
        </Typography>
      </div>
      <div className={s.header}>
        <Typography variant="large">Name pack</Typography>
      </div>
      <div className={s.emptypack}>
        <Typography variant="body2" className={s.text}>
          This pack is empty. Click add new card to fill this pack
        </Typography>
        <Button>Add new card</Button>
      </div>
    </div>
  )
}
