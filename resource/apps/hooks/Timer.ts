import * as React from 'react'
const { useState } = React

const useTimer = (): {
  second: number
  over: boolean
} => {
  const [second, setSeconds] = useState<number>(30)
  let over = false
  const countSeconds = setTimeout((): void => {
    setSeconds(second - 1)
  }, 1000)
  if (second === 0) {
    clearTimeout(countSeconds)
    over = true
  }
  return { second, over }
}

export default useTimer
