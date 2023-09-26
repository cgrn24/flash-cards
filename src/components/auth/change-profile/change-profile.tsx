import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Avatar from '../../../assets/images/avabig.png'
import { Card, Typography } from '../../ui'
import Button from '../../ui/button/button.tsx'
import { ControlledTextField } from '../../ui/controlled/controlled-text-field.tsx'

import s from './change-profile.module.scss'

const schema = z.object({
  nick: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(3, 'Nickname must be at least 3 characters'),
})

type Form = z.infer<typeof schema>

export const ChangeProfile = () => {
  const {
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <Card className={s.card}>
      <Typography variant="large" as={'h1'} className={s.title}>
        Create new password
      </Typography>
      <img src={Avatar} className={s.avatar} />
      <form onSubmit={onSubmit} className={s.form}>
        <ControlledTextField
          label="Nickname"
          name={'nick'}
          control={control}
          containerProps={{ className: s.textField }}
        />
        <Typography variant="caption" as={'p'} className={s.caption}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button type={'signup'} fullWidth className={s.button}>
          Save changes
        </Button>
      </form>
    </Card>
  )
}
