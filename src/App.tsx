import { useState } from 'react'

import { RadioGroup } from './components/ui/radio-group/radio-group'

export function App() {
  const [value, setValue] = useState([25, 75])

  return (
    <div>
      <RadioGroup values={['aboba', 'not aboba']} />
    </div>
  )
}
