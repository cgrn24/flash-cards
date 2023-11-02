import { Checkbox, TextField } from '../../ui'
import Button from '../../ui/button/button'

import s from './edit-pack.module.scss'

export const EditPack = () => {
  return (
    <div>
      <TextField placeholder="Name" label="Name Pack" className={s.textField} />
      <Checkbox checked={true} label="Private pack" className={s.checkbox} />
      <div className={s.buttonContainer}>
        <Button variant="secondary">Cancel</Button>
        <Button>Save changes</Button>
      </div>
    </div>
  )
}
