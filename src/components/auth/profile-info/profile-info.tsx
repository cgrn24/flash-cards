import { ChangeEvent, FC } from 'react'

import { Edit, Logout } from '../../../assets/icons/index.ts'
import Avatar from '../../../assets/images/avabig.png'
import { User } from '../../../services/auth/auth.types.ts'
import { Card, Typography } from '../../ui'
import Button from '../../ui/button/button.tsx'

import s from './profile-info.module.scss'

type Props = {
  data: User | null | undefined
  logout: () => void
  setEdit: (edit: boolean) => void
  update: (args: Partial<Pick<User, 'avatar' | 'name'>>) => void
}

export const ProfileInfo: FC<Props> = ({ data, logout, setEdit, update }) => {
  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    const avatar = e.target.files?.[0]

    if (!avatar) {
      return
    }
    const formData = new FormData()

    formData.append('avatar', avatar)
    update(avatar)
  }

  return (
    <Card className={s.card}>
      <Typography variant="large" as={'h1'} className={s.title}>
        Personal information
      </Typography>
      <div className={s.avatarWrapper}>
        <div className={s.avatarBlock}>
          <img src={data?.avatar || Avatar} className={s.avatar} />
          <Button variant={'secondary'} as={'a'} className={s.avatarButton}>
            <input type="file" style={{ display: 'none' }} onChange={handleSubmit} />
            <Edit />
          </Button>
        </div>
      </div>
      <div className={s.textWrapper}>
        <div className={s.nameWrapper}>
          <Typography variant="h1">{data?.name}</Typography>
          <button style={{ marginTop: '4px' }} onClick={() => setEdit(true)}>
            <Edit />
          </button>
        </div>
        <Typography variant="caption" as={'p'} className={s.caption}>
          {data?.email}
        </Typography>
        <Button variant={'secondary'} onClick={() => logout()}>
          <Logout />
          Logout
        </Button>
      </div>
    </Card>
  )
}
