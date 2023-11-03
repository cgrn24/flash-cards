import { TextField } from '../../ui'
import Button from '../../ui/button/button'
import { Select } from '../../ui/select/select'

import s from './add-new-card.module.scss'

export const AddNewCard = () => {
  const items = ['Text', 'Picture']

  return (
    <div>
      <div className={s.textContainer}>
        <Select label="Choose a question format" className={s.something} items={items} />
        <TextField label="Question" />
        <TextField label="Answer" />
      </div>
      <div className={s.buttonContainer}>
        <Button variant="secondary">Cancel</Button>
        <Button>Save changes</Button>
      </div>
    </div>
  )
}
