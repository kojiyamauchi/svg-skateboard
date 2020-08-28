/*
  App.
*/

import React from 'react'
import { SkateBoard } from '@/components/SkateBoard/View'
import { Counter } from '@/components/Counter/View'
import { Timer } from '@/components/Timer/View'
import { Wall } from '@/components/Wall/View'
import styled from 'styled-components'
import backGround from '@/materials/images/background.png'
import { useCountSkateboard } from '@/hooks/Count'
import { useTimer } from '@/hooks/Timer'

type Props = {
  className?: string
}

const AppComponent: React.FC<Props> = ({ className }): JSX.Element => {
  const { count, onBomb } = useCountSkateboard()
  const { second, over } = useTimer()
  return (
    <div className={className}>
      <SkateBoard fn={onBomb} stateOver={over} />
      <Counter stateCount={count} stateOver={over} />
      <Timer stateSecond={second} stateOver={over} />
      <Wall stateCount={count} stateOver={over} />
    </div>
  )
}

const StyledComponent = styled(AppComponent)`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-image: url(${backGround});
  background-repeat: repeat;
  background-position: top left;
  background-size: 100px;
`

export const App = StyledComponent
