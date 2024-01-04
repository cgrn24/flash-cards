import { FC } from 'react'

import * as RadixSelect from '@radix-ui/react-select'
import clsx from 'clsx'

import { Typography } from '..'
import { Arrow } from '../../../assets/icons'

import s from './select.module.scss'

type SelectType = {
  label?: string
  items: string[]
  variant?: 'body1' | 'body2'
  placeholder?: string
  className: string
  style?: React.CSSProperties
}

type Props = SelectType & Omit<RadixSelect.SelectProps, keyof SelectType>

export const Select: FC<Props> = ({
  label,
  items,
  variant,
  placeholder,
  style,
  disabled,
  className,
  ...restProps
}) => {
  const seletItems = items.map((item, index) => {
    return (
      <RadixSelect.Item key={index} value={item} className={s.item} data-variant={variant}>
        <RadixSelect.ItemText>
          <Typography variant={variant}>{item}</Typography>
        </RadixSelect.ItemText>
      </RadixSelect.Item>
    )
  })

  const currentPlaceholder = items[0]

  return (
    <div style={style}>
      <RadixSelect.Root {...{ ...restProps, disabled }}>
        {label && (
          <Typography variant={variant} className={s.label}>
            {label}
          </Typography>
        )}

        <RadixSelect.Trigger className={s.trigger} data-variant={variant}>
          <Typography as={'p'} variant={variant} className={clsx({ [s.disabled]: disabled })}>
            <RadixSelect.Value placeholder={currentPlaceholder} />
          </Typography>
          <RadixSelect.Icon>
            <Arrow className={clsx(s.arrow, { [s.disabled]: disabled })} />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>

        <RadixSelect.Portal>
          <RadixSelect.Content className={s.content} avoidCollisions={false} position={'popper'}>
            <RadixSelect.Viewport>{seletItems}</RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </div>
  )
}
