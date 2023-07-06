import { ComponentProps, FC } from 'react'

import s from './avatar.module.scss'

type Props = {
  src: ComponentProps<'img'>['src']
  size: ComponentProps<'img'>['width']
}

export const Avatar: FC<Props> = ({ src, size = 36 }) => {
  return <img className={s.img} src={src} width={size} height={size} />
}
