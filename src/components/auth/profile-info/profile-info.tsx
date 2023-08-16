import Avatar from '../../../assets/images/avabig.png'
import { Card, Typography } from '../../ui'
import Button from '../../ui/button/button.tsx'

import s from './profile-info.module.scss'

export const ProfileInfo = () => {
  return (
    <Card className={s.card}>
      <Typography variant="large" as={'h1'} className={s.title}>
        Personal information
      </Typography>
      <div className={s.avatarBlock}>
        <img src={Avatar} className={s.avatar} />
        <Button as={'a'} classname={s.avatarButton} />
      </div>
      <Typography variant="caption" as={'p'} className={s.caption}>
        Create new password and we will send you further instructions to email
      </Typography>
      <Button type={'signup'} fullWidth className={s.button}>
        Save changes
      </Button>
    </Card>
  )
}
