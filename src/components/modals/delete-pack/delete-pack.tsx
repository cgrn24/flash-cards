import { Typography } from '../../ui'
import Button from '../../ui/button/button'

import s from './delete-pack.module.scss'

export const EditPack = () => {
  return (
    <div>
      <div className={s.text}>
        <Typography variant="body1">
          Do you really want to remove <b>Pack Name</b>?
        </Typography>
        <Typography variant="body1">All cards will be deleted</Typography>
      </div>
      <div className={s.buttonContainer}>
        <Button variant="secondary">Cancel</Button>
        <Button>Delete pack</Button>t
      </div>
    </div>
  )
}
