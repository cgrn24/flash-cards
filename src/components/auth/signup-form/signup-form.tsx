import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { omit } from 'remeda'
import { z } from 'zod'

import { Card, Typography } from '../../ui'
import Button from '../../ui/button/button.tsx'
import { ControlledTextField } from '../../ui/controlled/controlled-text-field.tsx'

import s from './signup-form.module.scss'

type Props = {
  handleSignup: (data: Omit<FormType, 'confirmPassword'>) => void
}

const schema = z
  .object({
    email: z.string().trim().email('Invalid email address').nonempty('Enter email'),
    password: z
      .string()
      .trim()
      .nonempty('Enter password')
      .min(8, 'Password must be at least 8 characters'),
    confirmPassword: z
      .string()
      .trim()
      .nonempty('Enter password')
      .min(8, 'Password must be at least 8 characters'),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
      })
    }
  })

type FormType = z.infer<typeof schema>

export const SignupForm: FC<Props> = ({ handleSignup }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  const onSubmit = handleSubmit(data => handleSignup(omit(data, ['confirmPassword'])))

  return (
    <Card className={s.card}>
      <Typography variant="large" as={'h1'} className={s.title}>
        Sign up
      </Typography>
      <form onSubmit={onSubmit} className={s.form}>
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
        <ControlledTextField
          label="Confirm password"
          name={'confirmPassword'}
          type={'password'}
          control={control}
          containerProps={{ className: s.textField }}
          errorMessage={errors.confirmPassword?.message}
        />

        <Button type={'signup'} fullWidth className={s.button}>
          Sign up
        </Button>
      </form>
      <Typography variant="body2" className={s.haveAccount}>
        Already have an account?
      </Typography>

      <Typography as={'a'} href={'/login'} className={s.signInLink}>
        Sign In
      </Typography>
    </Card>
  )
}
