import { FC, ReactNode } from 'react'

import s from './typography.module.scss'

type Props = {
  type:
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
  children: ReactNode
}

export const Typography: FC<Props> = ({ type = 'body1', children }) => {
  return <div className={`${s}.${type}`}>{children}</div>
}
