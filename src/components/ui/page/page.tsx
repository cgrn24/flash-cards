import { FC } from 'react'

import { Card } from '..'
import { Header } from '../header/header'

import s from './page.module.scss'

type Props = {
  children: React.ReactNode
}

export const Page: FC<Props> = ({ children }) => {
  return (
    <div className={s.page}>
      <Header loggedIn={true} />
      <Card>{children}</Card>
    </div>
  )
}
