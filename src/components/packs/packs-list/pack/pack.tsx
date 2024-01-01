import { FC } from 'react'

import { Edit, Play, Trash } from '../../../../assets/icons'
import { DeckType } from '../../../../pages/decks/decks'
import { TableCell, TableRow } from '../../../ui/table'

import s from './pack.module.scss'

type Props = Partial<DeckType>

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

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{cardsCount}</TableCell>
      <TableCell>{updated}</TableCell>
      <TableCell>{author?.name}</TableCell>
      <TableCell className={s.actionsContainer}>
        <div className={s.actions}>
          <button onClick={onLearn}>
            <Play />
          </button>
          <button onClick={onEdit}>
            <Edit />
          </button>
          <button onClick={onDelete}>
            <Trash />
          </button>
        </div>
      </TableCell>
    </TableRow>
  )
}
