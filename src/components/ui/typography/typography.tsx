import { FC } from 'react'

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
}

export const Typography: FC<Props> = ({ type = 'body1' }) => {
  return <div className={`${s}.${type}`}>typography</div>
}
