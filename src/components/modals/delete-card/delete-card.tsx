import { Typography } from '../../ui'
import Button from '../../ui/button/button'

import s from './delete-card.module.scss'

export const EditPack = () => {
  return (
    <div>
      <div className={s.text}>
        <Typography variant="body1">
          Do you really want to remove <b>Card Name</b>?
        </Typography>
      </div>
      <div className={s.buttonContainer}>
        <Button variant="secondary">Cancel</Button>
        <Button>Delete card</Button>t
      </div>
    </div>
  )
}
