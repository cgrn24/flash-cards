import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

type Props<T extends ElementType> = {
  as?: T
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
    | 'error'
  children?: ReactNode
  className?: string
}

export const Typography = <T extends ElementType>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>
) => {
  const { variant = 'body1', as, className, ...restProps } = props
  const classNames = clsx(s[variant], className)
  const Component = as || 'p'

  return <Component className={classNames} {...restProps} />
}
