import { FC } from 'react'

import { Avatar, Typography } from '..'
import { Logo, Logout, Person } from '../../../assets/icons'
import Ava from '../../../assets/images/ava.png'
import { Dropdown, DropdownItem, DropdownItemWithIcon } from '../dropdown/dropdown'

import s from './header.module.scss'

type Props = {
  loggedIn: boolean
}

export const Header: FC<Props> = ({ loggedIn = true }) => {
  return (
    loggedIn && (
      <div className={s.header}>
        <div className={s.container}>
          <Logo />
          <Dropdown
            trigger={
              <button>
                <div className={s.dropdownContainer}>
                  <Typography variant={'subtitle1'} as={'span'} className={s.typographyDecorator}>
                    Ivan
                  </Typography>
                  <Avatar src={Ava} size={'36px'} />
                </div>
              </button>
            }
          >
            <DropdownItem className={s.dropdownItem}>
              {' '}
              <Avatar src={Ava} size={'36px'} />
              <div>
                <Typography variant={'subtitle2'}>Ivan</Typography>
                <Typography variant={'caption'} className={s.emailText}>
                  123@456.com
                </Typography>
              </div>
            </DropdownItem>
            <DropdownItemWithIcon icon={<Person />} text={'My Profile'}></DropdownItemWithIcon>
            <DropdownItemWithIcon icon={<Logout />} text={'Sign Out'}></DropdownItemWithIcon>
          </Dropdown>
        </div>
      </div>
    )
  )
}
