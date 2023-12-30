import { FC } from 'react'

import { Edit, Logout } from '../../../assets/icons/index.ts'
import Avatar from '../../../assets/images/avabig.png'
import { User } from '../../../services/auth/auth.types.ts'
import { Card, Typography } from '../../ui'
import Button from '../../ui/button/button.tsx'

import s from './profile-info.module.scss'

type Props = {
  data: User | null | undefined
  logout: () => void
}

export const ProfileInfo: FC<Props> = ({ data, logout }) => {
  return (
    <Card className={s.card}>
      <Typography variant="large" as={'h1'} className={s.title}>
        Personal information
      </Typography>
      <div className={s.avatarWrapper}>
        <div className={s.avatarBlock}>
          <img src={data?.avatar || Avatar} className={s.avatar} />
          <Button variant={'secondary'} as={'a'} className={s.avatarButton}>
            <Edit />
          </Button>
        </div>
      </div>
      <div className={s.textWrapper}>
        <div className={s.nameWrapper}>
          <Typography variant="h1">{data?.name}</Typography>
          <label style={{ marginTop: '4px' }}>
            <input type="file" style={{ display: 'none' }} />
            <Edit />
          </label>
        </div>
        <Typography variant="caption" as={'p'} className={s.caption}>
          {data?.email}
        </Typography>
      </div>
      <Button variant={'secondary'} fullWidth className={s.button} onClick={() => logout()}>
        <Logout />
        Logout
      </Button>
    </Card>
  )
}
