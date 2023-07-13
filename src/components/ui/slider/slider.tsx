import { FC } from 'react'

import * as Slider from '@radix-ui/react-slider'

import { TextField } from '..'

import s from './slider.module.scss'

export type SliderType = {
  value: number[]
  onChange: (value: number[]) => void
  max: number
  min: number
}

export const RangeSlider: FC<SliderType> = ({ value, onChange, max, min }) => {
  return (
    <div>
      <TextField type="number" max={max} min={min} />
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
      <TextField />
    </div>
  )
}
