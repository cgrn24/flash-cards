import { useState } from 'react'

import { Header } from './components/ui/header/header'
import { RangeSlider } from './components/ui/slider/slider'

export function App() {
  const [value, setValue] = useState([25, 75])

  return (
    <div>
      <RangeSlider max={100} min={0} value={value} onChange={setValue} />
    </div>
  )
}
