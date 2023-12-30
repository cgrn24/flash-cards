import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Avatar from '../../../assets/images/avabig.png'
import { User } from '../../../services/auth/auth.types.ts'
import { Card, Typography } from '../../ui'
import Button from '../../ui/button/button.tsx'
import { ControlledTextField } from '../../ui/controlled/controlled-text-field.tsx'

import s from './change-profile.module.scss'

const schema = z.object({
  name: z
    .string()
    .trim()
    .nonempty('Enter nickname')
    .min(3, 'Nickname must be at least 3 characters'),
})

type Form = z.infer<typeof schema>

type Props = {
  data: User | null | undefined
  setEdit: (edit: boolean) => void
  update: (args: Partial<Pick<User, 'avatar' | 'name'>>) => void
}

export const ChangeProfile: FC<Props> = ({ data, setEdit, update }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  const onSubmit = handleSubmit(async submitData => {
    await update(submitData)
    setEdit(false)
  })

  return (
    <Card className={s.card}>
      <Typography variant="large" as={'h1'} className={s.title}>
        Personal infromation
      </Typography>
      <img src={data?.avatar || Avatar} className={s.avatar} />
      <form onSubmit={onSubmit} className={s.form}>
        <ControlledTextField
          label="Nickname"
          name={'name'}
          control={control}
          containerProps={{ className: s.textField }}
          defaultValue={data?.name}
          errorMessage={errors.name?.message}
        />
        <Button type={'signup'} fullWidth className={s.button}>
          Save changes
        </Button>
      </form>
    </Card>
  )
}
