import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Card, Typography } from '../../ui'
import Button from '../../ui/button/button.tsx'
import { ControlledTextField } from '../../ui/controlled/controlled-text-field.tsx'

import s from './new-password.module.scss'

const schema = z.object({
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at least 8 characters'),
})

type Form = z.infer<typeof schema>

export const ForgotPassword = () => {
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
      <form onSubmit={onSubmit} className={s.form}>
        <ControlledTextField
          label="Password"
          name={'password'}
          control={control}
          containerProps={{ className: s.textField }}
        />
        <Typography variant="caption" as={'p'} className={s.caption}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button type={'signup'} fullWidth className={s.button}>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
