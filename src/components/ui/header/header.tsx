import { FC } from 'react'

import { Avatar, Typography } from '..'
import { Logo, Logout, Person } from '../../../assets/icons'
import Ava from '../../../assets/images/ava.png'
import { useLogoutMutation, useMeQuery } from '../../../services/auth/auth.service'
import Button from '../button/button'
import { Dropdown, DropdownItem, DropdownItemWithIcon } from '../dropdown/dropdown'

import s from './header.module.scss'

export const Header: FC = () => {
  const [logout] = useLogoutMutation()
  const { data } = useMeQuery()

  return (
    <div className={s.header}>
      <div className={s.container}>
        <Logo />
        {data ? (
          <Dropdown
            trigger={
              <button>
                <div className={s.dropdownContainer}>
                  <Typography variant={'subtitle1'} as={'span'} className={s.typographyDecorator}>
                    {data.name}
                  </Typography>
                  <Avatar src={data.avatar || Ava} size={'36px'} />
                </div>
              </button>
            }
          >
            <DropdownItem className={s.dropdownItem}>
              <Avatar src={Ava} size={'36px'} />
              <div>
                <Typography variant={'subtitle2'}>{data.name}</Typography>
                <Typography variant={'caption'} className={s.emailText}>
                  {data.email}
                </Typography>
              </div>
            </DropdownItem>
            <DropdownItemWithIcon icon={<Person />} text={'My Profile'}></DropdownItemWithIcon>
            <DropdownItemWithIcon
              icon={<Logout />}
              text={'Sign Out'}
              onClick={() => logout()}
            ></DropdownItemWithIcon>
          </Dropdown>
        ) : (
          <Button as={'a'} href="/login">
            Sign in
          </Button>
        )}
      </div>
    </div>
  )
}
