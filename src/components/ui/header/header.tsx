import { Avatar } from '..'
import { Logo } from '../../../assets/icons'
import Ava from '../../../assets/images/ava.png'

import s from './header.module.scss'

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <Logo />
        <Avatar src={Ava} size={'36px'} />
      </div>
    </div>
  )
}
