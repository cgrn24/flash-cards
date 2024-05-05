import { FC } from 'react'

import { Edit, Play, Trash } from '../../../../assets/icons'
import { Deck } from '../../../../services/decks/decks.types'
import { TableCell, TableRow } from '../../../ui/table'

import s from './pack.module.scss'

type Props = Partial<Deck>

export const Pack: FC<Props> = ({ name, cardsCount, updated, author }) => {
  const onLearn = () => {
    return
  }
  const onEdit = () => {
    return
  }
  const onDelete = () => {
    return
  }
  const date = new Date(updated || '2024-05-05')
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const formattedDate = `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{cardsCount}</TableCell>
      <TableCell>{formattedDate}</TableCell>
      <TableCell>{author?.name}</TableCell>
      <TableCell>
        <div className={s.actions}>
          <button onClick={onLearn} className={s.actionButton}>
            <Play />
          </button>
          <button onClick={onEdit} className={s.actionButton}>
            <Edit />
          </button>
          <button onClick={onDelete} className={s.actionButton}>
            <Trash />
          </button>
        </div>
      </TableCell>
    </TableRow>
  )
}
