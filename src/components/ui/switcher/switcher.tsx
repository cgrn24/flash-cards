import { FC, ReactNode } from 'react'

import * as TabsRadixUI from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './switcher.module.scss'

export type TabType = {
  /** A unique value that associates the trigger with a content. */
  value: string
  title: string
  disabled?: boolean
}

type TabsProps = {
  /** An array of objects with the value and title of the tab.
   *  {value: string, title: string}
   * */
  tabs: TabType[]
  /** The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs. */
  defaultValue?: string
  /** The controlled value of the tab to activate. Should be used in conjunction with onValueChange */
  value?: string
  /** Event handler called when the value changes.  */
  onValueChange?: (value: string) => void
  /** Use TabsContent components as children. */
  children?: ReactNode
  fullWidth?: boolean
}

export const Tabs: FC<TabsProps> = ({
  tabs,
  value,
  defaultValue,
  children,
  fullWidth,
  onValueChange,
}) => {
  const classNames = {
    root: s.root,
    list: s.list,
    trigger: clsx(s.trigger, fullWidth && s.fullWidth),
  }

  console.log(value)

  return (
    <TabsRadixUI.Root
      className={classNames.root}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
    >
      <TabsRadixUI.List className={classNames.list}>
        {tabs.map(tab => (
          <TabsRadixUI.Trigger
            className={classNames.trigger}
            key={tab.value}
            value={tab.value}
            disabled={tab.disabled}
          >
            {tab.title}
          </TabsRadixUI.Trigger>
        ))}
      </TabsRadixUI.List>
      {children}
    </TabsRadixUI.Root>
  )
}

export type TabContentProps = {
  /** A unique value that associates the trigger with a content. */
  value: string
  children: ReactNode
}

export const TabContent: FC<TabContentProps> = ({ value, children }) => {
  return <TabsRadixUI.Content value={value}>{children}</TabsRadixUI.Content>
}
