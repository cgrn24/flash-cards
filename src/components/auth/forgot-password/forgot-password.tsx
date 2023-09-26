import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Card, Typography } from '../../ui'
import Button from '../../ui/button/button.tsx'
import { ControlledTextField } from '../../ui/controlled/controlled-text-field.tsx'

import s from './forgot-password.module.scss'

const schema = z.object({
  email: z.string().trim().email('Invalid email address').nonempty('Enter email'),
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
        Forgot your password?
      </Typography>
      <form onSubmit={onSubmit} className={s.form}>
        <ControlledTextField
          label="Email"
          name={'email'}
          control={control}
          containerProps={{ className: s.textField }}
        />
        <Typography variant="caption" as={'p'} className={s.caption}>
          Enter your email address and we will send you further instructions{' '}
        </Typography>
        <Button type={'signup'} fullWidth className={s.button}>
          Send instructions
        </Button>
      </form>
      <Typography variant="body2" className={s.haveAccount}>
        Did you remember your password?
      </Typography>

      <Typography as={'a'} href={'/sing-in'} className={s.signInLink}>
        Try logging in
      </Typography>
    </Card>
  )
}
