import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Card, Typography } from '../../ui'
import Button from '../../ui/button/button.tsx'
import { ControlledCheckbox } from '../../ui/controlled/controlled-checkbox.tsx'
import { ControlledTextField } from '../../ui/controlled/controlled-text-field.tsx'

import s from './login-form.module.scss'

const schema = z.object({
  login: z.string().trim().nonempty('Enter login').min(3, 'Login must be at least 3 characters'),
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at least 8 characters'),
  rememberMe: z.literal<boolean>(true, {
    errorMap: () => {
      return { message: 'You must agree to the terms and conditions' }
    },
  }),
  email: z.string().trim().email('Invalid email address').nonempty('Enter email'),
})

type Form = z.infer<typeof schema>

export const LoginForm = () => {
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
        Sign in
      </Typography>
      <form onSubmit={onSubmit} className={s.form}>
        <ControlledTextField
          label="Email"
          name={'login'}
          control={control}
          containerProps={{ className: s.textField }}
        />
        <ControlledTextField
          label="Password"
          name={'password'}
          control={control}
          containerProps={{ className: s.textField }}
        />
        <ControlledCheckbox
          label={'Remember me'}
          name={'rememberMe'}
          control={control}
          className={s.checkbox}
          position={'left'}
        />

        <Typography variant="body2" as={'a'} className={s.recoverPasswordLink}>
          Forgot password?
        </Typography>

        <Button type={'submit'} fullWidth className={s.button}>
          Submit
        </Button>
      </form>
      <Typography variant="body2" className={s.noAccount}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Don't have an account?
      </Typography>

      <Typography as={'a'} href={'/sing-up'} className={s.signUpLink}>
        Sign Up
      </Typography>
    </Card>
  )
}
