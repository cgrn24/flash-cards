import { Card, Typography } from '../../ui'
import Button from '../../ui/button/button.tsx'

import s from './check-email.module.scss'

export const CheckEmail = () => {
  return (
    <Card className={s.card}>
      <Typography variant="large" as={'h1'} className={s.title}>
        Check Email
      </Typography>
      <CheckEmail />
      <Typography variant="body2" className={s.text}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        We've sent an Email with instructions to example@mail.com
      </Typography>
      <Button type={'a'} fullWidth className={s.signInLink}>
        Back to Sign in
      </Button>
    </Card>
  )
}
