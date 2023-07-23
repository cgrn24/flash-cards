import { FC } from 'react'

import * as RadioGroupLib from '@radix-ui/react-radio-group'
import clsx from 'clsx'

import { Typography } from '..'

import s from './radio-group.module.scss'

type Props = RadioType & Omit<RadioGroupLib.RadioGroupProps, keyof RadioType>

type RadioType = {
  values: string[]
}

export const RadioGroup: FC<Props> = ({ values, disabled, ...restProps }) => {
  const items = values.map((value, index) => {
    return (
      <div className={s.container} key={index}>
        <RadioGroupLib.Item className={s.item} id={index.toString()} value={value}>
          <RadioGroupLib.Indicator
            className={clsx(s.indicator, { [s.indicatorDisabled]: disabled })}
          />
        </RadioGroupLib.Item>
        <Typography variant="body2" className={clsx(s.text, { [s.textDisabled]: disabled })}>
          {value}
        </Typography>
      </div>
    )
  })

  return (
    <form>
      <RadioGroupLib.Root className={s.root} disabled={disabled} {...restProps}>
        {items}
      </RadioGroupLib.Root>
    </form>
  )
}
