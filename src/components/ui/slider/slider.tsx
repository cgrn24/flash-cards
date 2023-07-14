import { FC } from 'react'

import * as Slider from '@radix-ui/react-slider'

import { TextField } from '..'

import s from './slider.module.scss'

type Props = SliderType & Omit<Slider.SliderProps, keyof SliderType>

type SliderType = {
  value: number[]
  onChange: (value: number[]) => void
  max: number
  min: number
}

export const RangeSlider: FC<Props> = ({ value, onChange, max, min }) => {
  return (
    <div className={s.container}>
      <TextField type="number" max={max} min={min} className={s.input} value={value[0]} readOnly />
      <Slider.Root
        defaultValue={value}
        minStepsBetweenThumbs={1}
        max={max}
        min={min}
        onValueChange={onChange}
        className={s.sliderRoot}
      >
        <Slider.Track className={s.sliderTrack}>
          <Slider.Range className={s.sliderRange} />
        </Slider.Track>
        <Slider.Thumb className={s.sliderThumb} />
        <Slider.Thumb className={s.sliderThumb} />
      </Slider.Root>
      <TextField type="number" max={max} min={min} className={s.input} value={value[1]} readOnly />
    </div>
  )
}
