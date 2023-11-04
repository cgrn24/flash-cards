import { ErrorNotFound } from '../../../assets/icons'
import { Typography } from '../../ui'
import Button from '../../ui/button/button'

import s from './not-found.module.scss'

export const NotFound = () => {
  return (
    <div className={s.container}>
      <ErrorNotFound />
      <Typography className={s.typography}>Sorry! Page not found!</Typography>
      <Button>Back to homepage</Button>
    </div>
  )
}
