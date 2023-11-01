import { Checkbox, TextField } from '../../ui'
import Button from '../../ui/button/button'

import s from './new-pack.module.scss'

export const NewPack = () => {
  return (
    <div>
      <TextField placeholder="Name" label="Name Pack" className={s.textField} />
      <Checkbox checked={true} label="Private pack" className={s.checkbox} />
      <div className={s.buttonContainer}>
        <Button variant="secondary">Cancel</Button>
        <Button>Add new pack</Button>
      </div>
    </div>
  )
}
