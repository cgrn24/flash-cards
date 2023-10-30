import { ArrowBack } from '../../../assets/icons'
import { Card, Typography } from '../../ui'
import Button from '../../ui/button/button'

import s from './learn-pack.module.scss'

export const LearnPack = () => {
  return (
    <div className={s.container}>
      <div className={s.back}>
        <ArrowBack />
        <Typography variant="body2" className={s.link}>
          Back to Packs list
        </Typography>
      </div>
      <div className={s.cardContainer}>
        <Card className={s.card}>
          <Typography variant="large" className={s.headerText}>
            Learn &apos;Pack Name&apos;
          </Typography>
          <Typography className={s.questionText}>
            <b>Question:</b> How &apos;This&apos; works in JavaScript?
          </Typography>
          <Typography className={s.darkText}>
            Количество попыток ответов на вопрос: <b>10</b>
          </Typography>
          <Button fullWidth>Show answer</Button>
        </Card>
      </div>
    </div>
  )
}
