import { useState } from 'react'

import { ArrowBack } from '../../../assets/icons'
import { NewPack } from '../../modals/new-pack/new-pack'
import { Card, Typography } from '../../ui'
import Button from '../../ui/button/button'
import { Modal } from '../../ui/modal/modal'
import { RadioGroup } from '../../ui/radio-group/radio-group'

import s from './learn-pack.module.scss'

export const LearnPack = () => {
  const [showAnswer, setShowAnswer] = useState(false)
  const rate = ['Did not know', 'Forgor', 'A lot of thought', 'Confused', 'Knew the answer']

  return (
    <div className={s.container}>
      <Modal open={true} title="Add New Pack">
        <NewPack />
      </Modal>
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
          <Typography variant="body2" className={s.darkText}>
            Количество попыток ответов на вопрос: <b>10</b>
          </Typography>
          {showAnswer && (
            <>
              <Typography className={s.answerText}>
                <b>Answer:</b> This is how &apos;This&apos; works in JavaScript
              </Typography>
              <Typography className={s.rateText}>
                <b>Rate yourself:</b>
              </Typography>
              <RadioGroup values={rate} />
              <Button fullWidth className={s.nextButton}>
                Next question
              </Button>
            </>
          )}
          {!showAnswer && (
            <Button fullWidth onClick={() => setShowAnswer(true)}>
              Show answer
            </Button>
          )}
        </Card>
      </div>
    </div>
  )
}
