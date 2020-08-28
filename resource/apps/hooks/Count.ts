import React from 'react'
const { useState } = React

export const useCountSkateboard = (): {
  count: number
  onBomb: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
} => {
  const [count, setCount] = useState<number>(0)
  const onBomb = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    if (event.currentTarget instanceof HTMLElement) event.currentTarget!.classList.add('is-bomb')
    setCount(count + 1)
  }

  return { count, onBomb }
}
