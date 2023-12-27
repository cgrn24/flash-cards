import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Card, Typography } from '../../ui'
import Button from '../../ui/button/button.tsx'
import { ControlledCheckbox } from '../../ui/controlled/controlled-checkbox.tsx'
import { ControlledTextField } from '../../ui/controlled/controlled-text-field.tsx'

import s from './login-form.module.scss'

type Props = {
  onSubmit: (data: FormType) => void
}

const schema = z.object({
  email: z.string().trim().email('Invalid email address').nonempty('Enter email'),
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().default(false),
})

type FormType = z.infer<typeof schema>

export const LoginForm: FC<Props> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  const handleFormSubmit = handleSubmit(data => onSubmit(data))

  return (
    <Card className={s.card}>
      <Typography variant="large" as={'h1'} className={s.title}>
        Sign in
      </Typography>
      <form onSubmit={handleFormSubmit} className={s.form}>
        <ControlledTextField
          label="Email"
          name={'email'}
          control={control}
          containerProps={{ className: s.textField }}
          errorMessage={errors.email?.message}
        />
        <ControlledTextField
          label="Password"
          name={'password'}
          type={'password'}
          control={control}
          containerProps={{ className: s.textField }}
          errorMessage={errors.password?.message}
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

      <Typography as={'a'} href={'/signup'} className={s.signUpLink}>
        Sign Up
      </Typography>
    </Card>
  )
}
